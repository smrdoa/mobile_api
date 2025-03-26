module.exports = (req, res) => {
  res.status(200).json({ server: 'server6', fps: '87', ping: '30ms', temperature: '35%' });
};
