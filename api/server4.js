module.exports = (req, res) => {
  res.status(200).json({ server: 'server4', fps: '82', ping: '38ms', temperature: '37%' });
};
