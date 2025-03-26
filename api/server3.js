module.exports = (req, res) => {
  res.status(200).json({ server: 'server3', fps: '85', ping: '40ms', temperature: '38%' });
};
