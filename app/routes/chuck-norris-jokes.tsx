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

    const objVar = {
        key: "value",
        key2: {
            anohterkey: "value2"
        },
        key3: {
            anohterkey: "value2"
        },
        key4: {
            anohterkey: "value2"
        },
        key5: {
            anohterkey: "value2"
        },
        anArray: [
            { key0: "value" },
            { key1: 100 },
            { key2: { anotherObj: "value3" } },
            { key3: ["value4"] }
        ]
    }

    return ({ response, url: chuckNorrisJokeURL, objVar });
}

export default function Test({ loaderData }: Route.ComponentProps) {
    const arrayVal = loaderData.objVar.anArray

    return (
        <div className="p-20">
            <h1 className="py-2">Chuck Norris Jokes</h1>
            <code>{loaderData.response.value}</code>

            <h2>types</h2>
            <br />
            {arrayVal.map((item) => {
                return <>
                    <div>{JSON.stringify(item)}</div>
                    <div>{JSON.stringify(typeof item)}</div>
                    Item Value:
                    <div>{JSON.stringify(Object.values(item)[0])}</div>
                    <div>{JSON.stringify(typeof Object.values(item)[0])}</div>
                    <br/>
                </>
            })}
        </div>
    )
}