export const jobPostCreatedByPromise = email => {
    return fetch(`https://career-code-server-five.vercel.app/jobs/applications?email=${email}`)
    .then(res => res.json())
}