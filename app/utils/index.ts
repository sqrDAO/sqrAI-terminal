import { minidenticon } from "minidenticons";

const genAVT = (adress: string) => {
  if (adress && adress?.length > 5) {
    const key = adress.slice(adress.length - 5, adress.length);
    return (
      "data:image/svg+xml;utf8," + encodeURIComponent(minidenticon(key, 80, 80))
    );
  } else {
    return (
      "data:image/svg+xml;utf8," +
      encodeURIComponent(minidenticon("default", 80, 80))
    );
  }
};

function extractJSONFromHTML(html: string) {
  const pattern = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
  const scriptTags = html.match(pattern);

  if (!scriptTags) {
    return null;
  }

  for (const scriptTag of scriptTags) {
    const jsonStart = scriptTag.indexOf("{");
    const jsonEnd = scriptTag.lastIndexOf("}");

    if (jsonStart !== -1 && jsonEnd !== -1) {
      const jsonString = scriptTag.substring(jsonStart, jsonEnd + 1);
      try {
        const jsonData = JSON.parse(jsonString);
        return jsonData;
      } catch (error) {
        continue;
      }
    }
  }

  return null;
}

export default { genAVT };
