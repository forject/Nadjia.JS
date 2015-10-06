var nodeGit = require('nodegit');

/***
 * The "GitHandler" class manages interactions with git servers for deployement.
 */
var GitHandler = {
    /**
     * URL of the Repository thats going to be cloned
     */
    repoURL: '',

    /**
     * Valid path to clone the Repository to.
     */
    savePath: '',

    /**
     * Cloning options if needed
     */
    cloneOptions: {},

    /**
     * Function for validating if the git-URL given in repoURL is
     * valid.
     */
    validateURL: function() {

    },

    /**
     * Function for cloning repositorys from git using the repoURL
     * as the repository that it clones and savePath for the Path
     * where it is saved.
     */
    cloneRepository: function() {

    }
};


// Adding GitHandler to Node Modules for use in external files
module.exports = GitHandler;