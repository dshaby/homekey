"use client";
import {
  CalendarMonth,
  InsertLink,
  SquareFoot,
  Wc,
  WebStories,
} from "@mui/icons-material";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import KingBedRoundedIcon from "@mui/icons-material/KingBedRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import { Skeleton } from "@mui/joy";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import IconButton from "@mui/joy/IconButton";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import React, { useState } from "react";
import { selectIsLoadingHomes } from "../redux/features/searchHomes.slice";
import { useAppSelector } from "../redux/hooks";

type PropertyCardProps = {
  bedrooms: number;
  bathrooms: number;
  cityState: string;
  price: number;
  category: React.ReactNode;
  image: string;
  liked?: boolean;
  rareFind?: boolean;
  title: React.ReactNode;
  sqFt: number;
  stories: number;
  yearBuilt: number;
  url: string;
};

export default function PropertyCard(props: PropertyCardProps) {
  const {
    category,
    title,
    rareFind = false,
    liked = false,
    image,
    cityState,
    bathrooms,
    bedrooms,
    price,
    sqFt,
    stories,
    yearBuilt,
    url,
  } = props;

  const [isLiked, setIsLiked] = useState(liked);
  const isLoading = useAppSelector(selectIsLoadingHomes);

  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        bgcolor: "neutral.softBg",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        "&:hover": {
          boxShadow: "lg",
          borderColor: "var(--joy-palette-neutral-outlinedDisabledBorder)",
        },
      }}
    >
      <CardOverflow
        sx={{
          mr: { xs: "var(--CardOverflow-offset)", sm: 0 },
          mb: { xs: 0, sm: "var(--CardOverflow-offset)" },
          "--AspectRatio-radius": {
            xs: "calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px)) calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px)) 0 0",
            sm: "calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px)) 0 0 calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px))",
          },
        }}
      >
        <AspectRatio
          ratio="1"
          flex
          sx={{
            minWidth: { sm: 120, md: 160 },
            "--AspectRatio-maxHeight": { xs: "160px", sm: "9999px" },
          }}
        >
          <Skeleton loading={isLoading}>
            <img alt="" src={image} />
          </Skeleton>
          <Stack
            alignItems="center"
            direction="row"
            sx={{ position: "absolute", top: 0, width: "100%", p: 1 }}
          >
            {rareFind && (
              <Chip
                variant="soft"
                color="success"
                startDecorator={<WorkspacePremiumRoundedIcon />}
                size="md"
              >
                Rare find
              </Chip>
            )}
            <IconButton
              variant="plain"
              size="sm"
              color={isLiked ? "danger" : "neutral"}
              onClick={() => setIsLiked((prev) => !prev)}
              sx={{
                display: { xs: "flex", sm: "none" },
                ml: "auto",
                borderRadius: "50%",
                zIndex: "20",
              }}
            >
              <Skeleton loading={isLoading} />
              <FavoriteRoundedIcon />
            </IconButton>
          </Stack>
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Stack
          spacing={1}
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <div>
            <Typography level="body-sm" sx={{ mb: 2 }}>
              <Skeleton loading={isLoading}>{category}...</Skeleton>
            </Typography>
            <Typography level="title-md">
              <Skeleton loading={isLoading}>{title}</Skeleton>
            </Typography>
          </div>
          <IconButton
            variant="plain"
            size="sm"
            color={isLiked ? "danger" : "neutral"}
            onClick={() => setIsLiked((prev) => !prev)}
            sx={{
              display: { xs: "none", sm: "flex" },
              borderRadius: "50%",
            }}
          >
            <Skeleton loading={isLoading} />
            <FavoriteRoundedIcon />
          </IconButton>
        </Stack>
        <Stack
          spacing="0.25rem 1rem"
          direction="row"
          useFlexGap
          flexWrap="wrap"
          sx={{ my: 0.25 }}
        >
          <Typography
            level="body-xs"
            startDecorator={
              <>
                <FmdGoodRoundedIcon />
                <Skeleton loading={isLoading} />
              </>
            }
          >
            <Skeleton loading={isLoading}>{cityState}</Skeleton>
          </Typography>

          <Typography
            level="body-xs"
            startDecorator={
              <>
                <KingBedRoundedIcon />
                <Skeleton loading={isLoading} />
              </>
            }
          >
            <Skeleton loading={isLoading}>{bedrooms} rooms</Skeleton>
          </Typography>
          <Typography
            level="body-xs"
            startDecorator={
              <>
                <Wc />
                <Skeleton loading={isLoading} />
              </>
            }
          >
            <Skeleton loading={isLoading}>{bathrooms} baths</Skeleton>
          </Typography>
        </Stack>
        <Stack direction="row">
          <Stack
            direction="row"
            spacing="0.25rem 1rem"
            useFlexGap
            sx={{ mt: "auto" }}
          >
            <Typography
              level="body-xs"
              startDecorator={
                <>
                  <SquareFoot />
                  <Skeleton loading={isLoading} />
                </>
              }
            >
              <Skeleton loading={isLoading}>{sqFt} SqFt</Skeleton>
            </Typography>
            {stories > 1 && (
              <Typography
                level="body-xs"
                startDecorator={
                  <>
                    <WebStories />
                    <Skeleton loading={isLoading} />
                  </>
                }
              >
                <Skeleton loading={isLoading}>{stories} stories</Skeleton>
              </Typography>
            )}
            {yearBuilt && (
              <Typography
                level="body-xs"
                startDecorator={
                  <>
                    <CalendarMonth />
                    <Skeleton loading={isLoading} />
                  </>
                }
              >
                <Skeleton loading={isLoading}>Year Built: {yearBuilt}</Skeleton>
              </Typography>
            )}
          </Stack>
          <Typography level="title-lg" sx={{ flexGrow: 1, textAlign: "right" }}>
            <Skeleton loading={isLoading}>
              <strong>{`$${price.toLocaleString()}`}</strong>{" "}
            </Skeleton>
          </Typography>
        </Stack>
        <Typography
          level="body-xs"
          startDecorator={
            <>
              <InsertLink />
              <Skeleton loading={isLoading} />
            </>
          }
          sx={{ mt: 1 }}
        >
          <Skeleton loading={isLoading}>
            {
              <a
                target="_blank"
                href={`https://www.redfin.com${url}`}
              >{`www.redfin.com${url}`}</a>
            }
          </Skeleton>
        </Typography>
      </CardContent>
    </Card>
  );
}