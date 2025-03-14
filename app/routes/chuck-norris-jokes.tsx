import type { Route } from "./+types/chuck-norris-jokes";

type NorrisResponse = {
    "icon_url": string,
    "id": string,
    "url": string,
    "value": string
    // "value": "if the impossible happens and Chuck Norris dies then the world will be covered with darkness"
}

export async function loader() {
    const chuckNorrisJokeURL = `https://api.chucknorris.io/jokes/random`
    const response = await (await fetch(chuckNorrisJokeURL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })).json() as NorrisResponse;

    return ({ response, url: chuckNorrisJokeURL });
}

export default function Test({ loaderData }: Route.ComponentProps) {
    // console.log(`asdf 🧐 ~ loaderData:`, loaderData)
    return (
        <div className="p-20">
            <h1 className="py-2">Chuck Norris Jokes</h1>
            <code>{loaderData.response.value}</code>
        </div>
    )
}