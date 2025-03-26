module.exports = (req, res) => {
  res.status(200).json({ server: 'server2', fps: '88', ping: '30ms', temperature: '35%' });
};
