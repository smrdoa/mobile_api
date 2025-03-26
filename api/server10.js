module.exports = (req, res) => {
  res.status(200).json({ server: 'server10', fps: '96', ping: '20ms', temperature: '28%' });
};
