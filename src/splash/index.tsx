import Plugin from '@entities/plugin';

export default class extends Plugin {
   start() {
      this.logger.log('Welcome to the splash.');
   }

   stop() {
      this.logger.log('Goodbye splash.');
   }
}