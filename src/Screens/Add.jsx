import React from "react";
import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "../fb";

const AddChapters = () => {
  const cards = [
    {
      question:
        "What were the major political changes in Ethiopia during the 19th century?",
      answer:
        "The 19th century saw the consolidation of the Ethiopian Empire under Emperors such as Tewodros II, Yohannes IV, and Menelik II. This period also saw regional rivalries and the expansion of the empire's borders.",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },
    {
      question:
        "How did the socio-economic conditions in Ethiopia change in the early 19th century?",
      answer:
        "The early 19th century saw a shift from feudal agriculture towards the growth of trade networks, the introduction of new agricultural practices, and a growing reliance on military force for resource control.",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },
    {
      question:
        "What were the modernization attempts in Ethiopia during the 19th century?",
      answer:
        "Emperor Tewodros II initiated significant modernization attempts, including military reforms, industrialization, and the establishment of new administrative systems, although these efforts were met with resistance and external challenges.",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },
    {
      question:
        "What impact did external relations have on Ethiopia's political landscape during the 19th century?",
      answer:
        "Ethiopia's external relations, especially with European powers like Britain and Italy, influenced its internal politics. The interactions ranged from military assistance to the formation of strategic alliances in defense of sovereignty against colonial encroachment.",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },
    {
      question:
        "What were the social consequences of the territorial expansion of Ethiopia in the late 19th century?",
      answer:
        "The territorial expansion led to cultural integration and tension, the displacement of some ethnic groups, and changes in trade routes. It also strengthened the central authority of the Ethiopian state.",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },
    {
      question:
        "How did the rise of Menelik II contribute to the formation of modern Ethiopia?",
      answer:
        "Menelik II's reign marked the establishment of modern Ethiopia through territorial expansion, military victories (especially at the Battle of Adwa), and the strengthening of Ethiopia's political structure against foreign threats.",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },
    {
      question:
        "What were the economic developments in Ethiopia during the late 19th and early 20th centuries?",
      answer:
        "Ethiopia's economy saw the growth of cash crops, including coffee and cotton, improvements in infrastructure such as roads and railways, and an increasing focus on resource exploitation to support the growing state.",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },
    {
      question:
        "How did Ethiopia resist foreign colonialism in the 19th century?",
      answer:
        "Ethiopia successfully resisted foreign colonialism, most notably during the Battle of Adwa in 1896, where Ethiopian forces decisively defeated the Italian invaders, maintaining Ethiopian sovereignty.",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },
    {
      question:
        "What role did the Ethiopian Orthodox Church play in the internal developments of Ethiopia?",
      answer:
        "The Ethiopian Orthodox Church remained a central institution in shaping Ethiopia's identity, political legitimacy, and cultural cohesion throughout the 19th century, supporting the monarchy and social structure.",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },
    {
      question:
        "What were the key challenges faced by Ethiopia in the late 19th century?",
      answer:
        "Ethiopia faced challenges from internal power struggles, regional conflicts, and external threats from European colonial powers, particularly Italy's attempts to colonize the region.",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },
    {
      question:
        "What was the role of Ethiopia in the broader Horn of Africa during the 19th century?",
      answer:
        "Ethiopia played a significant role in the political dynamics of the Horn of Africa, acting as a counterbalance to both the expanding Ottoman Empire and the growing European influence in the region.",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },
    {
      question:
        "How did the establishment of Addis Ababa impact Ethiopia's development?",
      answer:
        "The establishment of Addis Ababa as the capital city under Menelik II facilitated Ethiopia's modernization, becoming the political, administrative, and cultural hub of the country.",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },
    {
      question:
        "What was the effect of foreign missionaries in Ethiopia during the 19th century?",
      answer:
        "Foreign missionaries played a dual role in Ethiopia, introducing education and modern medical practices while also becoming part of the larger European political and cultural influence over the region.",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },
    {
      question:
        "How did the relationship between Ethiopia and Egypt evolve in the 19th century?",
      answer:
        "The relationship between Ethiopia and Egypt was marked by competition over control of the Nile River and territorial disputes, especially during the reign of Emperor Tewodros II.",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },
    {
      question:
        "What was the significance of the Treaty of Wuchale for Ethiopia?",
      answer:
        "The Treaty of Wuchale, signed in 1889 between Ethiopia and Italy, was significant because it led to Italy's attempt to impose its protectorate over Ethiopia, a move that was later rejected by Ethiopia after the Adwa victory.",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },
    {
      question:
        "How did Ethiopia's resistance to Italian colonialism affect its political stability?",
      answer:
        "Ethiopia's successful resistance to Italian colonialism in the late 19th century helped maintain political stability, solidified national unity, and strengthened Ethiopia’s international recognition as an independent state.",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },
    {
      question:
        "What were the economic impacts of modernization efforts in Ethiopia during the early 20th century?",
      answer:
        "The modernization efforts in Ethiopia during the early 20th century brought about infrastructural development, including railroads and roads, but also created economic disparities between the urban elite and rural populations.",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },
    {
      question:
        "How did the creation of modern Ethiopia differ from previous political formations?",
      answer:
        "The creation of modern Ethiopia in the late 19th century was marked by the consolidation of various regional entities under a centralized government, unlike previous decentralized political formations in the Horn of Africa.",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },
    {
      question:
        "What were the consequences of the expansion of the Ethiopian Empire in the late 19th century?",
      answer:
        "The expansion of the Ethiopian Empire led to the incorporation of diverse ethnic groups, which created both opportunities for integration and tensions related to cultural assimilation and resource distribution.",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },
    {
      question:
        "What were the primary motivations behind Ethiopia's territorial expansion in the late 19th century?",
      answer:
        "Ethiopia's territorial expansion was motivated by the need to control trade routes, secure valuable resources, and strengthen its position against foreign colonial powers encroaching on the region.",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },
    {
      question:
        "How did the military reforms under Emperor Tewodros II shape Ethiopia's defense capabilities?",
      answer:
        "Emperor Tewodros II's military reforms, including modernizing the army and introducing new weapons and training, significantly enhanced Ethiopia's defense capabilities against external threats.",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },
    {
      question:
        "What were the challenges Ethiopia faced in maintaining its sovereignty in the face of foreign intervention?",
      answer:
        "Ethiopia faced challenges from foreign powers, particularly Italy, who sought to colonize the region. However, Ethiopia successfully repelled foreign intervention, most notably during the Battle of Adwa in 1896.",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },
    {
      question:
        "What role did the economy play in Ethiopia's resistance to colonialism?",
      answer:
        "Ethiopia's economy, which was largely agrarian, played a crucial role in sustaining its resistance to colonialism, as it enabled the country to support its military efforts against foreign invaders.",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },

    {
      question:
        "List the main political developments in Ethiopia during the 19th century.",
      answer:
        "1. Restoration of the Solomonic Dynasty under Yekuno Amlak in 1270.\n2. Rise of the central authority under Tewodros II.\n3. Military reforms and modernization under Tewodros II.\n4. Expansion of the Ethiopian Empire during Menelik II.\n5. Territorial conflicts with neighboring states and regional powers.\n6. The establishment of Addis Ababa as the capital city under Menelik II.",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },
    {
      question:
        "List the significant territorial expansions of Ethiopia under Menelik II.",
      answer:
        "1. Expansion into the southern and southwestern territories (e.g., the Sidama, Wolayta, and Gurage regions).\n2. Conquest of the Oromo and Somali regions.\n3. The Battle of Adwa in 1896, which led to the defeat of the Italian forces and the preservation of Ethiopian sovereignty.\n4. Expansion of Ethiopia's borders through treaties, such as the Treaty of Wuchale (1889).",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },
    {
      question:
        "List the economic developments that took place in Ethiopia during the late 19th century.",
      answer:
        "1. Introduction of cash crops such as coffee and cotton.\n2. Development of infrastructure, including roads and railways to connect major regions and ports.\n3. Establishment of modern industries, particularly in weaving, manufacturing, and mining.\n4. Increased trade with European powers and the Middle East, especially in ivory, gold, and slaves.\n5. Growth of a central taxation system to support state finances.",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },
    {
      question:
        "List the key foreign powers involved in Ethiopia’s affairs during the 19th century.",
      answer:
        "1. Italy - Attempted to establish a protectorate over Ethiopia through the Treaty of Wuchale and later invaded in 1895-1896.\n2. Britain - Played a significant role in the support of the Ethiopian Empire against Italian forces, providing military aid in the Battle of Adwa.\n3. France - Engaged in diplomatic relations with Ethiopia, particularly around the Red Sea.\n4. Ottoman Empire - Had influence over the Muslim sultanates in the region, which often clashed with Ethiopia’s Christian kingdom.",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },
    {
      question:
        "List the challenges faced by Ethiopia in the 19th century as it modernized.",
      answer:
        "1. Resistance from conservative forces against modernization and reform policies.\n2. Conflicts with foreign colonial powers seeking to control Ethiopian territory.\n3. Internal political struggles and regional rebellions.\n4. Limited infrastructure and industrialization in comparison to European colonial powers.\n5. Inability to fully integrate new territories into the Ethiopian administrative structure.",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },
    {
      question: "List the key achievements of Emperor Tewodros II.",
      answer:
        "1. Strengthening of the central government and consolidation of power.\n2. Reorganization of the military, with modern weapons and training.\n3. Establishment of new administrative structures.\n4. Efforts to modernize Ethiopia through the construction of factories and the establishment of a modern army.\n5. Attempted to open diplomatic relations with European powers, despite eventual conflicts with Britain.",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },
    {
      question:
        "List the main causes and consequences of the Battle of Adwa (1896).",
      answer:
        "Causes:\n1. Italy’s attempt to assert control over Ethiopia through the Treaty of Wuchale and subsequent military invasion.\n2. Ethiopia's resistance to Italian imperialism and desire to maintain sovereignty.\nConsequences:\n1. The decisive Ethiopian victory led to the preservation of Ethiopian independence.\n2. Enhanced Ethiopia’s international recognition.\n3. The defeat of Italy weakened its colonial ambitions in the region.\n4. Strengthened Menelik II’s rule and his ability to modernize Ethiopia.",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },
    {
      question:
        "List the major economic activities in Ethiopia before Menelik II's reign.",
      answer:
        "1. Subsistence agriculture with the cultivation of grains like teff, barley, and wheat.\n2. Pastoralism, particularly among the Oromo and Somali peoples.\n3. Local trade, including bartering between different regions.\n4. Limited export trade, mostly in ivory, gold, and slaves.\n5. Craft production, including weaving and metalworking.",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },
    {
      question:
        "List the methods Menelik II used to expand Ethiopia’s territory.",
      answer:
        "1. Military conquest of surrounding regions, including the defeat of the Sultanate of Adal and other smaller kingdoms.\n2. Strategic alliances with local leaders and regional powers.\n3. Diplomatic negotiations with European powers to secure treaties that expanded Ethiopian borders.\n4. Involvement in international diplomacy to maintain Ethiopia’s sovereignty during European imperialism.",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },
    {
      question:
        "List the effects of European colonialism on Ethiopia during the 19th century.",
      answer:
        "1. The threat of colonization by Italy, culminating in the attempted invasion in the 1890s.\n2. Diplomatic pressure from European powers, leading to treaties such as the Treaty of Wuchale.\n3. The introduction of Western ideas, technologies, and administrative practices.\n4. Competition for control of the Horn of Africa between European powers.\n5. The establishment of European influence over neighboring states, even as Ethiopia retained its independence.",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },
    {
      question:
        "List the major agricultural products during the late 19th and early 20th centuries in Ethiopia.",
      answer:
        "1. Coffee - Became Ethiopia's major export and key to the economy.\n2. Teff - The staple grain used in traditional Ethiopian bread, injera.\n3. Wheat and barley - Grown for both local consumption and trade.\n4. Cotton - Beginning to be cultivated for local industries.\n5. Livestock - Pastoralism was a major economic activity, particularly in the lowlands.",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },
    {
      question:
        "List the significant social changes in Ethiopia during the reign of Menelik II.",
      answer:
        "1. The integration of diverse ethnic groups into the Ethiopian Empire, including the Sidama, Oromo, and Somali peoples.\n2. Increased urbanization and the development of modern cities like Addis Ababa.\n3. Educational reforms, including the establishment of schools to train a new generation of Ethiopians.\n4. A growing middle class and political elite as a result of modernization efforts.\n5. The expansion of the Ethiopian Orthodox Church's influence.",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },
    {
      question:
        "List the factors that contributed to the success of Ethiopia in resisting colonization.",
      answer:
        "1. Strong, unified leadership under Menelik II.\n2. Well-organized and motivated military forces, particularly during the Battle of Adwa.\n3. Strategic alliances with foreign powers such as Russia and France.\n4. Support from local populations who resisted foreign invasion.\n5. The rugged Ethiopian landscape that made it difficult for invaders to maintain control.",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },
    {
      question:
        "List the contributions of Menelik II to Ethiopia's modern military.",
      answer:
        "1. Modernization of the Ethiopian army with new weapons and training.\n2. The establishment of a standing army to defend Ethiopian sovereignty.\n3. Expansion of military recruitment and organization, including conscription of soldiers from various regions.\n4. Strategic military alliances with European powers to secure modern weapons.\n5. Training of a professional officer corps.",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },
    {
      question:
        "List the social and political impacts of the Battle of Adwa on Ethiopia.",
      answer:
        "1. Strengthened national unity and pride in Ethiopia's independence.\n2. Increased political stability under Menelik II.\n3. Secured international recognition of Ethiopia as a sovereign state.\n4. Reduced foreign interference and ensured the continued autonomy of the Ethiopian monarchy.\n5. Inspired anti-colonial movements in Africa and beyond.",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },
    {
      question:
        "What were the political and cultural consequences of the Treaty of Wuchale (1889)?",
      answer:
        "1. The treaty was a source of tension, as the Italian version implied a protectorate over Ethiopia, which Menelik II rejected.\n2. The treaty led to military conflict with Italy, culminating in the Battle of Adwa.\n3. It solidified Menelik II's leadership by resisting foreign dominance.\n4. The treaty had long-lasting effects on Ethiopia's diplomatic and military strategy.",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },
    {
      question:
        "How did Menelik II manage Ethiopia's external relations with European powers?",
      answer:
        "Menelik II skillfully played European powers against each other, securing military and diplomatic support from Russia, France, and Britain to maintain Ethiopia’s independence during the Scramble for Africa.",
      chapterId: "vXB9J8cnvI896WqNe9C3",
    },
  ];

  const addChaptersToFirestore = async () => {
    try {
      const collectionRef = collection(db, "cards");
      for (const chapter of cards) {
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
