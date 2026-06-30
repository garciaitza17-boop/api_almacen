var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');

// --- 1. ENRUTADORES DE TU ALMACÉN ---
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authenticationRouter = require('./routes/authentication');
var auxiliaresRouter = require('./routes/auxiliares');
var categoriasRouter = require('./routes/categorias');         
var comprasRouter = require('./routes/compras');
var detallesComprasRouter = require('./routes/detallesCompras'); // Añadida
var despachosRouter = require('./routes/despachos');
var detallesDespachosRouter = require('./routes/detallesDespachos'); // Añadida
var marcasRouter = require('./routes/marcas');
var productosRouter = require('./routes/productos');
var proveedoresRouter = require('./routes/proveedores');       
var rolsRouter = require('./routes/rols');
var ubicacionesRouter = require('./routes/ubicaciones');       

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// --- 2. MIDDLEWARES (Activación de Cors y BodyParser) ---
app.use(cors()); // Permite que tu frontend se comunique con la API sin bloqueos
app.use(logger('dev'));

// Configuración para recibir JSON pesados o formularios correctamente
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// --- 3. DECLARACIÓN DE RUTAS DE LA API ---
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authenticationRouter);       
app.use('/auxiliares', auxiliaresRouter);    
app.use('/categorias', categoriasRouter);    
app.use('/compras', comprasRouter);           
app.use('/detalles-compras', detallesComprasRouter); 
app.use('/despachos', despachosRouter);       
app.use('/detalles-despachos', detallesDespachosRouter); 
app.use('/marcas', marcasRouter);             
app.use('/productos', productosRouter);       
app.use('/proveedores', proveedoresRouter);   
app.use('/rols', rolsRouter);                 
app.use('/ubicaciones', ubicacionesRouter);  

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  });
});

module.exports = app;
