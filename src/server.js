import app from './app';

app.listen(3333, () => {
  const PORT = process.env.PORT || 3333;
  console.log(`Server is running in http://localhost:${PORT}`);
});
