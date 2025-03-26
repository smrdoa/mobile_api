module.exports = (req, res) => {
  res.status(200).json({ server: 'server9', fps: '94', ping: '22ms', temperature: '30%' });
};
