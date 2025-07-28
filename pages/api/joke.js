export default function handler(req, res) {
  res.status(200).json({
    type: "general",
    setup: "Why did the girl smear peanut butter on the road?",
    punchline: "To go with the traffic jam.",
    id: 324
  });
}
