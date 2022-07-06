import Plugin from '@entities/plugin';
import Settings from './components/Settings';

export default class extends Plugin {
   start() {
      this.logger.log('Welcome to the main app.');
   }

   stop() {
      this.logger.log('Goodbye main app.');
   }

   getSettingsPanel() {
      return Settings;
   }
}