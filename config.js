/* =========================================================================
   THE MARCUS LEWIS RACQUET CLUB — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "The Marcus Lewis Racquet Club",
    shortName: "MLR",
    tagline: "Tennis & Pickleball for Everyone",
  },

  contact: {
    venueName: "The Marcus Lewis Racquet Club",
    address: "102 Nonset Path, Acton, MA 01720",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Marcus+Lewis+Racquet+Club+Acton+MA",
    phone: "978-264-8349",
    phoneHref: "tel:+19782648349",
    email: "marcus@marcuslewisenterprises.com",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.marcus-lewis-racquet-club.example/schedule",
      title: "Book a Court",
      subtitle: "Tennis or pickleball, indoor courts, live availability.",
      services: [{"name": "Tennis court", "meta": "60 min \u00b7 singles or doubles"}, {"name": "Pickleball court", "meta": "60 min \u00b7 up to 4"}, {"name": "Private lesson", "meta": "60 min \u00b7 with a pro"}],
      fallbackEmail: {
        to: "marcus@marcuslewisenterprises.com",
        subject: "Book a Court",
        body: "Hi The Marcus Lewis Racquet Club,\n\nI'd like to book. Here are my details:\n\n- Name:\n- Adult or junior:\n- Level:\n- Preferred days & times:\n\nThank you!",
      },
    },

    junior: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.marcus-lewis-racquet-club.example/schedule",
      title: "Junior Programs",
      subtitle: "Tennis or pickleball, indoor courts, live availability.",
      services: [{"name": "Tennis court", "meta": "60 min \u00b7 singles or doubles"}, {"name": "Pickleball court", "meta": "60 min \u00b7 up to 4"}, {"name": "Private lesson", "meta": "60 min \u00b7 with a pro"}],
      fallbackEmail: {
        to: "marcus@marcuslewisenterprises.com",
        subject: "Junior Programs",
        body: "Hi,\n\nI'd like to register for Junior Programs.\n\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.marcus-lewis-racquet-club.example/schedule",
      title: "Summer Camp",
      subtitle: "Tennis or pickleball, indoor courts, live availability.",
      services: [{"name": "Tennis court", "meta": "60 min \u00b7 singles or doubles"}, {"name": "Pickleball court", "meta": "60 min \u00b7 up to 4"}, {"name": "Private lesson", "meta": "60 min \u00b7 with a pro"}],
      fallbackEmail: {
        to: "marcus@marcuslewisenterprises.com",
        subject: "Summer Camp",
        body: "Hi,\n\nI'd like to register for Summer Camp.\n\nThank you!",
      },
    },

    adult: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.marcus-lewis-racquet-club.example/schedule",
      title: "Adult Clinics",
      subtitle: "Tennis or pickleball, indoor courts, live availability.",
      services: [{"name": "Tennis court", "meta": "60 min \u00b7 singles or doubles"}, {"name": "Pickleball court", "meta": "60 min \u00b7 up to 4"}, {"name": "Private lesson", "meta": "60 min \u00b7 with a pro"}],
      fallbackEmail: {
        to: "marcus@marcuslewisenterprises.com",
        subject: "Adult Clinics",
        body: "Hi,\n\nI'd like to register for Adult Clinics.\n\nThank you!",
      },
    },

    leagues: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.marcus-lewis-racquet-club.example/schedule",
      title: "Leagues & Teams",
      subtitle: "Tennis or pickleball, indoor courts, live availability.",
      services: [{"name": "Tennis court", "meta": "60 min \u00b7 singles or doubles"}, {"name": "Pickleball court", "meta": "60 min \u00b7 up to 4"}, {"name": "Private lesson", "meta": "60 min \u00b7 with a pro"}],
      fallbackEmail: {
        to: "marcus@marcuslewisenterprises.com",
        subject: "Leagues & Teams",
        body: "Hi,\n\nI'd like to register for Leagues & Teams.\n\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.marcus-lewis-racquet-club.example/schedule",
      title: "Pickleball Programs",
      subtitle: "Tennis or pickleball, indoor courts, live availability.",
      services: [{"name": "Tennis court", "meta": "60 min \u00b7 singles or doubles"}, {"name": "Pickleball court", "meta": "60 min \u00b7 up to 4"}, {"name": "Private lesson", "meta": "60 min \u00b7 with a pro"}],
      fallbackEmail: {
        to: "marcus@marcuslewisenterprises.com",
        subject: "Pickleball Programs",
        body: "Hi,\n\nI'd like to register for Pickleball Programs.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.marcus-lewis-racquet-club.example/schedule",
      title: "The New MLRC East, Opening 2026",
      subtitle: "Fourteen new courts, eight for pickleball and six for tennis, minutes from the West facility.",
      services: [{"name": "Tennis court", "meta": "60 min \u00b7 singles or doubles"}, {"name": "Pickleball court", "meta": "60 min \u00b7 up to 4"}, {"name": "Private lesson", "meta": "60 min \u00b7 with a pro"}],
      fallbackEmail: {
        to: "marcus@marcuslewisenterprises.com",
        subject: "The New MLRC East, Opening 2026",
        body: "Hi The Marcus Lewis Racquet Club,\n\nI'm interested in The New MLRC East, Opening 2026.\n\nThank you!",
      },
    },
  },
};
