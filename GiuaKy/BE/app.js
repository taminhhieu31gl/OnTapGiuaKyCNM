import express from 'express';
import bodyParser from 'body-parser';
import mainRoutes from './server/routes/route.js';

const app = express();
app.use(bodyParser.json());

// set up port
const port = 5035;
// set up route
app.use('/api/',mainRoutes);
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Project Support',
  });
});
app.listen(port, () => {
  console.log(`Our server is running on port ${port}`);
});
