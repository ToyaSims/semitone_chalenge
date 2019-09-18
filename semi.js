class JamBuddy {
  constructor() {
    this.note1;
    this.note2;
    this.arr = [
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#"
    ];
  }
  selectNotes() {
    //random selection
    this.note1 = this.arr[Math.floor(Math.random() * this.arr.length)];
    this.note2 = this.arr[Math.floor(Math.random() * this.arr.length)];
    var arr2 = [this.note1, this.note2];
    document.getElementById("note1").innerHTML = this.note1;
    document.getElementById("note2").innerHTML = this.note2;

    return arr2;
  }

  check_answer() {
    // Find note1
    var i = 0;
    for (i = 0; i < this.arr.length; i++) if (this.arr[i] == this.note1) break;

    // Find note2
    var j;
    for (j = this.arr.length - 1; j >= i + 1; j--)
      if (this.arr[j] == this.note2) break;
    var answer = document.getElementById("answer").value;
    answer = parseInt(answer);
    //calculate distance
    var results = i - j;
    if (results < 0) results *= -1;
    if (answer == results) {
      var a = true;
    } else {
      a = false;
    }
    alert(a);

    return a;
  }
}
let buddy = new JamBuddy();
let notes = buddy.selectNotes();
