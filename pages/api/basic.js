// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fetchData from "../../data/content";

export default function handler(req, res) {
  res.status(200).json({fetchData})
}
