/**
 * Contains the miscellaneous route handlers.
 * @author Syanda Mntambo <https://github.com/syandagihub>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
