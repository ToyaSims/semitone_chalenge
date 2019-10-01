class JamBuddy {
  constructor() {
    this.note1;
    this.note2;
    this.result;

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

    // console.log(arr2);
    for (var i = 0; i < arr2.length; i++) {
      if (arr2[i] == "A#") {
        arr2.push("bf");

        return arr2;
      } else if (arr2[i] == "C#") {
        arr2.push("df");
      } else if (arr2[i] == "D#") {
        arr2.push("ef");
      } else if (arr2[i] == "F#") {
        arr2.push("gf");
      } else if (arr2[i] == "G#") {
        arr2.push("af");
      }
    }
    console.log(arr2);
    document.getElementById("note1").innerHTML = arr2[0];
    document.getElementById("note2").innerHTML = arr2[1];
    for (var j = 0; j < arr2.length; j++) {
      if (arr2[j].includes("f") || arr2[j].includes("#")) {
        return arr2[Math.floor(Math.random() * arr2.length)];
      }
    }
    return arr2;
  }
  revealAnswer() {
    var array = [
      "A",
      "A#",
      "BF",
      "B",
      "C",
      "C#",
      "DF",
      "D",
      "D#",
      "EF",
      "E",
      "F",
      "F#",
      "GF",
      "G",
      "G#",
      "AF"
    ];
    document.getElementById("explanation").innerHTML = array;

    selectNotes();
  }
  getRandomNotes() {
    document.getElementById("explanation").style.display = "none";
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
      alert("Congratulations You got it right .Well Done!");
    } else {
      a = false;
      alert("Wrong answer! Try again");
    }

    return a;
  }
}

let buddy = new JamBuddy();
let note = buddy.selectNotes();

