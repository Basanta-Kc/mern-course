const Task = require("./model/task");

const resolvers = {
  Query: {
    getTasks: async () => {
      return await Task.find();
    },
    getTask: async (_, { id }) => {
      return await Task.findById(id);
    },
  },
  Mutation: {
    createTask: async (_, { title, description, status }) => {
      const task = new Task({ title, description, status });
      await task.save();
      return task;
    },
    updateTask: async (_, { id, title, description, status }) => {
      const task = await Task.findById(id);
      if (title) task.title = title;
      if (description) task.description = description;
      if (status) task.status = status;
      await task.save();
      return task;
    },
    deleteTask: async (_, { id }) => {
      const task = await Task.findByIdAndDelete(id);
      return task;
    },
  },
};

module.exports = resolvers;
