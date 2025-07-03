import { Section } from "@/types/sectionTypes";

export const DEFAULT_SECTIONS: Section[] = [
  {
    id: "title",
    label: "Title and description",
    defaultContent: `# Project Title

A brief description of what this project does and who it's for
    `,
  },
  {
    id: "api-reference",
    label: "API Reference",
    defaultContent: `## API Reference

#### Get all items

\`\`\`plaintext
GET /api/items
\`\`\`

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| \`api_key\` | \`string\` | **Required**. Your API key |

#### Get item

\`\`\`plaintext
GET /api/items/\${id}
\`\`\`

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| \`id\`      | \`string\` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.
`,
  },
  {
    id: "acknowledgements",
    label: "Acknowledgements",
    defaultContent: `## Acknowledgements

- [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
- [Awesome README](https://github.com/matiassingers/awesome-readme)
- [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)`,
  },
  {
    id: "appendix",
    label: "Appendix",
    defaultContent: `## Appendix

Any additional information goes here`,
  },
  {
    id: "authors",
    label: "Authors",
    defaultContent: `## Authors

- [@felipetacara](https://www.github.com/felipetacara)`,
  },
  {
    id: "badges",
    label: "Badges",
    defaultContent: `## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)`,
  },
  {
    id: "color reference",
    label: "Color Reference",
    defaultContent: `## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
| Example Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |
| Example Color | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |
| Example Color | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |

`,
  },
  {
    id: "environment variables",
    label: "Environment Variables",
    defaultContent: `## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

\`API_KEY\`

\`ANOTHER_API_KEY\``,
  },
];
