module.exports = (req, res) => {
  res.status(200).json({ server: 'server8', fps: '92', ping: '25ms', temperature: '32%' });
};
