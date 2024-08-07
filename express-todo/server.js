const express = require("express");
require("express-async-errors");
const { query, validationResult } = require("express-validator");
const connectDb = require("./config/db");
const todoRoutes = require("./routes/todo.route");
const todoViewRoutes = require("./routes/todo.view.route");
const authRoutes = require("./routes/auth.route");
const adminRoutes = require("./routes/admin.route");
const homeRoutes = require("./routes/home.route");
const NotFoundError = require("./errors/not-found.error");
const CustomError = require("./errors/custom.error");
const path = require("path");
const app = express();
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51M2ALFFEon6AQRRqZGoTHmXZFVSKoxQVoFRYpjpHMNeZ7CuWF2i2MEuVXCLDRGceLSR9Fh1tjLQp5aUK76gEHyX100Oz1EleVm"
);

const allowlist = ["http://localhost:5173"];
const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (allowlist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

app.use(cors(corsOptionsDelegate));

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

// console.log({ __dirname }, process.env.test);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

connectDb();

app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        req.headers["stripe-signature"],
        "whsec_4e432bec602c524f16450de5d256b34138cbecf1397183ae80e77a02d2664d3e"
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`, err.message);
      return res.sendStatus(400);
    }

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        const orderId = session.metadata.orderId;

        console.log("scue");
        // Update the order status to 'completed'
        // await Order.findByIdAndUpdate(orderId, { status: "completed" });
        break;
      }

      case "checkout.session.expired": {
        const session = event.data.object;
        const orderId = session.metadata.orderId;
        console.log("cancel");
        // Update the order status to 'cancelled'
        // await Order.findByIdAndUpdate(orderId, { status: "cancelled" });
        break;
      }

      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    res.sendStatus(200);
  }
);

app.use(express.json());
app.use("/api/todos", todoRoutes);
app.use("/view/todo", todoViewRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/home", homeRoutes);

// when clicked on proceed to payment
app.post("/api/checkout", async (req, res) => {
  const products = req.body; // [{_id: 123, name: watch, orderQuanity: 2, price: 100 }]
  let lineItems = [];
  for (const item of products) {
    const price = await stripe.prices.create({
      unit_amount: item.price * 100, // Amount in cents
      currency: "usd",
      product_data: {
        name: item.name,
      },
    });

    lineItems.push({
      price: price.id,
      quantity: item.orderQuantity,
    });
  }

  // insert into order table with status (pending)

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/cancel",
  });

  res.json({
    url: session.url,
  });
});

app.all("*", (req, res) => {
  throw new NotFoundError("Route not found.");
});

app.use((err, req, res, next) => {
  if (err instanceof CustomError) {
    res.status(err.statusCode).json({
      errors: err.serializeErrors(),
    });
    return;
  }

  console.log(err);
  res.status(500).json({
    message: "Internal Server Error.",
  });
});


app.listen(3000, () => {
  console.log("Server Started on Port 3000");
});
