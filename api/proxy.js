export default async function handler(req, res) {
    try {
      const response = await fetch("http://apialfa.apoint.uz/v1/hr/user/sign-in?include=token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      });
  
      const data = await response.json();
      res.status(response.status).json(data);
    } catch (error) {
      res.status(500).json({ error: "Serverda xatolik yuz berdi", details: error.message });
    }
  }