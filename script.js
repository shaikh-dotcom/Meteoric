window.onerror = function (msg, url, lineNo, columnNo, error) {
  console.error("Error: " + msg + "\nURL: " + url + "\nLine: " + lineNo);
  return false;
};
window.addEventListener("unhandledrejection", function (event) {
  console.error("Unhandled promise rejection:", event.reason);
});
const semesterConfig = {
  "1-odd": [
    { id: "graphics", text: "Engineering Graphics and Design" },
    { id: "circuit", text: "Electrical Circuit Theory" },
    { id: "circuit-lab", text: "Sessional Based on ETE 1111" },
    { id: "cse", text: "Computer Fundamentals and Programming" },
    { id: "cse-lab", text: "Sessional Based on ETE 1113" },
    { id: "physics", text: "Physics" },
    { id: "Physics-lab", text: "Sessional Based on Phy 1115" },
    { id: "math", text: "Calculus and Differential Equations" },
    { id: "english", text: "Communicative English" },
    { id: "english-lab", text: "English Language Lab" },
  ],
  "1-even": [
    { id: "analog", text: "Analog Electronics-I" },
    { id: "digital", text: "Digital Electronics" },
    { id: "analog-lab", text: "Sessional based on ETE 1211" },
    { id: "digital-lab", text: "Sessional based on ETE 1213" },
    { id: "cse", text: "Object Oriented Programming Lab" },
    { id: "machine", text: "Electrical Machine" },
    { id: "machine-lab", text: "Sessional based on EEE 1253" },
    { id: "math-ii", text: "Linear Algebra and Three Dimensional Geometry " },
    { id: "economics", text: "Financial Accounts and Economic Analysis" },
  ],
};
function loadSemester(semesterKey, clickedElement) {
  const container = document.getElementById("subject-container");
  const title = document.getElementById("semester-title");

  document.querySelectorAll(".round-card > div").forEach((el) => {
    el.classList.remove("active");
  });
  if (clickedElement) {
    clickedElement.classList.add("active");
  }
  const subjects = semesterConfig[semesterKey];

  if (!subjects) {
    container.innerHTML = "<h3>Coming Soon...</h3>";
    return;
  }

  container.innerHTML = "";

  subjects.forEach((sub) => {
    const card = document.createElement("div");
    card.classList.add("cards");
    card.setAttribute("data-subject", sub.id);
    card.innerText = sub.text;
    card.addEventListener("click", openModal);
    container.appendChild(card);
  });
}
const resources = {
  graphics: {
    title: "ENGINEERING GRAPHICS",
    icon: "📐",
    books: [
      {
        type: "PDF",
        name: "Engineering Drawing for beginners",
        url: "https://drive.google.com/file/d/1m_SbYwh8x5fx8OS0BeGJ3vFW0iJvx3Lu/preview",
      },
      {
        type: "PDF",
        name: "Introduction to solidworks",
        url: "https://drive.google.com/file/d/1qFSdyuy6e50rdwLkqitssTjcfXcGu-DQ/preview",
      },
    ],
    notes: [],
    questions: [],
  },
  circuit: {
    title: "ELECTRICAL CIRCUITS",
    icon: "⚡",
    books: [
      {
        type: "PDF",
        name: "Fundamentals of Electric Circuits",
        url: "https://drive.google.com/file/d/16QDgcdYYTCWaeUuauswgyDSgL09uh-sQ/preview",
      },
      {
        type: "PDF",
        name: "Electronic Devices and Circuit Theory- 11th Edition",
        url: "https://drive.google.com/file/d/1jMnTY0zoiv_itIITvu-GA8XfjuedzizK/preview",
      },
      {
        type: "PDF",
        name: "Solutions of Fundamentals of Electric Circuits",
        url: "https://drive.google.com/file/d/1R2zdi2YDYKBoezk6a0IERvhcMgTqTdrY/preview",
      },
      {
        type: "PDF",
        name: "Solutions of Electronic Devices and Circuit Theory",
        url: "https://drive.google.com/file/d/1Y4Rpgyrv3rCRF13YfJwBuGiTjiY0YTmH/preview",
      },
    ],
    notes: [
      {
        type: "pdf",
        name: "Magnetic-Circuits",
        url: "https://drive.google.com/file/d/1FOpBWVkjA6eVbkRo6-3MT-tich5ODHYL/preview",
      },
      {
        type: "pdf",
        name: "Phase-Line Conversion of 3-Phase (Simplified)",
        url: "https://drive.google.com/file/d/1g0dNNyexlZ-G-ts19CTdSSVB7yZ8KNp2/preview",
      },
      {
        type: "pdf",
        name: "Power of AC Single Phase & 3-Phase (Simplified)",
        url: "https://drive.google.com/file/d/1AD9UNMY0T5ARb33MBiLCEb5w6E5ulapD/preview",
      },
      {
        type: "pdf",
        name: "Unbalanced 3-Phase Circuit Solving in Simple Way",
        url: "https://drive.google.com/file/d/1gpD8AWPK9d-ZjQrtkoGVeUQdIAZnXLJ4/preview",
      },
    ],
    questions: [
      {
        type: "pdf",
        name: "ETE_23 1-1 Semester Final Questions",
        url: "https://drive.google.com/file/d/17CABPO1L3W4sul74AF7g3l5f3hKhuII3/preview",
      },
      {
        type: "pdf",
        name: "ETE_22 1-1 Semester Final Questions",
        url: "https://drive.google.com/file/d/1S23_B15yP2gqi94HOn3C9bduhA0uAcyu/preview",
      },
      {
        type: "pdf",
        name: "ETE_21 1-1 Semester Final Questions",
        url: "https://drive.google.com/file/d/1cHjoXM3BaVLxKNBn7zL9IknniiU3GUpz/preview",
      },
      {
        type: "pdf",
        name: "ETE_20 1-1 Semester Final Questions",
        url: "https://drive.google.com/file/d/1pxdzN8CMxDJoO9erlSO22vYuuUZohDlu/preview",
      },
      {
        type: "pdf",
        name: "ETE_19 1-1 Semester Final Questions",
        url: "https://drive.google.com/file/d/1OeLt3hUMub1gFTgsz2BhLAvnz0WHYQ3A/preview",
      },
      {
        type: "pdf",
        name: "ETE_18 1-1 Semester Final Questions",
        url: "https://drive.google.com/file/d/101g0IEZmYDiwD2bfIg8amnvr6NzHsNJT/preview",
      },
      {
        type: "pdf",
        name: "ETE_17 1-1 Semester Final Questions",
        url: "https://drive.google.com/file/d/1CSmIfWAXkdBK3vV8wDy911Xi8u4-UCdR/preview",
      },
    ],
  },
  cse: {
    title: "CSE",
    icon: "🚩",
    books: [
      {
        type: "pdf",
        name: "Programming with C",
        url: "https://drive.google.com/file/d/1hyd3FKiFCfFLUqG7kEwxULrNflpZ6mlY/preview",
      },
    ],
    notes: [],
    questions: [
      {
        type: "pdf",
        name: "ETE_23 1-1 Semester Final Questions",
        url: "https://drive.google.com/file/d/1Gw72CK2UXHDOfdXeIRzkWL9rwQoQYW86/preview",
      },
      {
        type: "pdf",
        name: "ETE_22 1-1 Semester Final Questions",
        url: "https://drive.google.com/file/d/1OOU32dQ8rKi2KnxlrZqMc272tDH-yscD/preview",
      },
      {
        type: "pdf",
        name: "ETE_21 1-1 Semester Final Questions",
        url: "https://drive.google.com/file/d/1aArDDmLEO_GrWLxuPmIHHXGN7iqQqyoM/previewg",
      },
      {
        type: "pdf",
        name: "ETE_20 1-1 Semester Final Questions",
        url: "https://drive.google.com/file/d/1xp4D446hRuS04eMtIksPllk2dKgvjieJ/preview",
      },
      {
        type: "pdf",
        name: "ETE_19 1-1 Semester Final Questions",
        url: "https://drive.google.com/file/d/1QzP2mr1BN1EAP4ilDGSaXp42P-cQdodS/preview",
      },
      {
        type: "pdf",
        name: "ETE_18 1-1 Semester Final Questions",
        url: "https://drive.google.com/file/d/1fJGXg6Lh5tE5MYu9bpWt8MKVmm-GP-NN/preview",
      },
      {
        type: "pdf",
        name: "ETE_17 1-1 Semester Final Questions",
        url: "https://drive.google.com/file/d/1tCIn0rgUBs-NndbghgeobwPPAVxdhjCW/preview",
      },
      {
        type: "pdf",
        name: "ETE_16 1-1 Semester Final Questions",
        url: "https://drive.google.com/file/d/18AhMO9ykdZWaqnYyZbIu7LZ3NciApKxX/preview",
      },
    ],
  },
  physics: {
    title: "Physics",
    icon: "",
    books: [
      {
        type: "pdf",
        name: "Physics for Engineers by Giasuddin part-1",
        url: "https://drive.google.com/file/d/1IM5-7nE4Zn_EakoViDCkTtreDF94xPRa/preview",
      },
      {
        type: "pdf",
        name: "Solid State Physics by Puri & Babbar",
        url: "https://drive.google.com/file/d/1pfWrEiStQq6LM7ZpsrtGyVrm0GaPupTp/preview",
      },
      {
        type: "pdf",
        name: "A Textbook of Optics by Brijlal",
        url: "https://drive.google.com/file/d/1pfWrEiStQq6LM7ZpsrtGyVrm0GaPupTp/preview",
      },
      {
        type: "pdf",
        name: "Physics for Engineers Part-II Chap-27 Interference of Light",
        url: "https://drive.google.com/file/d/1-vgiM8mdjao-NSnF6EgsNfJcnTSVulhS/preview",
      },
      {
        type: "pdf",
        name: "Physics for Engineers Part-II Chap-28 Diffraction",
        url: "https://drive.google.com/file/d/1ja5BHBYbVVaznoh5UXblXY7XA90XLaFD/preview",
      },
      {
        type: "pdf",
        name: "Physics for Engineers Part-II Chap-30 Polarization",
        url: "https://drive.google.com/file/d/15F73FyBRybqG1qXvZoYn_5XJbiJ-FF_-/preview",
      },
      {
        type: "pdf",
        name: "Magnetism (physics for engineers part 2 - Dr. Gias Uddin Ahmed)",
        url: "https://drive.google.com/file/d/1k2x4XDis93525lucQxSu0H5dKfL1rj3O/preview",
      },
      {
        type: "pdf",
        name: "Zilani-Sir-Slide",
        url: "https://drive.google.com/file/d/1OHb72eCgSVopJLTPX4C0wg8RAO0WHCMn/preview",
      },
      {
        type: "pdf",
        name: "Semiconductor Solid State Physics by Puri & Babbar Chap-07  ",
        url: "https://drive.google.com/file/d/1YKGenej0NjoxUPgNiNcxaZ72iHS00_RZ/preview",
      },
      {
        type: "pdf",
        name: "Diffraction and Polarization-zilani-sir-slide",
        url: "https://drive.google.com/file/d/1cx5qk8RT0BqPVV0UVdQBJ5kS0grHKogs/preview",
      },
    ],
    notes: [
      {
        type: "pdf",
        name: "ridoy phy notes-1",
        url: "https://drive.google.com/file/d/1iyOyrZBTyUJjIPQ0wo-fL2aHYYbGLZJw/preview",
      },
      {
        type: "pdf",
        name: "ridoy phy notes-2",
        url: "https://drive.google.com/file/d/1C-5vmYsqNYEdP1xbabAFKASsaSHP8-8L/preview",
      },
      {
        type: "pdf",
        name: "ridoy phy notes-3",
        url: "https://drive.google.com/file/d/1QrpmYamM8ZdpLRqpHDBqQwSObSSotsUO/preview",
      },
      {
        type: "pdf",
        name: "Solid State Physics",
        url: "https://drive.google.com/file/d/1xIDhn-DLAS-p45S3oHS243373IXWSQZ7/preview",
      },
      {
        type: "pdf",
        name: "Sound",
        url: "https://drive.google.com/file/d/1wLvW-5XGwMYi_7sdnULj4TlhRVgJyMw1/preview",
      },
      {
        type: "pdf",
        name: "Diffraction Note",
        url: "https://drive.google.com/file/d/1rWrtHWZMlxAn1U4u5nxoe-3EPTNwbMkw/preview",
      },
      {
        type: "pdf",
        name: "Atomic Structure - Note",
        url: "https://drive.google.com/file/d/1DvUuwFql9tKxt8dqW10NMlEjvUMBUOI8/preview",
      },
      {
        type: "pdf",
        name: "Interference Note",
        url: "https://drive.google.com/file/d/1_LLjlQEw57YUB7eqb34RhnjD1u_OYRMH/preview",
      },
      {
        type: "pdf",
        name: "Electronic Structure of Matter",
        url: "https://drive.google.com/file/d/1fuMwhmHNSNOMcE3XJfsFhGNa4RqOqF5D/preview",
      },
      {
        type: "pdf",
        name: "Photo-electricity",
        url: "https://drive.google.com/file/d/1HgHVJUgS0BRcQd4NLVYJZ11QzOURKlhu/preview",
      },
      {
        type: "pdf",
        name: "photoelectricity-2",
        url: "https://drive.google.com/file/d/1GKbrx4IXTxaTSIOLUs0enBT1bbXxWkR5/preview",
      },
      {
        type: "pdf",
        name: "Free electron Theory",
        url: "https://drive.google.com/file/d/1HfajLyAJtBenQgXYLUxBeR2vNqbNQvdk/preview",
      },
      {
        type: "pdf",
        name: "Wave motion",
        url: "https://drive.google.com/file/d/1Fa0s1KiUqa2kKEl_VDoe-kBdcDGjRTBj/preview",
      },
      {
        type: "pdf",
        name: "Thermo-electricity",
        url: "https://drive.google.com/file/d/1EtCXNs0_LAXFDRDT3q0zUfePogORFZBp/preview",
      },
      {
        type: "pdf",
        name: "Polarization",
        url: "https://drive.google.com/file/d/1Ef3WLa7hOb0vnk_4TAVjrlRlf7xr8t5g/preview",
      },
      {
        type: "pdf",
        name: "Polarization-choti",
        url: "https://drive.google.com/file/d/1BDT0ZjXEvFI8LKz3JaEdgxkrbiMaEGzA/preview",
      },
      {
        type: "pdf",
        name: "phy march class lecture- nazia",
        url: "https://drive.google.com/file/d/16rUoW9YzssE-223wDqIGPLkulv3C-BDJ/preview",
      },
      {
        type: "pdf",
        name: "Semiconductor-2",
        url: "https://drive.google.com/file/d/14gB_MoNiS_Bjck5r3myHKh-O_bQs7ucz/preview",
      },
      {
        type: "pdf",
        name: "Diffraction",
        url: "https://drive.google.com/file/d/11Ky9i0_OCBMxcQdWh1GHFi4LH1nQ5ofX/preview",
      },
      {
        type: "pdf",
        name: "Atomic structure-2",
        url: "https://drive.google.com/file/d/1qsuH6qrPZ3_4cckH-iZMd4vBQ0Zyy5gy/preview",
      },
      {
        type: "pdf",
        name: "Magnetism",
        url: "https://drive.google.com/file/d/1pkaQqnLmpLl57wrpExUt_F5tpX930GK_/preview",
      },
      {
        type: "pdf",
        name: "photoelectricity-note-2",
        url: "https://drive.google.com/file/d/1onYDxDWV7ugzSF1FoxuQYyv0kipQE--q/preview",
      },
      {
        type: "pdf",
        name: "SHM",
        url: "https://drive.google.com/file/d/1jrxtveQb7FmzI_uCv-3s-iRXP1xNM7z9/preview",
      },
      {
        type: "pdf",
        name: "Beats and Doppler effect",
        url: "https://drive.google.com/file/d/1__fitaBK_tDqf82hUG_IOKeMmNQM7ER3/preview",
      },
      {
        type: "pdf",
        name: "Semiconductor",
        url: "https://drive.google.com/file/d/1XVdRZwx98FJjzYB8-DPk7X74L-Y4rM1v/preview",
      },
    ],
    questions: [
      {
        type: "pdf",
        name: "ETE_23 1-1 Semester Final Questions-physics",
        url: "https://drive.google.com/file/d/1CIxQrxZ4OWl8UIFdRry5Hq3GU4qGBrVu/preview",
      },
      {
        type: "pdf",
        name: "ETE_22 1-1 Semester Final Questions-physics",
        url: "https://drive.google.com/file/d/1Z3IJP2okXB6B3HMQtTbGv7YLGUG4uaZX/preview",
      },
      {
        type: "pdf",
        name: "ETE_21 1-1 Semester Final Questions-physics",
        url: "https://drive.google.com/file/d/1KMrBGVXW8Tjzn5yS-WZDhkPjsFu5D7xw/preview",
      },
      {
        type: "pdf",
        name: "ETE_20 1-1 Semester Final Questions-physics",
        url: "https://drive.google.com/file/d/1T0oBVENSqfyaJlpMNgk0onrUX2osSQdG/preview",
      },
      {
        type: "pdf",
        name: "ETE_19 1-1 Semester Final Questions-physics",
        url: "https://drive.google.com/file/d/1qn_ut73bd4WAsC4mU7O4R62FoD8fi-1y/preview",
      },
      {
        type: "pdf",
        name: "ETE_18 1-1 Semester Final Questions-physics",
        url: "https://drive.google.com/file/d/1_OhQs_BMb85qczMv9jXFCcJj25xPGGor/preview",
      },
      {
        type: "pdf",
        name: "ETE_17 1-1 Semester Final Questions-physics",
        url: "https://drive.google.com/file/d/1E_brz2SVjED8dBZjWko_WfoS7wlAlwjV/preview",
      },
      {
        type: "pdf",
        name: "ETE_16 1-1 Semester Final Questions-physics",
        url: "https://drive.google.com/file/d/10PllO3JcwwKLEr02nhkk0Oqc_b7-uf3Z/preview",
      },
    ],
  },

  english: {
    title: "English",
    icon: "",
    notes: [
      {
        type: "pdf",
        name: "Quotations and Tenders",
        url: "https://drive.google.com/file/d/1hFBzWiaQAjUExSuu1hmom8FUxLjyY9S_/preview",
      },
      {
        type: "pdf",
        name: "Sample Business Letter",
        url: "https://drive.google.com/file/d/1wQIoDMxv68ahFsgmLmduWlTksaJphex5/preview",
      },
      {
        type: "pdf",
        name: "Memo Sample",
        url: "https://drive.google.com/file/d/1w2xDCzLFH-I7I33omDbBXUcKfm-LwWAy/preview",
      },
      {
        type: "pdf",
        name: "Business Proposal Letter Format",
        url: "https://drive.google.com/file/d/1s9_HQnWuCAtQ_4g9PeuR2pSa1mZhdB8_/preview",
      },
      {
        type: "pdf",
        name: "Notice Inviting Tender",
        url: "https://drive.google.com/file/d/1pD7r1CqkOPP58fAeyp4pm1L-U3mWEeZY/preview",
      },
      {
        type: "pdf",
        name: "Business Introduction Letter Format",
        url: "https://drive.google.com/file/d/1odFTcx-b3IdQe7j4nERHa-UscBoeM5dB/preview",
      },
      {
        type: "pdf",
        name: "Inviting Quotation",
        url: "https://drive.google.com/file/d/1Tu5WHolstp57-WMOtOraPtufHZm1sel3/preview",
      },
      {
        type: "pdf",
        name: "Resignation Letter Format",
        url: "https://drive.google.com/file/d/1QLv6PS1BO8UV7U3rIMNBnwuqHADpAL55/preview",
      },
      {
        type: "pdf",
        name: "Recommendation Letter Format",
        url: "https://drive.google.com/file/d/1PaXY24vJbuYYU9FnxrXacbsSDc68Tplv/preview",
      },
      {
        type: "pdf",
        name: "Memo Format",
        url: "https://drive.google.com/file/d/1PX7K_llDLVlTrZcqLAiW_gCzQkpqdWnE/preview",
      },
      {
        type: "pdf",
        name: "Types of Business Letter",
        url: "https://drive.google.com/file/d/1NTs0t74ljp6qhSCTQ1KErkhyTUFLRob4/preview",
      },
      {
        type: "pdf",
        name: "Elements of a Business Letter",
        url: "https://drive.google.com/file/d/1L6ONd0T-5vhIcGfpnogpWSp307kKDvSv/preview",
      },
      {
        type: "pdf",
        name: "Complaint Letter Format",
        url: "https://drive.google.com/file/d/1JxXsE90n_oKd8Vg_cr7coKTIe0ZKU71x/preview",
      },
      {
        type: "pdf",
        name: "Cover Letter Sample",
        url: "https://drive.google.com/file/d/1DyP8Oa9lhqkD3uSaoMFN9DXNfbKtkCI0/preview",
      },
      {
        type: "pdf",
        name: "Sales Letter Format",
        url: "https://drive.google.com/file/d/1Dm6jl0ZZZ6pSyV7MaEWgooifi49Btda0/preview",
      },
      {
        type: "pdf",
        name: "Cover Letter Format",
        url: "https://drive.google.com/file/d/1A71qNaFwblptnkQ9_bOCUQVkNzd1winq/preview",
      },
      {
        type: "pdf",
        name: "Notice Inviting Tender",
        url: "https://drive.google.com/file/d/13WrnhjEXoPE7GImF9s4mB1gyblw-xOQh/preview",
      },
      {
        type: "pdf",
        name: "Tutorial essays for science subjects",
        url: "https://drive.google.com/file/d/1Fe0s8HF--fVrffsORdJFKb2eeSpjaBed/preview",
      },
      {
        type: "pdf",
        name: "How-to-write-a-Science-Esssay",
        url: "https://drive.google.com/file/d/1SsdVfaD3Fb_jv_DTC1EI4QEu_yQqoOi0/preview",
      },
      {
        type: "pdf",
        name: "Meeting notice and Agenda Format",
        url: "https://drive.google.com/file/d/1DmcM7cnpRKEl2ezvb4lZzL-P6kAXiX50/preview",
      },
    ],
    questions: [
      {
        type: "pdf",
        name: "ETE_23 1-1 Semester Final Questions",
        url: "https://drive.google.com/file/d/1YIIMQZHAU8ByFg7VW2Wb1wbLZMFwPW1r/preview",
      },
      {
        type: "pdf",
        name: "ETE_22 1-1 Semester Final Questions",
        url: "https://drive.google.com/file/d/1sELK_xf2Ea3PLL6NXWTkQJ0p2sOIeSh3/preview",
      },
      {
        type: "pdf",
        name: "ETE_21 1-1 Semester Final Questions",
        url: "https://drive.google.com/file/d/1L49gCSYS-UPVLQM9NTvrp2A6mmGaAvHY/preview",
      },
      {
        type: "pdf",
        name: "ETE_20 1-1 Semester Final Questions",
        url: "https://drive.google.com/file/d/1PV4QCTih0ESxMMeF6iTvDJ9Rcdlqj6pR/preview",
      },
      {
        type: "pdf",
        name: "ETE_19 1-1 Semester Final Questions",
        url: "https://drive.google.com/file/d/1Y7P7bVH4jcd1XwOwehsXPLNA8UPPdYwF/preview",
      },
      {
        type: "pdf",
        name: "ETE_18 1-1 Semester Final Questions",
        url: "https://drive.google.com/file/d/1hQ5cmrRS5Ve-yEVyh9VI5z_fPmvsKpKk/preview",
      },
      {
        type: "pdf",
        name: "ETE_17 1-1 Semester Final Questions",
        url: "https://drive.google.com/file/d/16eRimVz7iVMO6sHWPQmb8y3w7L085Jjo/preview",
      },
    ],
  },
  "circuit-lab": {
    title: "Circuit-Lab",
    icon: "",
    books: [
      {
        type: "pdf",
        name: "ETE 1112 Lab Manual",
        url: "https://drive.google.com/file/d/1NFLV3FJxbZXaa2dRL9zQicyMcjS8W8EH/preview",
      },
    ],
  },
  "cse-lab": {
    title: "CSE-Lab",
    icon: "",
    books: [
      {
        type: "pdf",
        name: "Basic to Expert on C programming",
        url: "https://drive.google.com/file/d/1ZPlp97c0EKUIo3zL4mCvOB-IuybCLmZV/preview",
      },
    ],
  },
  "Physics-lab": {
    title: "Physics-Lab",
    icon: "",
    books: [
      {
        type: "pdf",
        name: "Physics Lab Manual",
        url: "https://drive.google.com/file/d/1n0fWXNdt-s7GlZezPE2lVrX9FrQPot_c/preview",
      },
    ],
  },
  math: {
    title: "Math",
    icon: "",
    books: [
      {
        type: "pdf",
        name: "introduction-to-ordinary-differential-equations-4th",
        url: "https://drive.google.com/file/d/18oum6y3zOA5F9dy5ODW8ggXFEu3Xkw3I/preview",
      },
      {
        type: "pdf",
        name: "Differential equations 3rd edition Shepley L.Ross",
        url: "https://drive.google.com/file/d/1KqfVQVbRo4RcwxKvEM2g3uEhhHSAGPz3/preview",
      },
      {
        type: "pdf",
        name: "integral calculas by Das and Mukherjee",
        url: "https://drive.google.com/file/d/19cLuwFx375Do3Ru5CX0KMa7vJFUwhaME/preview",
      },
    ],
    notes: [
      {
        type: "pdf",
        name: "Lecture-1-4(Helal Sir)",
        url: "https://drive.google.com/file/d/1HR_XNKMnsbAvgfHvNrTdoFhBgtHB_mYs/preview",
      },
      {
        type: "pdf",
        name: "Lecture-5-12(Helal Sir)",
        url: "https://drive.google.com/file/d/1uRbA4ixo03SoApf1dQ5E0bjDm1YqEiv6/preview",
      },
      {
        type: "pdf",
        name: "Lecture-13-18-Higher-order-DE(Helal Sir)",
        url: "https://drive.google.com/file/d/19qM1bxt33KgTVp3ECXRSezS6VlHPo3es/preview",
      },
      {
        type: "pdf",
        name: "Integral calculus(Jahangir Sir)",
        url: "https://drive.google.com/file/d/1JXCQBpw7UsUzRf084h63oEJ36NBPZLsx/preview",
      },
    ],
    questions: [
      {
        type: "pdf",
        name: "ETE_23 1-1 Semester Final Questions-Math.pdf.pdf",
        url: "https://drive.google.com/file/d/1LNeXi1SmA_LlFyNaMOacy-VDIY5zpdJ-/preview",
      },
      {
        type: "pdf",
        name: "ETE_22 1-1 Semester Final Questions-Math.pdf.pdf",
        url: "https://drive.google.com/file/d/1bHWyb8LpePCs3gVlQNT7eXQjEZjJ2nz4/preview",
      },
      {
        type: "pdf",
        name: "ETE_20 1-1 Semester Final Questions-Math.pdf.pdf",
        url: "https://drive.google.com/file/d/1jJ9Otn9lf_kAOsbH7z5yghG5fZCi4Guc/preview",
      },
      {
        type: "pdf",
        name: "ETE_19 1-1 Semester Final Questions-Math.pdf.pdf",
        url: "https://drive.google.com/file/d/11jk0sdyxl9wQDQGC7xUys7j1smF5nekm/preview",
      },
      {
        type: "pdf",
        name: "ETE_18 1-1 Semester Final Questions-Math.pdf.pdf",
        url: "https://drive.google.com/file/d/1vhQwJhjbl-Qbwbccryazuasg5spMXWjl/preview",
      },
      {
        type: "pdf",
        name: "ETE_17 1-1 Semester Final Questions-Math.pdf.pdf",
        url: "https://drive.google.com/file/d/1Md54O0-i7Ejn_AFIgY1m6uh6Hh0g2b78/preview",
      },
      {
        type: "pdf",
        name: "ETE_16 1-1 Semester Final Questions-Math.pdf.pdf",
        url: "https://drive.google.com/file/d/1wBaWTI2zVapkGraoqsAnTLQszHzPEnlX/preview",
      },
    ],
  },
};
let videoPlaying = true; // Track video state

function toggleVideo() {
  const video = document.getElementById('video-desktop');
  const button = document.querySelector('.button');
  
  if (videoPlaying) {
    // Turn OFF video
    video.pause();
    video.style.opacity = '0';
    button.textContent = 'CONNECT';
    button.style.backgroundColor = '#00f0ff';
    button.style.color = '#000';
    videoPlaying = false;
  } else {
    // Turn ON video
    video.play();
    video.style.opacity = '1';
    button.textContent = 'DISCONNECT';
    button.style.backgroundColor = '#ffae00';
    button.style.color = '#000';
    videoPlaying = true;
  }
}
function generateListHTML(items) {
  if (!items || items.length === 0)
    return '<div class="file-item" style="justify-content:center; opacity:0.5;">No files available</div>';

  return items
    .map(
      (item) => `
        <div class="file-item">
            <div class="file-info">
                <span class="file-icon">${item.type}</span>
                <span>${item.name}</span>
            </div>
            ${
              item.url
                ? `<button onclick="openPdfViewer('${item.url}', '${item.name}')" class="download-chip">VIEW 👁</button>`
                : '<span class="download-chip-placeholder" style="font-size:10px; color:#555;">N/A</span>'
            }
        </div>
    `
    )
    .join("");
}
function getDirectDownloadLink(previewUrl) {
  if (previewUrl.includes("drive.google.com")) {
    const parts = previewUrl.split("/d/");
    if (parts.length > 1) {
      const idPart = parts[1].split("/")[0];
      return `https://drive.google.com/uc?export=download&id=${idPart}`;
    }
  }
  return previewUrl;
}
function openPdfViewer(url, title) {
  const pdfModal = document.getElementById("pdf");
  const iframe = document.getElementById("pdf-iframe");
  const titleEl = document.getElementById("pdf-preview-title");
  const downloadBtn = document.getElementById("pdf-download-btn");
  const expandBtn = document.getElementById("expand-link");
  titleEl.innerText = title;
  iframe.src = url;
  const directLink = getDirectDownloadLink(url);
  downloadBtn.href = directLink;
  const drivePageLink = url.replace("/preview", "/view");
  expandBtn.href = drivePageLink;
  pdfModal.style.display = "flex";
}
function closePdfModal() {
  const pdfWrapper = document.getElementById("pdf");
  const iframe = document.getElementById("pdf-iframe");
  pdfWrapper.style.display = "none";
  iframe.src = "";
}
function openModal(event) {
  const modal = document.getElementById("pop-up-materials");
  const subjectKey = event.currentTarget.getAttribute("data-subject");
  const data = resources[subjectKey] || resources["default"];
  document.querySelector(
    ".pop-up-tittle"
  ).innerHTML = `<span style="color:#00F0FF; margin-right:10px;">${data.icon}</span> ${data.title}`;
  document.getElementById("books").innerHTML = generateListHTML(data.books);
  document.getElementById("notes").innerHTML = generateListHTML(data.notes);
  document.getElementById("questions").innerHTML = generateListHTML(
    data.questions
  );
  modal.style.display = "flex";
  const firstTab = document.querySelector(".tab-btn");
  if (firstTab) firstTab.click();
}
function closeModal() {
  document.getElementById("pop-up-materials").style.display = "none";
}
function switchTab(tabName, clickedButton) {
  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.remove("active-content");
  });
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  const activeTab = document.getElementById(tabName);
  if (activeTab) activeTab.classList.add("active-content");
  if (clickedButton) clickedButton.classList.add("active");
}
document.addEventListener("DOMContentLoaded", function () {
  // Close modals when clicking outside
  window.onclick = function (event) {
    const subjectModal = document.getElementById("pop-up-materials");
    const pdfWrapper = document.getElementById("pdf");
    if (event.target == subjectModal) {
      closeModal();
    }
    if (event.target == pdfWrapper) {
      closePdfModal();
    }
  };
});
document.addEventListener("DOMContentLoaded", function () {
  window.onclick = function (event) {
    const subjectModal = document.getElementById("pop-up-materials");
    const pdfWrapper = document.getElementById("pdf");
    if (event.target == subjectModal) closeModal();
    if (event.target == pdfWrapper) closePdfModal();
  };
});
function toggleMenu() {
  const container = document.querySelector(".radial-menu-container");
  const trigger = document.querySelector(".radial-trigger");
  container.classList.toggle("open");
  trigger.classList.toggle("active");
  const text = document.querySelector(".trigger-text");
  if (container.classList.contains("open")) {
    text.innerText = "CLOSE";
  } else {
    const selected = document.querySelector(".radial-item.selected");
    text.innerText = selected ? selected.innerText : "SEMESTERS";
  }
}
function selectSemesterMobile(semesterKey, clickedElement) {
  loadSemester(semesterKey);
  document
    .querySelectorAll(".radial-item")
    .forEach((el) => el.classList.remove("selected"));
  clickedElement.classList.add("selected");
  document.querySelector(".trigger-text").innerText = clickedElement.innerText;
}
