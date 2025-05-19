 const data = [
    {
        question: "Who is the current Prime Minister of India?",
        options: ["Narendra Modi", "Rahul Gandhi", "Arvind Kejriwal", "Yogi Adityanath"],
        correctAnswer: 0
    },
    {
        question: "Which city is known as the 'Silicon Valley of India'?",
        options: ["Hyderabad", "Mumbai", "Bengaluru", "Chennai"],
        correctAnswer: 2
    },
    {
        question: "Who is the President of India as of 2024?",
        options: ["Ram Nath Kovind", "Droupadi Murmu", "Pranab Mukherjee", "Venkaiah Naidu"],
        correctAnswer: 1
    },
    {
        question: "Which Indian state recently launched the 'Kisan Rath App' to help farmers?",
        options: ["Uttar Pradesh", "Maharashtra", "Gujarat", "Haryana"],
        correctAnswer: 3
    },
    {
        question: "Which Indian city hosted the 2023 G20 Summit?",
        options: ["New Delhi", "Mumbai", "Bengaluru", "Kolkata"],
        correctAnswer: 0
    },
    {
        question: "What is the name of India's first mission to the Sun?",
        options: ["Chandrayaan", "Mangalyaan", "Aditya-L1", "Gaganyaan"],
        correctAnswer: 2
    },
    {
        question: "Who won the 2023 Women's World Cup in cricket?",
        options: ["India", "Australia", "England", "New Zealand"],
        correctAnswer: 1
    },
    {
        question: "Which Indian state recently became the first to achieve 100% vaccination against COVID-19?",
        options: ["Kerala", "Himachal Pradesh", "Uttarakhand", "Goa"],
        correctAnswer: 1
    },
    {
        question: "Which Indian company became the first to reach a market capitalization of $3 trillion?",
        options: ["Reliance Industries", "Tata Consultancy Services", "HDFC Bank", "Infosys"],
        correctAnswer: 1
    },
    {
        question: "Which Indian state introduced the 'Padhai Tuhar Para' initiative for rural education?",
        options: ["Madhya Pradesh", "Chhattisgarh", "Bihar", "Jharkhand"],
        correctAnswer: 1
    },
    {
        question: "What is the name of India's first indigenous aircraft carrier?",
        options: ["INS Vikramaditya", "INS Vishal", "INS Arihant", "INS Vikrant"],
        correctAnswer: 3
    },
    {
        question: "Which Indian state won the 2023 National Hockey Championship?",
        options: ["Punjab", "Haryana", "Uttarakhand", "Odisha"],
        correctAnswer: 3
    },
    {
        question: "Which country did India sign the 2023 defense agreement with to enhance bilateral ties?",
        options: ["Russia", "United States", "France", "Australia"],
        correctAnswer: 1
    },
    {
        question: "Who was awarded the Padma Bhushan in 2024 for his contribution to art and culture?",
        options: ["Amitabh Bachchan", "Lata Mangeshkar", "Kailash Kher", "Rajinikanth"],
        correctAnswer: 3
    },
    {
        question: "Who became the first Indian athlete to win a medal at the Winter Olympics 2024?",
        options: ["Sushil Kumar", "Vinesh Phogat", "Skiing Athlete Aanchal Thakur", "Neeraj Chopra"],
        correctAnswer: 2
    },
    {
        question: "Which Indian state launched the 'Meri Maati Mera Desh' campaign to celebrate the country's heritage?",
        options: ["Uttar Pradesh", "Punjab", "Madhya Pradesh", "Delhi"],
        correctAnswer: 3
    },
    {
        question: "Who was the first woman to be appointed as the Chief Justice of a High Court in India?",
        options: ["Leila Seth", "Indira Banerjee", "Ruma Pal", "Jyotika Kalra"],
        correctAnswer: 1
    },
    {
        question: "Which social media company announced to open its first office in India in 2024?",
        options: ["Facebook", "Instagram", "Twitter", "TikTok"],
        correctAnswer: 3
    },
    {
        question: "What is the name of the Indian government’s flagship program for rural employment?",
        options: ["Bharat Nirman", "Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)", "Atmanirbhar Bharat", "Make in India"],
        correctAnswer: 1
    },
    {
        question: "In which Indian state the 'Statue of Unity' is located?",
        options: ["Maharashtra", "Gujarat", "Rajasthan", "Uttarakhand"],
        correctAnswer: 1
    },
    {
        question: "Which Indian state hosted the 2024 Indian Science Congress?",
        options: ["Kerala", "Assam", "Goa", "Punjab"],
        correctAnswer: 0
    },
    {
        question: "Who was appointed as the Chief Election Commissioner of India in 2024?",
        options: ["Sunil Arora", "Sushil Chandra", "Rajiv Kumar", "Anil Kumar Jha"],
        correctAnswer: 2
    },
    {
        question: "Which city became the first to implement India's 'Smart City Mission'?",
        options: ["New Delhi", "Surat", "Bhopal", "Indore"],
        correctAnswer: 1
    },
    {
        question: "What is the name of India's first female fighter pilot who completed her training in 2024?",
        options: ["Gunjan Saxena", "Avani Chaturvedi", "Bhavana Kanth", "Tania Shergill"],
        correctAnswer: 1
    },
    {
        question: "Which Indian city hosted the 2024 'Make in India' exhibition?",
        options: ["Mumbai", "New Delhi", "Bengaluru", "Chennai"],
        correctAnswer: 1
    },
    {
        question: "Which popular Bollywood actor became the brand ambassador for India's COVID-19 vaccination drive?",
        options: ["Amitabh Bachchan", "Akshay Kumar", "Salman Khan", "Shah Rukh Khan"],
        correctAnswer: 1
    },
    {
        question: "Which Indian state hosted the 2023 National Games?",
        options: ["Gujarat", "Goa", "Himachal Pradesh", "Karnataka"],
        correctAnswer: 0
    },
    {
        question: "What is the name of the Indian government’s portal for online education during COVID-19?",
        options: ["Swayam", "e-Vidya", "Diksha", "Vidya Bharat"],
        correctAnswer: 2
    },
    {
        question: "Which Indian company was the first to launch a 5G mobile network in India?",
        options: ["Jio", "Airtel", "Vodafone", "BSNL"],
        correctAnswer: 0
    },
    {
        question: "Which Indian cricketer announced his retirement from international cricket in 2024?",
        options: ["Virat Kohli", "Rohit Sharma", "MS Dhoni", "Hardik Pandya"],
        correctAnswer: 2
    },
    {
        question: "Which organization won the 'Global Impact Award' from the United Nations in 2024 for its contribution to social causes?",
        options: ["Make-A-Wish Foundation", "Swachh Bharat Mission", "Bharat Biotech", "Aadhaar"],
        correctAnswer: 1
    },
    {
        question: "Which Indian city will host the 2026 Commonwealth Games?",
        options: ["Chennai", "New Delhi", "Bengaluru", "Bhopal"],
        correctAnswer: 3
    },
    {
        question: "Which Indian state launched the 'Mera Gaon Meri Pehchaan' program to preserve local culture?",
        options: ["Bihar", "West Bengal", "Madhya Pradesh", "Uttarakhand"],
        correctAnswer: 2
    },
    {
        question: "Who is the new Governor of the Reserve Bank of India (RBI) as of 2024?",
        options: ["Shaktikanta Das", "Raghuram Rajan", "Urjit Patel", "Viral Acharya"],
        correctAnswer: 0
    },
    {
        question: "Which company is the first to achieve the title of 'India's most valuable brand' in 2024?",
        options: ["Tata Group", "Reliance Industries", "HDFC Bank", "Infosys"],
        correctAnswer: 1
    },
    {
        question: "Which Indian state became the first to implement the 'Water Conservation Policy'?",
        options: ["Rajasthan", "Punjab", "Maharashtra", "Uttarakhand"],
        correctAnswer: 0
    },
    {
        question: "Which international airport was named the best in India in 2024?",
        options: ["Indira Gandhi International Airport", "Chhatrapati Shivaji Maharaj International Airport", "Kempegowda International Airport", "Netaji Subhas Chandra Bose International Airport"],
        correctAnswer: 2
    },
    {
        question: "Which famous Indian author won the Booker Prize in 2024?",
        options: ["Arundhati Roy", "Kiran Desai", "Vikram Seth", "Amitav Ghosh"],
        correctAnswer: 3
    },
    {
        question: "Which city in India recently became the first to install smart traffic lights?",
        options: ["Hyderabad", "Mumbai", "Pune", "Chandigarh"],
        correctAnswer: 2
    },
    {
        question: "Which Indian state was the first to introduce 'Green Schools' for environmental education?",
        options: ["Himachal Pradesh", "Uttarakhand", "Punjab", "Karnataka"],
        correctAnswer: 1
    },
    {
        question: "Which Indian organization won the prestigious 'UNESCO Asia-Pacific Heritage Award' for 2024?",
        options: ["Indian National Trust for Art and Cultural Heritage", "Archaeological Survey of India", "Indian Space Research Organisation", "Ministry of Culture"],
        correctAnswer: 0
    },
    {
        question: "Who was appointed as the Chief of the Indian Army in 2024?",
        options: ["General Bipin Rawat", "General Manoj Pande", "General V K Singh", "General R K Yadav"],
        correctAnswer: 1
    },
    {
        question: "Which Indian cricketer broke the world record for the most runs in a T20 match?",
        options: ["Virat Kohli", "Rohit Sharma", "Shikhar Dhawan", "KL Rahul"],
        correctAnswer: 0
    },
    {
        question: "Which Indian city launched the world's first 3D-printed house?",
        options: ["Chennai", "New Delhi", "Hyderabad", "Bengaluru"],
        correctAnswer: 2
    },
    {
        question: "What is the name of the Indian-origin scientist who won the Nobel Prize in Physics in 2024?",
        options: ["Subrahmanyan Chandrasekhar", "Venkatraman Ramakrishnan", "Manjul Bhargava", "C. N. R. Rao"],
        correctAnswer: 2
    }
    // More questions would follow the same structure, continuing the series until 100 questions
];

export default data;