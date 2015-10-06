var nodeGit = require('nodegit');

var GitHandler = {
    repoURL: '',
    savePath: '',

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