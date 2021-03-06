var db = require('../dbConfig');
require('./skill');
var TeachSkill = require('./teachSkill');
var LearnSkill = require('./learnSkill');

//////////////////////////////////////////////////////////////////
// Require statements for incomplete feature: UPVOTING OTHER USERS
//
var LikeTeacher = require('./likeTeacher');
var LikeLearner = require('./likeLearner');
//////////////////////////////////////////////////////////////////


var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,

  initialize: function () {
    // Place for creating event listener
    // e.g. this.on('creating', function(model, attrs, options){

  },

  teachSkills: function () {
    return this.belongsToMany('Skill', 'users_teach_skills').withPivot(['skill_level','blurb','stars']);
  },

  learnSkills: function () {
    return this.belongsToMany('Skill', 'users_learn_skills').withPivot(['skill_level','blurb','stars']);
  },

  ///////////////////////////////////////////////////////////////////
  // Relations functions for incomplete feature: UPVOTING OTHER USERS
  // 
  likeTeachers: function () {
    return this.belongsToMany('LikeTeacher', 'users_like_teachers');
  },

  likeLearners: function () {
    return this.belongsToMany('LikeLearner', 'users_like_learners');
  }
  ///////////////////////////////////////////////////////////////////

});


module.exports = db.model('User', User);
