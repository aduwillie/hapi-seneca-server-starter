import Hapi from 'hapi';
import Inert from 'inert';

const port = process.env.PORT || 3000;

var server = new Hapi.Server();
server.connection({ port });

server.register(Inert, err => {
	if (err) throw err;

	// Register routes here
	server.route({
		method: 'GET',
		path: '/',
		handler: (request, reply) => {
			reply.file('dist/index.html');
		}
	});

	server.route({
		method: 'GET',
		path: '/{filename*}',
		handler: request => {
			return request.params.filename;
		}
	});

	server.start(err => {
		if (err) throw err;

		console.log(`Server started on port: ${port}`);
	});
});
