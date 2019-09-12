
describe("selectNotes()", function(){
  let jam = new JamBuddy();
it("should return distance between 2 notes", function(){
    let result = jam.selectNotes();
    expect(result).toBeLessThan(11);
})

});


describe("check_answer", function(){
  let jam = new JamBuddy();
  //when one passes the other should fail
  it("should check if inserted correct answer", function(){
      let result = jam.check_answer();
      expect(result).toBe(true);
  })

  it("should check if inserted correct answer", function(){
    let result = jam.check_answer();
    expect(result).not.toBe(true);
})
});


