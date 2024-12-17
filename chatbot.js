function sendMessage() {
    var userInput = document.getElementById('userInput').value;
    var chatbox = document.getElementById('chatbox');

    var userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.textContent = ' ' + userInput;
    chatbox.appendChild(userMessage);

    var botMessage = document.createElement('div');
    botMessage.className = 'bot-message';
    botMessage.textContent = 'Bot: ' + getBotResponse(userInput);
    chatbox.appendChild(botMessage);

    document.getElementById('userInput').value = '';
    chatbox.scrollTop = chatbox.scrollHeight;
}

function getBotResponse(input) {
    if (input.toLowerCase() === 'halo') {
        return 'Halo! Is there anything I can help you with?';
    } else if (input.toLowerCase() === 'halo!') {
        return 'Halo! Is there anything I can help you with?';
    } else if (input.toLowerCase() === 'hey') {
        return 'Halo! Is there anything I can help you with?';
    } else if (input.toLowerCase() === 'hey!') {
        return 'Halo! Is there anything I can help you with?';
    } else if (input.toLowerCase() === 'p') {
        return 'Halo! Is there anything I can help you with?';
    } else if (input.toLowerCase() === 'p!') {
        return 'Halo! Is there anything I can help you with?';
    } else if (input.toLowerCase() === 'hi') {
        return 'Halo! Is there anything I can help you with?';
    } else if (input.toLowerCase() === 'hi!') {
        return 'Halo! Is there anything I can help you with?';
    } else if (input.toLowerCase() === 'hai') {
        return 'Halo! Is there anything I can help you with?';
    } else if (input.toLowerCase() === 'hai!') {
        return 'Halo! Is there anything I can help you with?';
    } else if (input.toLowerCase() === 'assalamualaikum') {
        return 'Waalaikum Salam, is there anything I can help you with?';

   
    } else if (input.toLowerCase() === 'how are you?') {
        return "I'm good, thank you! What about you?";
    } else if (input.toLowerCase() === 'how are you') {
        return "I'm good, thank you! What about you?";
    } else if (input.toLowerCase() === 'how are you!') {
        return "I'm good, thank you! What about you?";
    } else if (input.toLowerCase() === 'how are you today!') {
        return "I'm good, thank you! What about you?";
    } else if (input.toLowerCase() === 'how are you today') {
        return "I'm good, thank you! What about you?";
    } else if (input.toLowerCase() === 'how are you today?') {
        return "I'm good, thank you! What about you?";
    } else if (input.toLowerCase() === 'hey, how are you today') {
        return "I'm good, thank you! What about you?";
    } else if (input.toLowerCase() === 'hey, how are you today?') {
        return "I'm good, thank you! What about you?";
    } else if (input.toLowerCase() === 'hey, how are you today!') {
        return "I'm good, thank you! What about you?";
    } else if (input.toLowerCase() === 'halo, how are you today!') {
        return "I'm good, thank you! What about you?";
    } else if (input.toLowerCase() === 'halo, how are you today') {
        return "I'm good, thank you! What about you?";
    } else if (input.toLowerCase() === 'halo, how are you today?') {
        return "I'm good, thank you! What about you?";
    } else if (input.toLowerCase() === 'hai, how are you today?') {
        return "I'm good, thank you! What about you?";
    } else if (input.toLowerCase() === 'hai, how are you today!') {
        return "I'm good, thank you! What about you?";
    } else if (input.toLowerCase() === 'hai, how are you today') {
        return "I'm good, thank you! What about you?";
    } else if (input.toLowerCase() === 'hi, how are you today!') {
        return "I'm good, thank you! What about you?";
    } else if (input.toLowerCase() === 'hi, how are you today?') {
        return "I'm good, thank you! What about you?";
    } else if (input.toLowerCase() === 'hi, how are you today') {
        return "I'm good, thank you! What about you?";


    } else if (input.toLowerCase() === "i'm fine!") {
        return 'Glad to hear that, is there anything I can help with?';
    } else if (input.toLowerCase() === "i'm fine") {
        return 'Glad to hear that, is there anything I can help with?';
    } else if (input.toLowerCase() === "fine") {
        return 'Glad to hear that, is there anything I can help with?';
    } else if (input.toLowerCase() === 'fine!') {
        return 'Glad to hear that, is there anything I can help with?';
    } else if (input.toLowerCase() === "i'm good!") {
        return 'Glad to hear that, is there anything I can help with?';
    } else if (input.toLowerCase() === "i'm good") {
        return 'Glad to hear that, is there anything I can help with?';
    } else if (input.toLowerCase() === 'good') {
        return 'Glad to hear that, is there anything I can help with?';
    } else if (input.toLowerCase() === 'good!') {
        return 'Glad to hear that, is there anything I can help with?';

    } else if (input.toLowerCase() === 'not good!') {
        return "I'm sorry to hear that, is there anything I can help with?";
    } else if (input.toLowerCase() === 'not good') {
        return "I'm sorry to hear that, is there anything I can help with?";
    } else if (input.toLowerCase() === "i'm not good!") {
        return "I'm sorry to hear that, is there anything I can help with?";
    } else if (input.toLowerCase() === "i'm not good") {
        return "I'm sorry to hear that, is there anything I can help with?";
    } else if (input.toLowerCase() === "i'm not good today!") {
        return "I'm sorry to hear that, is there anything I can help with?";
    } else if (input.toLowerCase() === "i'm not good today") {
        return "I'm sorry to hear that, is there anything I can help with?";
    } else if (input.toLowerCase() === "i'm not fine today!") {
        return "I'm sorry to hear that, is there anything I can help with?";
    } else if (input.toLowerCase() === "i'm not fine today") {
        return "I'm sorry to hear that, is there anything I can help with?";

    } else if (input.toLowerCase() === "what is the origin of menjer lake?") {
        return "According to legend, two girls found a giant crab. One of the girls rubbed the crab, causing the appearance of a large hole that later became Menjer Lake.";
    } else if (input.toLowerCase() === "what is the origin of menjer lake!") {
        return "According to legend, two girls found a giant crab. One of the girls rubbed the crab, causing the appearance of a large hole that later became Menjer Lake.";
    } else if (input.toLowerCase() === "what is the origin of menjer lake") {
        return "According to legend, two girls found a giant crab. One of the girls rubbed the crab, causing the appearance of a large hole that later became Menjer Lake.";
    
    } else if (input.toLowerCase() === "telaga menjer is?") {
        return "Menjer Lake is a natural lake located in Maron Village, Garung District, Wonosobo Regency, Central Java. This lake was formed due to the eruption of Mount Pakuwaja in the past. Previously, this lake was just a small spring that would widen when it rained. Menjer Lake is known for its natural beauty and clear water, and is one of the popular tourist destinations in the Dieng area.";
    } else if (input.toLowerCase() === "telaga menjer is!") {
        return "Menjer Lake is a natural lake located in Maron Village, Garung District, Wonosobo Regency, Central Java. This lake was formed due to the eruption of Mount Pakuwaja in the past. Previously, this lake was just a small spring that would widen when it rained. Menjer Lake is known for its natural beauty and clear water, and is one of the popular tourist destinations in the Dieng area.";
    } else if (input.toLowerCase() === "telaga menjer is") {
        return "Menjer Lake is a natural lake located in Maron Village, Garung District, Wonosobo Regency, Central Java. This lake was formed due to the eruption of Mount Pakuwaja in the past. Previously, this lake was just a small spring that would widen when it rained. Menjer Lake is known for its natural beauty and clear water, and is one of the popular tourist destinations in the Dieng area.";

    } else if (input.toLowerCase() === "what is the origin of the name telaga menjer according to local legends?") {
        return 'The name Telaga Menjer comes from the word "menjer" which means "screaming" in Javanese, which describes the sound of screams heard when this lake was formed.';
    } else if (input.toLowerCase() === "what is the origin of the name telaga menjer according to local legends!") {
        return 'The name Telaga Menjer comes from the word "menjer" which means "screaming" in Javanese, which describes the sound of screams heard when this lake was formed.';
    } else if (input.toLowerCase() === "what is the origin of the name telaga menjer according to local legends") {
        return 'The name Telaga Menjer comes from the word "menjer" which means "screaming" in Javanese, which describes the sound of screams heard when this lake was formed.';
        
    } else if (input.toLowerCase() === "are there any special ceremonies or rituals performed at menjer lake based on the legend?") {
        return "Yes, there is a traditional ceremony carried out by the local community to honor Menjer Lake and preserve it.";
    } else if (input.toLowerCase() === "are there any special ceremonies or rituals performed at menjer lake based on the legend!") {
        return "Yes, there is a traditional ceremony carried out by the local community to honor Menjer Lake and preserve it.";
    } else if (input.toLowerCase() === "are there any special ceremonies or rituals performed at menjer lake based on the legend") {
        return "Yes, there is a traditional ceremony carried out by the local community to honor Menjer Lake and preserve it.";
    
    

    } else if (input.toLowerCase() === "what is telaga warna?") {
        return "Telaga Warna is a beautiful lake located in the Dieng Plateau, Central Java, Indonesia, known for its vibrant and changing colors.";
    } else if (input.toLowerCase() === "what is telaga warna!") {
        return "Telaga Warna is a beautiful lake located in the Dieng Plateau, Central Java, Indonesia, known for its vibrant and changing colors.";
    } else if (input.toLowerCase() === "what is telaga warna") {
        return "Telaga Warna is a beautiful lake located in the Dieng Plateau, Central Java, Indonesia, known for its vibrant and changing colors.";
    } else if (input.toLowerCase() === "what is warna lake?") {
        return "Telaga Warna is a beautiful lake located in the Dieng Plateau, Central Java, Indonesia, known for its vibrant and changing colors.";
    } else if (input.toLowerCase() === "what is warna lake!") {
        return "Telaga Warna is a beautiful lake located in the Dieng Plateau, Central Java, Indonesia, known for its vibrant and changing colors.";
    } else if (input.toLowerCase() === "what is warna lake") {
        return "Telaga Warna is a beautiful lake located in the Dieng Plateau, Central Java, Indonesia, known for its vibrant and changing colors.";

    } else if (input.toLowerCase() === 'why is telaga warna called "color lake"?') {
        return 'The lake is called "Color Lake" because its waters change colors, ranging from blue, green, yellow, to even rainbow hues, due to the high sulfur content and sunlight reflection.';
    } else if (input.toLowerCase() === 'why is telaga warna called "color lake"!') {
        return 'The lake is called "Color Lake" because its waters change colors, ranging from blue, green, yellow, to even rainbow hues, due to the high sulfur content and sunlight reflection.?';
    } else if (input.toLowerCase() === 'why is telaga warna called "color lake"') {
        return 'The lake is called "Color Lake" because its waters change colors, ranging from blue, green, yellow, to even rainbow hues, due to the high sulfur content and sunlight reflection.?';

    } else if (input.toLowerCase() === 'what is the legend behind telaga warna?') {
        return "According to legend, Telaga Warna was formed from the tears of a heartbroken princess who lost her beloved. Her tears filled the lake, and the colors represent her emotions.";
    } else if (input.toLowerCase() === 'what is the legend behind telaga warna!') {
        return "According to legend, Telaga Warna was formed from the tears of a heartbroken princess who lost her beloved. Her tears filled the lake, and the colors represent her emotions.";
    } else if (input.toLowerCase() === 'what is the legend behind telaga warna') {
        return "According to legend, Telaga Warna was formed from the tears of a heartbroken princess who lost her beloved. Her tears filled the lake, and the colors represent her emotions.";
    } else if (input.toLowerCase() === 'what is the legend behind warna lake?') {
        return "According to legend, Telaga Warna was formed from the tears of a heartbroken princess who lost her beloved. Her tears filled the lake, and the colors represent her emotions.";
    } else if (input.toLowerCase() === 'what is the legend behind warna lake!') {
        return "According to legend, Telaga Warna was formed from the tears of a heartbroken princess who lost her beloved. Her tears filled the lake, and the colors represent her emotions.";
    } else if (input.toLowerCase() === 'what is the legend behind warna lake') {
        return "According to legend, Telaga Warna was formed from the tears of a heartbroken princess who lost her beloved. Her tears filled the lake, and the colors represent her emotions.";

    } else if (input.toLowerCase() === 'where is telaga warna located?') {
        return "Telaga Warna is located in the Dieng Plateau, Central Java, Indonesia.";
    } else if (input.toLowerCase() === 'where is telaga warna located!') {
        return "Telaga Warna is located in the Dieng Plateau, Central Java, Indonesia.";
    } else if (input.toLowerCase() === 'where is telaga warna located') {
        return "Telaga Warna is located in the Dieng Plateau, Central Java, Indonesia.";
    } else if (input.toLowerCase() === 'where is warna lake located?') {
        return "Warna lake is located in the Dieng Plateau, Central Java, Indonesia.";
    } else if (input.toLowerCase() === 'where is warna lake located!') {
        return "Warna lake is located in the Dieng Plateau, Central Java, Indonesia.";
    } else if (input.toLowerCase() === 'where is warna lake located') {
        return "Warna lake is located in the Dieng Plateau, Central Java, Indonesia.";



    } else if (input.toLowerCase() === 'what is telaga pengilon?') {
        return "Telaga Pengilon is a clear and serene lake located in the Dieng Plateau, Central Java, Indonesia, known for its mirror-like surface.";
    } else if (input.toLowerCase() === 'what is telaga pengilon!') {
        return "Telaga Pengilon is a clear and serene lake located in the Dieng Plateau, Central Java, Indonesia, known for its mirror-like surface.?";
    } else if (input.toLowerCase() === 'what is telaga pengilon') {
        return "Telaga Pengilon is a clear and serene lake located in the Dieng Plateau, Central Java, Indonesia, known for its mirror-like surface.";
    } else if (input.toLowerCase() === 'what is pengilon lake?') {
        return "Pengilon Lake is a clear and serene lake located in the Dieng Plateau, Central Java, Indonesia, known for its mirror-like surface.";
    } else if (input.toLowerCase() === 'what is pengilon lake!') {
        return "Pengilon Lake is a clear and serene lake located in the Dieng Plateau, Central Java, Indonesia, known for its mirror-like surface.";
    } else if (input.toLowerCase() === 'what is pengilon lake') {
        return "Pengilon Lake is a clear and serene lake located in the Dieng Plateau, Central Java, Indonesia, known for its mirror-like surface.";

    } else if (input.toLowerCase() === 'why is telaga pengilon called "mirror lake"?') {
        return 'The lake is called "Mirror Lake" because its waters are so clear and calm that they reflect the surrounding scenery like a mirror.';
    } else if (input.toLowerCase() === 'why is telaga pengilon called "mirror lake"!') {
        return 'The lake is called "Mirror Lake" because its waters are so clear and calm that they reflect the surrounding scenery like a mirror.';
    } else if (input.toLowerCase() === 'why is telaga pengilon called "mirror lake"') {
        return'The lake is called "Mirror Lake" because its waters are so clear and calm that they reflect the surrounding scenery like a mirror.';
    } else if (input.toLowerCase() === 'why is pengilon lake called "mirror lake"?') {
        return 'The lake is called "Mirror Lake" because its waters are so clear and calm that they reflect the surrounding scenery like a mirror.';
    } else if (input.toLowerCase() === 'why is pengilon lake called "mirror lake"!') {
        return 'The lake is called "Mirror Lake" because its waters are so clear and calm that they reflect the surrounding scenery like a mirror.';
    } else if (input.toLowerCase() === 'why is pengilon lake called "mirror lake"') {
        return 'The lake is called "Mirror Lake" because its waters are so clear and calm that they reflect the surrounding scenery like a mirror.';

    } else if (input.toLowerCase() === 'what is the legend behind telaga pengilon?') {
        return "According to legend, Telaga Pengilon was created by a powerful spirit who wanted to provide a place for reflection and meditation. It is said that those who look into the lake can see their true selves.";
    } else if (input.toLowerCase() === 'what is the legend behind telaga pengilon!') {
        return "According to legend, Telaga Pengilon was created by a powerful spirit who wanted to provide a place for reflection and meditation. It is said that those who look into the lake can see their true selves.";
    } else if (input.toLowerCase() === 'what is the legend behind telaga pengilon') {
        return "According to legend, Telaga Pengilon was created by a powerful spirit who wanted to provide a place for reflection and meditation. It is said that those who look into the lake can see their true selves.";
    } else if (input.toLowerCase() === 'what is the legend behind pengilon?') {
        return "According to legend, Pengilon Lake was created by a powerful spirit who wanted to provide a place for reflection and meditation. It is said that those who look into the lake can see their true selves.";
    } else if (input.toLowerCase() === 'what is the legend behind pengilon!') {
        return "According to legend, Pengilon Lake was created by a powerful spirit who wanted to provide a place for reflection and meditation. It is said that those who look into the lake can see their true selves.";
    } else if (input.toLowerCase() === 'what is the legend behind pengilon') {
        return "According to legend, Pengilon Lake was created by a powerful spirit who wanted to provide a place for reflection and meditation. It is said that those who look into the lake can see their true selves.";

    } else if (input.toLowerCase() === 'where is telaga pengilon located?') {
        return "Telaga Pengilon is located in the Dieng Plateau, Central Java, Indonesia, near Telaga Warna.";
    } else if (input.toLowerCase() === 'where is telaga pengilon located!') {
        return "Telaga Pengilon is located in the Dieng Plateau, Central Java, Indonesia, near Telaga Warna.";
    } else if (input.toLowerCase() === 'where is telaga pengilon located') {
        return "Telaga Pengilon is located in the Dieng Plateau, Central Java, Indonesia, near Telaga Warna.";
    } else if (input.toLowerCase() === 'where is pengilon lake located?') {
        return "Pengilon Lake is located in the Dieng Plateau, Central Java, Indonesia, near Telaga Warna.";
    } else if (input.toLowerCase() === 'where is pengilon lake located!') {
        return "Pengilon Lake is located in the Dieng Plateau, Central Java, Indonesia, near Telaga Warna.";
    } else if (input.toLowerCase() === 'where is pengilon lake located') {
        return "Pengilon Lake is located in the Dieng Plateau, Central Java, Indonesia, near Telaga Warna.";



    } else if (input.toLowerCase() === 'what is the rambut gimbal tradition in wonosobo?') {
        return "The rambut gimbal tradition in Wonosobo involves a ceremonial haircut for children who naturally develop dreadlocks, believed to be a spiritual inheritance from ancestors.";
    } else if (input.toLowerCase() === 'what is the rambut gimbal tradition in wonosobo!') {
        return "The rambut gimbal tradition in Wonosobo involves a ceremonial haircut for children who naturally develop dreadlocks, believed to be a spiritual inheritance from ancestors.";
    } else if (input.toLowerCase() === 'what is the rambut gimbal tradition in wonosobo') {
        return "The rambut gimbal tradition in Wonosobo involves a ceremonial haircut for children who naturally develop dreadlocks, believed to be a spiritual inheritance from ancestors.";
    } else if (input.toLowerCase() === 'what is the dreadlocks tradition in wonosobo?') {
        return "The dreadlocks tradition in Wonosobo involves a ceremonial haircut for children who naturally develop dreadlocks, believed to be a spiritual inheritance from ancestors.";
    } else if (input.toLowerCase() === 'what is the dreadlocks tradition in wonosobo!') {
        return "The dreadlocks tradition in Wonosobo involves a ceremonial haircut for children who naturally develop dreadlocks, believed to be a spiritual inheritance from ancestors.";
    } else if (input.toLowerCase() === 'what is the dreadlocks tradition in wonosobo') {
        return "The dreadlocks tradition in Wonosobo involves a ceremonial haircut for children who naturally develop dreadlocks, believed to be a spiritual inheritance from ancestors.";

    } else if (input.toLowerCase() === 'where is the rambut gimbal tradition practiced?') {
        return "The tradition is practiced in the Dieng Plateau, which includes areas in Wonosobo and Banjarnegara.";
    } else if (input.toLowerCase() === 'where is the rambut gimbal tradition practiced!') {
        return "The tradition is practiced in the Dieng Plateau, which includes areas in Wonosobo and Banjarnegara.";
    } else if (input.toLowerCase() === 'where is the rambut gimbal tradition practiced') {
        return "The tradition is practiced in the Dieng Plateau, which includes areas in Wonosobo and Banjarnegara.";
    } else if (input.toLowerCase() === 'where is the dreadlocks tradition practiced?') {
        return "The tradition is practiced in the Dieng Plateau, which includes areas in Wonosobo and Banjarnegara.";
    } else if (input.toLowerCase() === 'where is the dreadlocks tradition practiced!') {
        return "The tradition is practiced in the Dieng Plateau, which includes areas in Wonosobo and Banjarnegara.";
    } else if (input.toLowerCase() === 'where is the dreadlocks tradition practiced') {
        return "The tradition is practiced in the Dieng Plateau, which includes areas in Wonosobo and Banjarnegara.";

    } else if (input.toLowerCase() === 'who are believed to be the ancestors associated with rambut gimbal?') {
        return "The ancestors associated with rambut gimbal are Kyai Kolodete and Nini Roro Ronce, who are believed to have had dreadlocks themselves";
    } else if (input.toLowerCase() === 'who are believed to be the ancestors associated with rambut gimbal!') {
        return "The ancestors associated with rambut gimbal are Kyai Kolodete and Nini Roro Ronce, who are believed to have had dreadlocks themselves";
    } else if (input.toLowerCase() === 'who are believed to be the ancestors associated with rambut gimbal') {
        return "The ancestors associated with rambut gimbal are Kyai Kolodete and Nini Roro Ronce, who are believed to have had dreadlocks themselves";
    } else if (input.toLowerCase() === 'who are believed to be the ancestors associated with dreadlocks?') {
        return "The ancestors associated with rambut gimbal are Kyai Kolodete and Nini Roro Ronce, who are believed to have had dreadlocks themselves";
    } else if (input.toLowerCase() === 'who are believed to be the ancestors associated with dreadlocks!') {
        return "The ancestors associated with rambut gimbal are Kyai Kolodete and Nini Roro Ronce, who are believed to have had dreadlocks themselves";
    } else if (input.toLowerCase() === 'who are believed to be the ancestors associated with dreadlocks') {
        return "The ancestors associated with rambut gimbal are Kyai Kolodete and Nini Roro Ronce, who are believed to have had dreadlocks themselves";

    } else if (input.toLowerCase() === 'why do children develop rambut gimbal according to local beliefs?') {
        return "According to local beliefs, children develop rambut gimbal as a sign of spiritual inheritance and are considered special or blessed";
    } else if (input.toLowerCase() === 'why do children develop rambut gimbal according to local beliefs!') {
        return "According to local beliefs, children develop rambut gimbal as a sign of spiritual inheritance and are considered special or blessed";
    } else if (input.toLowerCase() === 'why do children develop rambut gimbal according to local beliefs') {
        return "According to local beliefs, children develop rambut gimbal as a sign of spiritual inheritance and are considered special or blessed";
    } else if (input.toLowerCase() === 'why do children develop dreadlocks according to local beliefs?') {
        return "According to local beliefs, children develop dreadlocks as a sign of spiritual inheritance and are considered special or blessed";
    } else if (input.toLowerCase() === 'why do children develop dreadlocks according to local beliefs!') {
        return "According to local beliefs, children develop dreadlocks as a sign of spiritual inheritance and are considered special or blessed";
    } else if (input.toLowerCase() === 'why do children develop dreadlocks according to local beliefs') {
        return "According to local beliefs, children develop dreadlocks as a sign of spiritual inheritance and are considered special or blessed";

    } else if (input.toLowerCase() === 'what is the purpose of the ruwatan ceremony?') {
        return "The purpose of the ruwatan ceremony is to cleanse the child from misfortune and to fulfill their special requests before cutting their dreadlocks";
    } else if (input.toLowerCase() === 'what is the purpose of the ruwatan ceremony!') {
        return "The purpose of the ruwatan ceremony is to cleanse the child from misfortune and to fulfill their special requests before cutting their dreadlocks";
    } else if (input.toLowerCase() === 'what is the purpose of the ruwatan ceremony') {
        return "The purpose of the ruwatan ceremony is to cleanse the child from misfortune and to fulfill their special requests before cutting their dreadlocks";

    } else if (input.toLowerCase() === "what happens if the child's requests are not fulfilled during the ceremony?") {
        return "If the child's requests are not fulfilled, it is believed that their dreadlocks will grow back";
    } else if (input.toLowerCase() === "what happens if the child's requests are not fulfilled during the ceremony!") {
        return "If the child's requests are not fulfilled, it is believed that their dreadlocks will grow back";
    } else if (input.toLowerCase() === "what happens if the child's requests are not fulfilled during the ceremony") {
        return "If the child's requests are not fulfilled, it is believed that their dreadlocks will grow back";

    } else if (input.toLowerCase() === 'what is done with the cut dreadlocks after the ceremony?') {
        return "The cut dreadlocks are wrapped in a shroud and buried by the child's parents as part of the ritual";
    } else if (input.toLowerCase() === 'what is done with the cut dreadlocks after the ceremony!') {
        return "The cut dreadlocks are wrapped in a shroud and buried by the child's parents as part of the ritual";
    } else if (input.toLowerCase() === 'what is done with the cut dreadlocks after the ceremony') {
        return "The cut dreadlocks are wrapped in a shroud and buried by the child's parents as part of the ritual";



    } else if (input.toLowerCase() === 'what is the legend behind mount sumbing?') {
        return "According to legend, Mount Sumbing was once a powerful and hot-tempered giant who was transformed into a mountain after a fierce battle with another giant.";
    } else if (input.toLowerCase() === 'what is the legend behind mount sumbing!') {
        return "According to legend, Mount Sumbing was once a powerful and hot-tempered giant who was transformed into a mountain after a fierce battle with another giant.";
    } else if (input.toLowerCase() === 'what is the legend behind mount sumbing') {
        return "According to legend, Mount Sumbing was once a powerful and hot-tempered giant who was transformed into a mountain after a fierce battle with another giant.";

    } else if (input.toLowerCase() === 'where is mount sumbing located?') {
        return "Mount Sumbing is located in Central Java, Indonesia, near the town of Wonosobo.";
    } else if (input.toLowerCase() === 'where is mount sumbing located!') {
        return "Mount Sumbing is located in Central Java, Indonesia, near the town of Wonosobo.";
    } else if (input.toLowerCase() === 'where is mount sumbing located') {
        return "Mount Sumbing is located in Central Java, Indonesia, near the town of Wonosobo.";

    } else if (input.toLowerCase() === 'what caused the transformation of the giant into mount sumbing located?') {
        return "The transformation occurred after a fierce battle with another giant. The intense emotions and power of the battle caused the giant to be turned into a mountain.";
    } else if (input.toLowerCase() === 'what caused the transformation of the giant into mount sumbing located!') {
        return "The transformation occurred after a fierce battle with another giant. The intense emotions and power of the battle caused the giant to be turned into a mountain.";
    } else if (input.toLowerCase() === 'what caused the transformation of the giant into mount sumbing located') {
        return "The transformation occurred after a fierce battle with another giant. The intense emotions and power of the battle caused the giant to be turned into a mountain.";

    } else if (input.toLowerCase() === 'what does mount sumbing symbolize in the legend?') {
        return "Mount Sumbing symbolizes strength, power, and the consequences of uncontrolled anger.";
    } else if (input.toLowerCase() === 'what does mount sumbing symbolize in the legend!') {
        return "Mount Sumbing symbolizes strength, power, and the consequences of uncontrolled anger.";
    } else if (input.toLowerCase() === 'what does mount sumbing symbolize in the legend') {
        return "Mount Sumbing symbolizes strength, power, and the consequences of uncontrolled anger.";

    } else if (input.toLowerCase() === 'how do the local people view the legend of mount sumbing?') {
        return "The local people view the legend as a moral lesson about the importance of controlling one's temper and the consequences of anger.";
    } else if (input.toLowerCase() === 'how do the local people view the legend of mount sumbing!') {
        return "The local people view the legend as a moral lesson about the importance of controlling one's temper and the consequences of anger.";
    } else if (input.toLowerCase() === 'how do the local people view the legend of mount sumbing') {
        return "The local people view the legend as a moral lesson about the importance of controlling one's temper and the consequences of anger.";



    } else if (input.toLowerCase() === 'what is the legend behind mount sindoro?') {
        return "According to legend, Mount Sindoro was once a gentle and kind giant who was transformed into a mountain after a conflict with his brother, who became Mount Sumbing.";
    } else if (input.toLowerCase() === 'what is the legend behind mount sindoro!') {
        return "According to legend, Mount Sindoro was once a gentle and kind giant who was transformed into a mountain after a conflict with his brother, who became Mount Sumbing.";
    } else if (input.toLowerCase() === 'what is the legend behind mount sindoro') {
        return "According to legend, Mount Sindoro was once a gentle and kind giant who was transformed into a mountain after a conflict with his brother, who became Mount Sumbing.";

    } else if (input.toLowerCase() === 'where is mount sindoro located?') {
        return "Mount Sindoro is located in Central Java, Indonesia, near the town of Wonosobo.";
    } else if (input.toLowerCase() === 'where is mount sindoro located!') {
        return "Mount Sindoro is located in Central Java, Indonesia, near the town of Wonosobo.";
    } else if (input.toLowerCase() === 'where is mount sindoro located') {
        return "Mount Sindoro is located in Central Java, Indonesia, near the town of Wonosobo.";

    } else if (input.toLowerCase() === 'what caused the transformation of the giant into mount sindoro?') {
        return "The transformation occurred after a fierce argument with his brother, resulting in both being turned into mountains by a powerful force.";
    } else if (input.toLowerCase() === 'what caused the transformation of the giant into mount sindoro?') {
        return "The transformation occurred after a fierce argument with his brother, resulting in both being turned into mountains by a powerful force.";
    } else if (input.toLowerCase() === 'what caused the transformation of the giant into mount sindoro?') {
        return "The transformation occurred after a fierce argument with his brother, resulting in both being turned into mountains by a powerful force.";

    } else if (input.toLowerCase() === 'what does mount sindoro symbolize in the legend?') {
        return "Mount Sindoro symbolizes gentleness, kindness, and the importance of harmony.";
    } else if (input.toLowerCase() === 'what does mount sindoro symbolize in the legend!') {
        return "Mount Sindoro symbolizes gentleness, kindness, and the importance of harmony.";
    } else if (input.toLowerCase() === 'what does mount sindoro symbolize in the legend') {
        return "Mount Sindoro symbolizes gentleness, kindness, and the importance of harmony.";

    } else if (input.toLowerCase() === 'how do the local people view the legend of mount sindoro?') {
        return "The local people view the legend as a moral lesson about the importance of maintaining harmony and understanding between individuals with different personalities.";
    } else if (input.toLowerCase() === 'how do the local people view the legend of mount sindoro!') {
        return "The local people view the legend as a moral lesson about the importance of maintaining harmony and understanding between individuals with different personalities.";
    } else if (input.toLowerCase() === 'how do the local people view the legend of mount sindoro') {
        return "The local people view the legend as a moral lesson about the importance of maintaining harmony and understanding between individuals with different personalities.";



    } else if (input.toLowerCase() === 'what is folklore?') {
        return "Folklore refers to the traditional beliefs, customs, stories, songs, and practices of a community, passed down through generations by word of mouth.";
    } else if (input.toLowerCase() === 'what is folklore!') {
        return "Folklore refers to the traditional beliefs, customs, stories, songs, and practices of a community, passed down through generations by word of mouth.";
    } else if (input.toLowerCase() === 'what is folklore') {
        return "Folklore refers to the traditional beliefs, customs, stories, songs, and practices of a community, passed down through generations by word of mouth.";

    } else if (input.toLowerCase() === 'why is folklore important?') {
        return "Folklore is important because it preserves the cultural heritage and identity of a community, providing insights into their values, beliefs, and history.";
    } else if (input.toLowerCase() === 'why is folklore important!') {
        return "Folklore is important because it preserves the cultural heritage and identity of a community, providing insights into their values, beliefs, and history.";
    } else if (input.toLowerCase() === 'why is folklore important') {
        return "Folklore is important because it preserves the cultural heritage and identity of a community, providing insights into their values, beliefs, and history.";

    } else if (input.toLowerCase() === 'what are some common elements of folklore?') {
        return "Common elements of folklore include myths, legends, fairy tales, proverbs, riddles, folk songs, and traditional dances.";
    } else if (input.toLowerCase() === 'what are some common elements of folklore!') {
        return "Folklore is transmitted orally from one generation to the next, often through storytelling, songs, and rituals.";
    } else if (input.toLowerCase() === 'what are some common elements of folklore') {
        return "Folklore is transmitted orally from one generation to the next, often through storytelling, songs, and rituals.";

    } else if (input.toLowerCase() === 'what is the difference between a myth and a legend?') {
        return "A myth is a traditional story that explains natural phenomena, the origins of the world, or the customs of a society, often involving gods or supernatural beings. A legend is a narrative about historical events or figures, often embellished over time.";
    } else if (input.toLowerCase() === 'what is the difference between a myth and a legend!') {
        return "A myth is a traditional story that explains natural phenomena, the origins of the world, or the customs of a society, often involving gods or supernatural beings. A legend is a narrative about historical events or figures, often embellished over time.";
    } else if (input.toLowerCase() === 'what is the difference between a myth and a legend') {
        return "A myth is a traditional story that explains natural phenomena, the origins of the world, or the customs of a society, often involving gods or supernatural beings. A legend is a narrative about historical events or figures, often embellished over time.";

    } else if (input.toLowerCase() === 'can folklore change over time?') {
        return "Yes, folklore can change over time as it is passed down through generations, with each storyteller adding their own interpretations and variations.";
    } else if (input.toLowerCase() === 'can folklore change over time!') {
        return "Yes, folklore can change over time as it is passed down through generations, with each storyteller adding their own interpretations and variations.";
    } else if (input.toLowerCase() === 'can folklore change over time') {
        return "Yes, folklore can change over time as it is passed down through generations, with each storyteller adding their own interpretations and variations.";

    } else if (input.toLowerCase() === 'How do folktales differ across cultures?') {
        return "Folktales differ across cultures in their themes, characters, and settings, reflecting the unique cultural, geographical, and historical contexts of each community.";
    } else if (input.toLowerCase() === 'How do folktales differ across cultures!') {
        return "Folktales differ across cultures in their themes, characters, and settings, reflecting the unique cultural, geographical, and historical contexts of each community.";
    } else if (input.toLowerCase() === 'How do folktales differ across cultures') {
        return "Folktales differ across cultures in their themes, characters, and settings, reflecting the unique cultural, geographical, and historical contexts of each community.";

    } else if (input.toLowerCase() === 'hi, how are you today') {
        return "I'm good, thank you! What about you?";






    
    
    
    } else {
        return "Sorry, i don't undersand"
    }
}