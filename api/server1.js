module.exports = (req, res) => {
  res.status(200).json({ server: 'server1', fps: '90', ping: '35ms', temperature: '40%' });
};

