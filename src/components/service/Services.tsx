import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import Link from "next/link";

export default function Services() {
  return (
    <>
      <div className="p-20 flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">SERVICES</h1>

        {/* Flex container for cards */}
        <div className="flex gap-6 flex-wrap justify-center">
          {/* First Card */}
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="./serviceImg/animations.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                2D Animation
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Link href="/service/2dAnimations" passHref>
                <Button size="small">Learn More</Button>
              </Link>
            </CardActions>
          </Card>

          {/* Second Card */}
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="./serviceImg/digitalArts.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                DigitalArts
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Frogs are amphibians, commonly found in wetland environments and
                have over 5,000 species.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Link href="/service/digitalArts" passHref>
                <Button size="small">Learn More</Button>
              </Link>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                3D Animation
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Snakes are legless reptiles found all over the world, with more
                than 3,000 species.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Link href="/service/3dAnimations" passHref>
                <Button size="small">Learn More</Button>
              </Link>{" "}
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Gaphic design
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Snakes are legless reptiles found all over the world, with more
                than 3,000 species.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Link href="/service/graphicDesign" passHref>
                <Button size="small">Learn More</Button>
              </Link>{" "}
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="/serviceCategory/web.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Web design and dev
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Snakes are legless reptiles found all over the world, with more
                than 3,000 species.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Link href="/service/webDesign" passHref>
                <Button size="small">Learn More</Button>
              </Link>{" "}
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Video Editing
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Snakes are legless reptiles found all over the world, with more
                than 3,000 species.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Link href="/service/videoEditing" passHref>
                <Button size="small">Learn More</Button>
              </Link>{" "}
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
}
