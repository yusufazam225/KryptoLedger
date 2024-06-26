// swagger.js

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.1',
  info: {
    title: 'Koinx assignment by Yusuf Azam',
    version: '1.0.0',
    description: 'API for uploading and processing CSV files',
  },
  servers: [
    {
      url: process.env.SWAGGER_URL,
    },
  ],
};

// Options for the swagger docs
const options = {
  swaggerDefinition,
  // Path to the API docs
  apis: ["./src/routes/**.js"], 
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

export { swaggerUi, swaggerSpec };
