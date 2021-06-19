const skills = [
  { id: 222222, skill: 'Jump', mastered: true },
  { id: 344444, skill: 'Crawl', mastered: false },
  { id: 434555, skill: 'Run', mastered: false }
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
};

function update(id, updatedSkill) {
  id = parseInt(id);
  const skill = skills.find(skill => skill.id === id);
  Object.assign(skill, updatedSkill);
}

function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}

function create(newSkill) {
  newSkill.id = Date.now() % 1000000;
  newSkill.done = false;
  skills.push(newSkill);
}

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}

function getAll() {
  return skills;
}