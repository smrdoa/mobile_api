module.exports = (req, res) => {
  res.status(200).json({ server: 'server5', fps: '85', ping: '32ms', temperature: '36%' });
};
