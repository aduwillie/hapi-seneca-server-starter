import webpack from 'webpack';
import config from '../webpack.config';
import chalk from 'chalk';

const compiler = webpack(config);

compiler.run((err) => {
        if(err) throw(err);
        console.log(chalk.green('Successfully built your app!'));
});