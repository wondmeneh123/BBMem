import React from "react";
import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "../fb";

const AddChapters = () => {
  const questions = [
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question: "East African Rift Valley is known as the cradle of humanity.",
      answer: "True",
    },
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question:
        "Australopithecus afarensis, known as Lucy, was discovered at Hadar in Ethiopia.",
      answer: "True",
    },
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question: "Homo habilis fossils were discovered in the Lower Omo Valley.",
      answer: "True",
    },
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question:
        "The Stone Age is conventionally divided into Paleolithic, Mesolithic, and Neolithic periods.",
      answer: "True",
    },
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question:
        "The Paleolithic period lasted from 3.4 million to 11,000 years BP.",
      answer: "True",
    },
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question:
        "The domestication of plants and animals first began during the Paleolithic period.",
      answer: "False",
    },
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question:
        "The Mesolithic period is considered a transitional phase between the Old and New Stone Ages.",
      answer: "True",
    },
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question:
        "Teff, enset, and nug were among the crops domesticated in Ethiopia.",
      answer: "True",
    },
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question:
        "The Semitic language family includes Amharic, Tigrigna, and Ge'ez.",
      answer: "True",
    },
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question:
        "Omotic languages are predominantly spoken in southwestern Ethiopia.",
      answer: "True",
    },
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question:
        "Islam was introduced to the Horn of Africa primarily through Jihad.",
      answer: "False",
    },
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question:
        "Christianity became the state religion of Ethiopia in 334 A.D.",
      answer: "True",
    },
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question:
        "The Zagwe dynasty is known for the construction of rock-hewn churches in Lalibela.",
      answer: "True",
    },
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question:
        "The Aksumite state was one of the four great powers of the ancient world.",
      answer: "True",
    },
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question:
        "The Adulis inscription provides evidence of Aksumite trade in the Red Sea region.",
      answer: "True",
    },
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question:
        "The Aksumite state minted coins for both local and international trade.",
      answer: "True",
    },
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question:
        "Judaism was practiced in Ethiopia since ancient times by communities such as the Bete-Israel.",
      answer: "True",
    },
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question:
        "The Nilo-Saharan languages are primarily spoken along the Ethiopian-Sudanese border.",
      answer: "True",
    },
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question:
        "The Oromo practiced a social and political organization known as the Gadaa system.",
      answer: "True",
    },
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question:
        "The Nine Saints were instrumental in expanding Christianity in Ethiopia.",
      answer: "True",
    },
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question:
        "The fossil Chororapithecus, dated to 10 million years BP, was discovered in _____.",
      answer: "Anchar",
    },
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question:
        "Lucy, an Australopithecus afarensis fossil, was discovered in _____.",
      answer: "Hadar",
    },
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question:
        "The Lower Omo Valley is notable for the discovery of fossils of the genus _____.",
      answer: "Homo",
    },
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question:
        "The domestication of plants like teff and enset occurred during the ____ period.",
      answer: "Neolithic",
    },
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question:
        "The two superfamilies of languages in Ethiopia and the Horn are _____ and _____.",
      answer: "Afro-Asiatic Nilo-Saharan",
    },
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question:
        "The Cushitic language family includes languages such as _____ and _____.",
      answer: "Oromiffa Somali",
    },
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question:
        "Christianity became the state religion of Ethiopia during the reign of King _____.",
      answer: "Ezana",
    },
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question: "The Zagwe dynasty's political center was located in _____.",
      answer: "Lalibela",
    },
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question: "The Aksumite state's main exports included ____ and ____.",
      answer: "ivory frankincense",
    },
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question:
        "The Adulis inscription, written in _____, provides evidence of Aksumite trade.",
      answer: "Greek",
    },
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question:
        "The Nine Saints included figures like Abuna _____ and Abba _____.",
      answer: "Aregawi Pentelwon",
    },
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question: "The Gadaa system organized Oromo society into ____ and _____.",
      answer: "age grades generation sets",
    },
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question:
        "The Nilo-Saharan languages include groups such as ____ and ____.",
      answer: "Berta Gumuz",
    },
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question:
        "The Zagwe dynasty is best known for the construction of ____ churches in Lalibela.",
      answer: "rock-hewn",
    },
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question: "The Aksumite state minted coins made of ____, ____, and ____.",
      answer: "gold silver bronze",
    },
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question:
        "The indigenous belief in a Supreme Being is called ____ among the Oromo.",
      answer: "Waqeffanna",
    },
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question:
        "Prophet Mohammed sent his followers to Aksum under the rule of King ____.",
      answer: "Armah",
    },
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question:
        "The Aksumite state declined due to environmental degradation and the destruction of ____.",
      answer: "Adulis",
    },
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question: "The Ethiopian calendar is based on the ____ solar system.",
      answer: "Ethiopic",
    },
    {
      chapterId: "pXMKx3CR6Bdd7paLTMvI",
      question: "The earliest recorded Ethiopian state was ____.",
      answer: "Punt",
    },
  ];

  const addChaptersToFirestore = async () => {
    try {
      const collectionRef = collection(db, "cards");
      for (const chapter of questions) {
        const docRef = doc(collectionRef); // Create a unique document for each chapter
        await setDoc(docRef, chapter); // Add chapter to Firestore
      }
      alert("Chapters added successfully!");
    } catch (error) {
      console.error("Error adding chapters to Firestore: ", error);
      alert("Failed to add chapters. Check the console for details.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Add Chapters to Firestore
      </h1>
      <button
        onClick={addChaptersToFirestore}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg transition duration-300"
      >
        Add Chapters
      </button>
    </div>
  );
};

export default AddChapters;
