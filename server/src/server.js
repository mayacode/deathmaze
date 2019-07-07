import express from 'express';
import path from 'path';

const app = express();
app.use(express.static(path.join(__dirname, '../../dist/client')));

app.get('/', (req, res, next) => {
  res.sendFile(
    'index.html',
    {
      root: path.join(__dirname, '../../dist/client'),
    },
    err => {
      if (err) {
        next(err);
      } else {
        console.log('Sent:', 'index.html');
      }
    },
  );
});

// app.use(err => {
//   console.log(err);
// });

app.listen('8081', () => {
  console.log(`server runs on port 8081`);
});
