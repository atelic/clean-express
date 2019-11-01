import swaggerJsdoc from "swagger-jsdoc";

export const swaggerSpec = swaggerJsdoc({
  apis: ["**/*.ts"],
  swaggerDefinition: {
    info: {
      description: "An express boilerplate.",
      title: "Clean Express",
      version: "0.0.1",
    },
  },
});
