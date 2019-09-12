class JamBuddy{

    selectNotes() {
        var arr = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']
        //random selection
        var note1 = arr[Math.floor(Math.random() * arr.length)];
        var note2 = arr[Math.floor(Math.random() * arr.length)];
        
    
        // Find postion of note1 
        var i = 0;
        for (i = 0; i < arr.length; i++)
            if (arr[i] == note1)
                break;
    
    
        // Find postion of note2 
        var j;
        for (j = arr.length - 1; j >= i + 1; j--)
            if (arr[j] ==note2)
                break;
    
        //calculate distance
        var results = i - j
        if (results < 0)
            results *= -1
    
        return results;
     
    }
    
    check_answer(userInput){
        var results = this.selectNotes();
        if (userInput == results){
            return true
        }else
        {
            return false
        }
    }
    }
