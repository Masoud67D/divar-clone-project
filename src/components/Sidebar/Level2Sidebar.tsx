import React, { useContext } from "react";
import { Box, List } from "@material-ui/core";
import { DivarContext } from "../context/divarContext";
import Level3Sidebar from "./Level3Sidebar";
import SideItem from "./SideItem";
import { useParams } from "react-router";

interface SubCategoriesType {
  subCategoryRoute: string;
  subCategoryText: string;
  level2SubCategories: any
}

const Level2Sidebar = ({ subCategories } : { subCategories?: SubCategoriesType[] }) => {

  const { routes } = useContext(DivarContext);
  //@ts-ignore
  const {city} = useParams()
  console.log(city);
  

  return (
    <List>
      <Box ml={7}>
        {//@ts-ignore
        subCategories.map(({ subCategoryRoute, subCategoryText, level2SubCategories }, index) => {
          if (subCategoryRoute === routes.level2) {
            return (
              <>
                <SideItem
                  key={index}
                  onClick={() => { routes.level2 = subCategoryRoute }}
                  linkToGo={`/${city}/${subCategoryRoute}`}
                  text={subCategoryText}
                  style={{ color: routes.level2 === subCategoryRoute ? "black" : "" }}
                />

                <Level3Sidebar level2Subcategories={level2SubCategories} />

              </>
            );
          }

          if (!routes.level2) {
            return (
              <SideItem
                  key={index}
                  onClick={() => { routes.level2 = subCategoryRoute }}
                  linkToGo={`/${city}/${subCategoryRoute}`}
                  text={subCategoryText}
              />
            );
          }
          return undefined
        }
      )}
    </Box>
  </List>
  );
};

export default Level2Sidebar;
