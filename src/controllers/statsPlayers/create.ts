
import { v4 as uuidv4 } from 'uuid';
import { createStats } from '../../db/implementations/statsPlayerRepository';

const createPlayerStats = async (req: any, res: any) => {
  try {
    const {
      bateadores,	ap,	ab,	r	,h	,rbi,	b2	,b3	,hr	,bb	,so	,sb	,sc,	sf,	lob
    } = req.body;

    if (!bateadores || !ap || !ab || !r || !h || !rbi || !b2 || !b3 || !hr || !bb || !so || !so || !sb || !sc || !sf || !lob) {
      console.log("Invalid statsplayer data: Missing required fields");
      return res.status(400).send("Invalid playeasa data: Missing required fields");
    }

    const playerStatsPayload = {
      id: uuidv4(),
      bateadores,	
      ap,	
      ab,	
      r,
      h,
      rbi,
      b2,
      b3,
      hr,
      bb,
      so,
      sb,
      sc,
      sf,	
      lob
    };

    console.log(playerStatsPayload);
    await createStats(playerStatsPayload);

    return res.status(201).send({ message: "Player created" });
  } catch (error) {
    console.error("Error in create operation:", error);
    return res.status(500).send("Internal Server Error");
  }
};

export default createPlayerStats;
