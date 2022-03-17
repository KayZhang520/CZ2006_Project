import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

export default function SearchBar() {
  return (
    <div class="container">
      <div class="row">
        <div className="country" class="col-4">
          <Menu>
            <MenuButton as={Button} rightIcon={" "}>
              Country
            </MenuButton>
            <MenuList>
              <MenuItem>Singapore</MenuItem>
              <MenuItem>United States</MenuItem>
              <MenuItem>United Kindom</MenuItem>
              <MenuItem>Germany</MenuItem>
              <MenuItem>China</MenuItem>
            </MenuList>
          </Menu>
        </div>

        <div className="ranking" class="col-4">
          <Menu>
            <MenuButton as={Button} rightIcon={" "}>
              Ranking
            </MenuButton>
            <MenuList>
              <MenuItem>Singapore</MenuItem>
              <MenuItem>United States</MenuItem>
              <MenuItem>United Kindom</MenuItem>
              <MenuItem>Germany</MenuItem>
              <MenuItem>China</MenuItem>
            </MenuList>
          </Menu>
        </div>
        <div className="course" class="col-4">
          <Menu>
            <MenuButton as={Button} rightIcon={" "}>
              Courses
            </MenuButton>
            <MenuList>
              <MenuItem>Singapore</MenuItem>
              <MenuItem>United States</MenuItem>
              <MenuItem>United Kindom</MenuItem>
              <MenuItem>Germany</MenuItem>
              <MenuItem>China</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
      <div class="row">
        <div class="col-8">
          <textarea className="searchBar" defaultValue={"testing"}></textarea>
        </div>
        <div class="col-4">
          <button className="submit">Submit</button>
        </div>
      </div>
    </div>
  );
}
