const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/motel', // La ruta que deseas redirigir
    createProxyMiddleware({
      target: 'http://127.0.0.1:8000', // La URL de tu servidor backend
      changeOrigin: true,
    })
  );
};
