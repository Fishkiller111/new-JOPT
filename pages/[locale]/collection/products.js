import React, { Fragment, useState } from 'react';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppBar from '@mui/material/AppBar';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import { useSpacing } from 'theme/common';
import HomeLayout from 'components/Layouts/Home';
import ProductCards from 'components/Cards/Product/ProductCard';
import PlaylistCard from 'components/Cards/Media/PlaylistCard';
import ProfileCard from 'components/Cards/Profile/ProfileCard';
import Filter from 'components/Filter/Filter';
import Sorter from 'components/Filter/Sorter';
import Search from 'components/Filter/Search';
import TabCategory from 'components/Filter/TabCategory';
import BlueGradient from 'components/Artworks/BlurGradient';
import FooterDeco from 'components/Footer/Decoration/General';
import products from 'public/api/products';
import collection from 'public/api/collection';
import creator from 'public/api/creator';
import brand from 'public/text/brand';
import link from 'public/text/link';

const checkAll = [
  'check-a',
  'check-b',
  'check-c',
  'check-d',
  'check-e',
  'check-f'
];

const Transition = React.forwardRef(function Transition(props, ref) { // eslint-disable-line
  return <Slide direction="up" ref={ref} {...props} />;
});

function Products() {
  const { classes } = useSpacing();

  const isDesktop = useMediaQuery(theme => theme.breakpoints.up('md'));

  const [openFilter, setOpenFilter] = useState(false);

  const [group, setGroup] = useState('all');
  const [toggleView, setView] = useState('grid');
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('all');
  const [rating, setRating] = useState(0);
  const [radio, setRadio] = useState('all');
  const [check, setCheck] = useState(checkAll);
  const [range, setRange] = useState({
    from: 0,
    to: 100
  });
  const [tag, setTag] = useState(['tag-one', 'tag-two', 'tag-three', 'tag-four']);
  const [sortBySelected, setBySelected] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [sortFrom, setFrom] = useState(-1);
  const [sortTo, setTo] = useState(1);

  const handleChangeGroup = (event, cat) => {
    setGroup(cat);
  };

  const handleFilterOpen = () => {
    setOpenFilter(true);
  };

  const handleFilterClose = () => {
    setOpenFilter(false);
  };

  const handleGetRange = val => {
    setRange(val);
  };

  const handleSortBy = val => {
    setBySelected(val);
    switch (val) {
      case 'title-asc':
        setSortBy('title');
        setFrom(1);
        setTo(-1);
        break;
      case 'title-desc':
        setSortBy('title');
        setFrom(-1);
        setTo(1);
        break;
      case 'price-asc':
        setSortBy('price');
        setFrom(-1);
        setTo(1);
        break;
      default:
        setSortBy('price');
        setFrom(1);
        setTo(-1);
    }
  };

  const filteredItems = () => {
    // Compare same tag
    const intersection = (firstArray, secondArray) => firstArray
      .filter(element => secondArray.includes(element));

    // Check is all categories checked
    const checkFilter = (item, filterData) => {
      if (filterData !== 'all') {
        return item === filterData;
      }
      return true;
    };

    return products
      .filter(cardItem => checkFilter(cardItem.category, category)
        && checkFilter(cardItem.radio, radio)
        && cardItem.price >= range.from
        && cardItem.price <= range.to
        && cardItem.rating >= rating
        && check.indexOf(cardItem.check) > -1
        && intersection(tag, cardItem.tag).length > 0
      )
      .sort(
        (a, b) => {
          if (a[sortBy] > b[sortBy]) {
            return sortFrom;
          }
          return sortTo;
        }
      );
  };

  return (
    <Fragment>
      <Head>
        <title>
          { brand.name + ' - Products' }
        </title>
      </Head>
      <CssBaseline />
      <Dialog fullScreen open={openFilter} onClose={handleFilterClose} TransitionComponent={Transition}>
        <AppBar>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleFilterClose}
              aria-label="close"
              size="large"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flex: 1 }}>
              Filter
            </Typography>
            <Button autoFocus color="inherit" onClick={handleFilterClose}>
              Done
            </Button>
          </Toolbar>
        </AppBar>
        <Container maxWidth="sm">
          <Box pt={{ lg: 10 }}>
            <Filter
              filterCategory={category}
              changeCategory={setCategory}
              filterRating={rating}
              changeRating={setRating}
              filterRadio={radio}
              changeRadio={setRadio}
              filterCheck={check}
              changeCheck={setCheck}
              checkAll={() => setCheck(checkAll)}
              changeRange={handleGetRange}
              filterTag={tag}
              changeTag={setTag}
            />
          </Box>
        </Container>
      </Dialog>
      <BlueGradient />
      <div className={classes.innerPage}>
        <Container>
          <Grid container spacing={isDesktop ? 2 : 1}>
            <Grid item md={8} sm={12} xs={12}>
              <Search value={keyword} updateValue={setKeyword} />
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              <Sorter
                view={toggleView}
                total={filteredItems().length}
                sortBySelected={sortBySelected}
                sortBy={handleSortBy}
                switchView={setView}
                openFilter={handleFilterOpen}
              />
            </Grid>
          </Grid>
        </Container>
        <Box mt={{ md: 5, xs: 2 }} mx={{ sm: 3, xs: 2 }}>
          <Grid container spacing={isDesktop ? 3 : 0}>
            {isDesktop && (
              <Grid item md={3} xs={12}>
                <Filter
                  filterCategory={category}
                  changeCategory={setCategory}
                  filterRating={rating}
                  changeRating={setRating}
                  filterRadio={radio}
                  changeRadio={setRadio}
                  filterCheck={check}
                  changeCheck={setCheck}
                  checkAll={() => setCheck(checkAll)}
                  changeRange={handleGetRange}
                  filterTag={tag}
                  changeTag={setTag}
                />
              </Grid>
            )}
            <Grid item md={9} xs={12}>
              <TabCategory switchTab={handleChangeGroup} value={group} total={filteredItems().length} />
              {(group === 'items' || group === 'all') && (
                <Grid id="items" container spacing={2}>
                  {filteredItems().length < 1 && (
                    <Grid item sm={12}>
                      <h3>Not found</h3>
                    </Grid>
                  )}
                  {filteredItems()
                    .map((item, index) => item.title.toLowerCase()
                      .indexOf(keyword) > -1 && (
                        <Grid
                          item
                          key={index.toString()}
                          lg={toggleView === 'grid' ? 4 : 12}
                          sm={toggleView === 'grid' ? 6 : 12}
                          xs={12}
                        >
                          <Box
                            className={classes.item}
                            mb={toggleView === 'grid' ? 4 : 1}
                            data-filter={`Category: ${item.category} ~ Tag: ${item.tag} ~ Check: ${item.check} ~ Radio: ${item.radio}`}
                          >
                            <ProductCards
                              rating={item.rating}
                              price={item.price}
                              title={item.title}
                              desc="Last Sale: 0.01001 ETH"
                              orientation={toggleView === 'grid' ? 'portrait' : 'landscape'}
                              img={item.img}
                              type="over"
                              href={link.productDetail}
                            />
                          </Box>
                        </Grid>
                    )
                  )}
                </Grid>
              )}
              {(group === 'collection' || group === 'all') && (
                <Grid id="collection" container spacing={4} sx={{ mt: { sm: 5 } }}>
                  {collection.map((item, index) => (
                    <Grid key={index.toString()} item sm={6} xs={12}>
                      <PlaylistCard
                        img={item.img}
                        avatar={item.avatar}
                        logo={item.logo}
                        title={item.title}
                        name={item.name}
                        desc={item.desc}
                        count={item.count}
                        items={item.items}
                        color={item.color}
                        verifiedUser={item.verifiedUser}
                        verifiedItem={item.verifiedItem}
                        withDeco={item.withDeco}
                        href={item.href}
                      />
                    </Grid>
                  ))}
                </Grid>
              )}
              {(group === 'creators' || group === 'all') && (
                <Grid id="profile" container spacing={3} sx={{ mt: { sm: 5, xs: 2 } }}>
                  {creator.map((item, index) => (
                    <Grid item sm={4} xs={12} key={index.toString()}>
                      <ProfileCard
                        name={item.name}
                        verified={item.verified}
                        avatar={item.avatar}
                        items={item.items}
                        sales={item.sales}
                        href={item.href}
                      />
                    </Grid>
                  ))}
                </Grid>
              )}
            </Grid>
          </Grid>
        </Box>
      </div>
    </Fragment>
  );
}

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

Products.getLayout = (page, pageProps) => (
  <HomeLayout footerDeco={FooterDeco} {...pageProps}>
    {page}
  </HomeLayout>
);

export default Products;
