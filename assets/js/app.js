(function() {
    "use strict";
    var indexOf = [].indexOf || function(item) {
        for (var i = 0, l = this.length; i < l; i++)
            if (i in this && this[i] === item) return i;
        return -1
    };
    angular.module("webApp", ["ui.router", "ui.router.title", "ui.bootstrap", "uiSwitch", "ngAria", "ngTable", "duScroll", "ngAnimate", "ngCookies", "updateMeta", "vAccordion", "ngMaterial", "environment", "fullPage.js", "slickCarousel", "pasvaz.bindonce", "infinite-scroll", "angular-loading-bar", "angulartics", "ngInput", "angular-clipboard", "urlEscape", "webApp.googleAnalytics", "webApp.adrollPixel", "webApp.jobs", "webApp.main", "webApp.team", "webApp.terms", "webApp.event", "webApp.photo", "webApp.cities", "webApp.events", "webApp.sitemap", "webApp.products", "webApp.templates", "webApp.slideshow", "webApp.caseStudies", "webApp.landing-page", "webApp.social-recap", "webApp.get-the-bosco", "webApp.what-is-the-bosco"]).constant("$MD_THEME_CSS", ""), angular.module("webApp.caseStudies", ["ui.bootstrap"]).config(["$urlMatcherFactoryProvider", "$stateProvider", function($urlMatcherFactoryProvider, $stateProvider) {
        return $urlMatcherFactoryProvider.strictMode(!1), $urlMatcherFactoryProvider.caseInsensitive(!0), $stateProvider.state("case-studies", {
            abstract: !0,
            templateUrl: "case-studies.template.html",
            controller: "CaseStudiesController",
            resolve: {
                $title: function() {
                    return "Brand Collaboration Case Studies | The Bosco"
                }
            }
        }).state("case-study", {
            url: "/case-studies/{caseStudy}",
            templateUrl: "case-study.template.html",
            controller: "CaseStudyController",
            resolve: {
                $title: function($stateParams) {
                    switch (!1) {
                        case "kong-skull-island" !== $stateParams.caseStudy:
                            return "Kong: Skull Island x The Bosco Collaboration Case Study";
                        case "reformation" !== $stateParams.caseStudy:
                            return "Reformation x The Bosco Collaboration Case Study";
                        case "tommy-now" !== $stateParams.caseStudy:
                            return "Tommy Hilfiger x The Bosco Collaboration Case Study";
                        case "target-marimekko" !== $stateParams.caseStudy:
                            return "Target + Marimekko x The Bosco Collaboration Case Study";
                        case "row-hotels" !== $stateParams.caseStudy:
                            return "Row NYC x The Bosco Collaboration Case Study";
                        case "dkny" !== $stateParams.caseStudy:
                            return "DKNY x The Bosco Collaboration Case Study";
                        case "met-life" !== $stateParams.caseStudy:
                            return "Met Life x The Bosco Collaboration Case Study";
                        case "wired" !== $stateParams.caseStudy:
                            return "Wired and AT&T x The Bosco Collaboration Case Study";
                        case "hm" !== $stateParams.caseStudy:
                            return "H&M x The Bosco Photo Booth Collaboration Case Study";
                        case "gatorade" !== $stateParams.caseStudy:
                            return "Gatorade x The Bosco Collaboration Case Study";
                        case "emusic-mother" !== $stateParams.caseStudy:
                            return "eMusic and Mother x The Bosco Collaboration Case Study";
                        case "hennessy" !== $stateParams.caseStudy:
                            return "Hennessy x The Bosco Collaboration Case Study";
                        case "lexus-pandora" !== $stateParams.caseStudy:
                            return "Lexus and Pandora x The Bosco Collaboration Case Study";
                        case "olympus" !== $stateParams.caseStudy:
                            return "Olympus x The Bosco Collaboration Case Study";
                        case "paintbox" !== $stateParams.caseStudy:
                            return "Paintbox x The Bosco Collaboration Case Study";
                        case "the-bosco-facial-recognition" !== $stateParams.caseStudy:
                            return "Pandora Facial Recognition x The Bosco Collaboration Case Study";
                        case "INSTANTARTIST" !== $stateParams.caseStudy:
                            return "#INSTANTARTIST x The Bosco Collaboration Case Study";
                        case "animated-overlays" !== $stateParams.caseStudy:
                            return "Animated Overlays x The Bosco Collaboration Case Study"
                    }
                    return $stateParams.caseStudy + " | The Bosco"
                }
            }
        }).state("case-studies.list", {
            url: "/case-studies",
            templateUrl: "case-studies.list.template.html",
            parent: "case-studies",
            resolve: {
                $title: function() {
                    return "Brand Collaboration Case Studies | The Bosco"
                }
            }
        }).state("look-book", {
            url: "/lookbook?product&customization&additionOne&additionTwo",
            templateUrl: "look-book.template.html",
            controller: "LookBookController",
            parent: "case-studies",
            params: {
                product: {
                    value: null
                },
                customization: {
                    value: null
                },
                additionOne: {
                    value: null
                },
                additionTwo: {
                    value: null
                }
            },
            resolve: {
                appliedTagFilters: function($stateParams) {
                    var tags;
                    return tags = [], $stateParams.product && tags.push($stateParams.product), $stateParams.customization && tags.push($stateParams.customization), $stateParams.additionOne && tags.push($stateParams.additionOne), $stateParams.additionTwo && tags.push($stateParams.additionTwo), tags
                },
                resolvedLookbookPosts: function(LookbookPostService, appliedTagFilters) {
                    return LookbookPostService.gettingLookbookPosts({
                        "tags[]": appliedTagFilters
                    })
                },
                resolvedLookbookTags: function(LookbookTagService) {
                    return LookbookTagService.gettingLookbookTags()
                }
            }
        }).state("look-book.show", {
            url: "/{id}",
            parent: "look-book",
            onEnter: function($stateParams, $state, $uibModal, LookbookPostService, resolvedLookbookPosts) {
                return $uibModal.open({
                    templateUrl: "look-book-post.show.template.html",
                    controller: "LookBookPostController",
                    resolve: {
                        resolvedLookbookPost: function(LookbookPostService) {
                            var post;
                            return post = _.find(resolvedLookbookPosts, function(post) {
                                return post.id === $stateParams.id
                            }), LookbookPostService.gettingLookbookPost($stateParams.id)
                        }
                    }
                })
            }
        })
    }]), angular.module("webApp").controller("CaseStudiesController", ["$rootScope", "$scope", "$state", "$sce", function($rootScope, $scope, $state, $sce) {
        return $scope.isCaseStudies = $state.is("case-studies.list"), $scope.switchLookbookView = function($event) {
            return $event.preventDefault(), "look-book" === $state.current.name ? ($state.transitionTo("case-studies.list"), $scope.isCaseStudies = !0) : ($state.transitionTo("look-book"), $scope.isCaseStudies = !1)
        }, $scope.init = function() {
            return $rootScope.metaDescription = "The Bosco has worked with premier brands including H&M, Gatorade, and Lexus showcasing unique and advanced photo experiences. See more at The Bosco today!", window.prerenderReady = !0
        }, $scope.init()
    }]), angular.module("webApp").controller("CaseStudyController", ["$rootScope", "$scope", "$state", "$sce", function($rootScope, $scope, $state, $sce) {
        return $scope.init = function() {
            var otherProject1, otherProject2, projects;
            return projects = {
                reformation: {
                    url: "reformation",
                    projectName: "REFORMATION",
                    backgroundImage: "https://s3.amazonaws.com/thebosco/angular-assets/images/case-studies/reformation.gif",
                    video: {
                        url: $sce.trustAsResourceUrl("https://player.vimeo.com/video/223187412?api=1&player_id=target-video"),
                        player: {}
                    },
                    location: "SoHo, New York City",
                    goal: $sce.trustAsHtml('<p>When the sustainable clothing brand reformation called us about permanently using our technology at their 3rd location in the SoHo neighborhood of New York City, they had 3 objectives in mind:</p> <p>1. Add a unique & memorable experience for shoppers.</p> <p>2. Let shoppers easily take professional portraits, letting them get opinions from their friends about potential purchases.</p> <p>3. Create professional quality branded content that could be shared on social media to help build awareness around the brand, and new location.</p> <p>Throughout the duration of the install we accomplished all 3 goals. Every day, shoppers interacted with the GIF booth sharing their GIFs to Instagram and Facebook, as well as directly with their friends which provided organic advertizing for the SoHo location.</p> <p>Thousands of GIFs have been snapped,  generating millions of impressions on Facebook and Instagram. It has even been <a href="https://www.nytimes.com/2015/10/08/fashion/photo-boots-warby-parker-topshop.html" target="_blank" class="bosco-gold">featured</a> in <a href="http://www.refinery29.com/2015/10/95455/photo-booths-retailers" target="_blank" class="bosco-gold">a number</a> of <a href="https://www.nylon.com/articles/best-photo-booths-new-york-city" target="_blank" class="bosco-gold">articles</a>, as the installation has become a staple of the shopping experience.</p>')
                },
                "kong-skull-island": {
                    url: "kong-skull-island",
                    projectName: "KONG: SKULL ISLAND",
                    backgroundImage: "https://s3.amazonaws.com/thebosco/angular-assets/images/case-studies/kong-skull-island.gif",
                    video: {
                        url: $sce.trustAsResourceUrl("https://player.vimeo.com/video/222267789?api=1&player_id=target-video"),
                        player: {}
                    },
                    location: "Los Angeles, CA",
                    goal: $sce.trustAsHtml("<p>We teamed up with Warner Brothers Pictures to help create awareness around the release of their blockbuster movie 'Kong: Skull Island.'</p> <p>Using a truss system and suspending our camera 12  feet in the air, we captured birds-eye video portraits of guests at multiple events throughout the Los Angeles area.</p> <p>The 13-second videos dropped participants into the film, transporting them to the heart of Skull Island.  The result: a mini trailer, starring the user, that could be shared on facebook, instagram & snapchat.</p> <p>Hundreds of videos were created and shared generating over half a million views, including a video by the star of the movie, Brie Larson, whose post alone was viewed over 90,000 times.</p> <p>Skull Island did $61 million on opening weekend, outperforming projections by 35%.</p>")
                },
                "tommy-now": {
                    url: "tommy-now",
                    projectName: "#TOMMYNOW",
                    backgroundImage: "https://s3.amazonaws.com/thebosco/angular-assets/images/case-studies/tommy.gif",
                    video: {
                        url: $sce.trustAsResourceUrl("https://player.vimeo.com/video/216723193?api=1&player_id=target-video"),
                        player: {}
                    },
                    location: "Venice Beach, CA",
                    goal: $sce.trustAsHtml("<p>We collaborated with Tommy Hilfiger and Gigi Hadid to bring an amazing custom experience to life.</p> <p>For the debut of Gigi's new fashion line, Tommy Hilfiger took over a piece of the Venice Boardwalk and turned it into an elaborate, 70's-themed carnival. Famous models, designers, musicians, and celebrities flew from all over the globe to attend.</p> <p>For the star-studded backstage area, they wanted a never before seen large scale experience.</p> <p>We created a three-walled, interactive enclosure using high-powered projectors and a depth / motion tracking camera. Users selected from a set of custom-animated patterns and digital environments inspired by Gigi's new line, which let them create amazing designs using their hand motions and gestures which we projected onto the wall in real-time, instantly translating the user's interactions with the camera into a visual display for all to see.</p> <p>During the experience, 7-second videos were recorded of the users infront of their creations, and could be shared by the users immediately at our Social Kiosk. This let us put engaging, branded content into the hands of celebrities and models with millions of followers at just the right time, which let them post content that helped magnify the event to the world.</p>")
                },
                "target-marimekko": {
                    url: "target-marimekko",
                    projectName: "TARGET & MARIMEKKO",
                    backgroundImage: "https://s3.amazonaws.com/thebosco/angular-assets/images/case-studies/target-marimekko.gif",
                    video: {
                        url: $sce.trustAsResourceUrl("https://player.vimeo.com/video/187395359?api=1&player_id=target-video"),
                        player: {}
                    },
                    location: "New York, NY",
                    goal: $sce.trustAsHtml("<p>We created three unique photo experiences in New York Cityâ€™s famous High Line park. The goal was to maximize awareness around the brand new Marimekko â€“ Target collaboration.</p> <p>On the North side of the park, we had three cameras installed in the wall of a 30 ft. high, 100 ft. long giant bubble and captured users in slow-motion on custom swing sets. Users could instantly share their branded slow motion videos.</p> <p>Right below the park, users could lay on a custom designed, 2,000 pound foam pillow as a birdâ€™s-eye-view camera built into a mirror recorded them. The 20-second video was turned into a timelapse, highlighting Marimekkoâ€™s patterns and turning usersâ€™ movements into creative animations. Sharing stations allowed participants to post on all social networks instantly.</p> <p>On the South side of the park, we rigged a camera into a custom fabricated interactive soundboard. Each tile had a different sound loop built into it, and users could jump from tile to tile or combine tiles to create music. We installed a camera looking straight down, capturing users as they created their own unique melodic composition. Each video could be shared via social media.</p>")
                },
                "row-hotels": {
                    url: "row-hotels",
                    meta: "The Bosco and Row NYC hotels collaborated to create a photo experience inspired by the paparazzi photographer Ron Galella. See more at The Bosco today!",
                    projectName: "ROW HOTELS",
                    backgroundImage: "https://s3.amazonaws.com/thebosco/angular-assets/images/case-studies/the-bosco-row-hotels.gif",
                    video: {
                        url: $sce.trustAsResourceUrl("https://player.vimeo.com/video/125066866?api=1&player_id=row-hotel-video"),
                        player: {}
                    },
                    location: "New York, NY",
                    goal: $sce.trustAsHtml("<p>ROW NYC had the goal of creating a more interactive, social media-driven, New York-centric experience for their guests.</p> <p>Inspired by iconic 1960's paparazzi photographer Ron Galella, we permanently installed a custom GIF booth collaging images of guests and his classic photos.</p> <p>We also installed an interactive 3D sculpture to display the GIFs as a centerpiece in their lobby.</p> <p>To top it all off, photos guests took and uploaded to Instagram and Twitter were also displayed on the sculpture when using the ROW Hotels hashtag.</p> <p>The interactive experience brought ROW Hotel guests closer to both the brand and New York City.</p>")
                },
                dkny: {
                    url: "dkny",
                    meta: "The Bosco and DKNY collaborated to create an experience where users modeled DKNY clothes to replicate the company's advert campaign. See more at The Bosco!",
                    projectName: "DKNY",
                    backgroundImage: "https://s3.amazonaws.com/thebosco/angular-assets/images/case-studies/the-bosco-dkny.gif",
                    video: {
                        url: $sce.trustAsResourceUrl("https://player.vimeo.com/video/136879590?api=1&player_id=dkny-video"),
                        player: {}
                    },
                    location: "New York, NY",
                    goal: $sce.trustAsHtml("<p>We installed two permanent photo installations at DKNY Flagship stores in London and New York City.</p> <p>Over the course of three fashion seasons, we developed installations that replicated DKNYâ€™s most current advertising campaign.</p> <p>Users instantly became an advertising force by creating their own personalized ads.</p>")
                },
                "met-life": {
                    url: "met-life",
                    meta: "The Bosco & Met Life collaborated to create a social media experience helping Jets & Giants fans capture their game day experiences. See more at The Bosco!",
                    projectName: "MET LIFE",
                    backgroundImage: "https://s3.amazonaws.com/thebosco/angular-assets/images/case-studies/the-bosco-met-life.gif",
                    video: {
                        url: $sce.trustAsResourceUrl("https://player.vimeo.com/video/136879591?api=1&player_id=met-life-video"),
                        player: {}
                    },
                    location: "New York, NY",
                    goal: $sce.trustAsHtml("<p>Over the course of the 2014 football season, we collaborated with MetLife using our #print technology.</p> <p>Met Life wanted to increase their social presence by letting Jets and Giants fans capture their game day experiences.</p> <p>Every time a fan used the MetLifeCentral hashtag on Instagram or Twitter, their picture was aggregated and automatically printed into a MetLife branded frame.</p> <p>The #print technology allowed Giants and Jets fans to capture their favorite game day memories in physical form, from snapshots with their favorite players and mascots to memories of someoneâ€™s first game.</p> <p>MetLifeâ€™s brand visibility and social media presence was significantly increased all while heightening fansâ€™ experience.</p>")
                },
                wired: {
                    url: "wired",
                    meta: "The Bosco and Wired collaborated to create a unique photo experience turning users into technological mosaics at their pop up store. See more at The Bosco!",
                    projectName: "WIRED & AT&T",
                    backgroundImage: "https://s3.amazonaws.com/thebosco/angular-assets/images/case-studies/The-Bosco-The-Wired-Pop-Up-HD-3.gif",
                    video: {
                        url: $sce.trustAsResourceUrl("https://player.vimeo.com/video/136879589?api=1&player_id=wired-video"),
                        player: {}
                    },
                    location: "New York, NY",
                    goal: $sce.trustAsHtml('<p>For the third year in a row, we collaborated with Wired to create a unique photography experience at their annual Pop Up store.</p> <p>The goal was to generate content that spoke to technology enthusiasts and helped spread the word about the Wired store.</p> <p>With a custom user interface, our booth allowed guests to turn themselves into technological mosaics by converting their faces into letters, numbers and symbols.</p> <p>Users were presented with an 8.5""x11"" print and prompted to push to social media - helping build awareness, buzz, and foot traffic to the store - all through social advertising.</p>')
                },
                hm: {
                    url: "hm",
                    meta: "The Bosco and H&M collaborated at Coachella where users could model H&M clothes in The Bosco's state of the art photo booths. See more at The Bosco today!",
                    projectName: "H&M",
                    backgroundImage: "https://s3.amazonaws.com/thebosco/angular-assets/images/case-studies/The-Bosco-H%26M-Virtual-Runway-HD-2.gif",
                    video: {
                        url: $sce.trustAsResourceUrl("https://player.vimeo.com/video/97457920?api=1&player_id=hm-video"),
                        player: {}
                    },
                    location: "Indio, CA",
                    goal: $sce.trustAsHtml("<p>Festival-goers were professionally styled in H&M clothing.</p> <p>They then selected from 25 motion-graphic backdrops, and proceeded to walk or dance in place on the treadmill</p> <p>Using green screen compositing technology, we were able to digitally insert participants onto the virtual runways of their choice</p> <br> <p>Users could instantly share their 6 second High Definition videos across all social media platforms</p> <p>and all clips streamed to six 80-inch televisions installed on a custom catwalk, creating the effect of a life-size digital fashion show</p> <br> <p>After Coachella we took the installation on the road, touring at college campuses across the country, helping music lovers across the nation express themselves with H&M</p>")
                },
                gatorade: {
                    url: "gatorade",
                    meta: "The Bosco and Gatorade collaborated to create a photo booth experience putting users into a classic Michael Jordan moment: The Shot. See more at The Bosco!",
                    projectName: "GATORADE",
                    backgroundImage: "https://s3.amazonaws.com/thebosco/angular-assets/images/case-studies/The-Bosco-Gatorade-Case-Study-HD-2.gif",
                    video: {
                        url: $sce.trustAsResourceUrl("https://player.vimeo.com/video/154121846?api=1&player_id=gatorade-video"),
                        player: {}
                    },
                    location: "New York, NY",
                    goal: $sce.trustAsHtml("<p>Gatoradeâ€™s goal was to further to align its brand with Michael Jordan and his most iconic moments.</p> <p>The Bosco created a photo experience that transported the user into one of those moments: Michael Jordanâ€™s series-winning basket against the Cleveland Cavaliers in the 1989 playoffs.</p> <p>Users reenacted Jordanâ€™s celebration and, by using green screen compositing technology, were able to mimic the most iconic moment. They received a 13x17 inch printed poster and could instantly share via all social channels using the hashtag #belikemike.</p> <p>199 photos were taken and got over 29,000 impressions on social networks - bringing guests viewers, and Gatorade closer to one of the most famous plays in NBA history.</p>")
                },
                "emusic-mother": {
                    url: "emusic-mother",
                    meta: "The Bosco and eMusic and Mother collaborated at the Pitchfork Music Festival to create an experience showing how music affects mood. See more at The Bosco!",
                    projectName: "EMUSIC & MOTHER",
                    backgroundImage: "https://s3.amazonaws.com/thebosco/angular-assets/images/case-studies/The-Bosco-Presents-The-Aura-Booth.gif",
                    video: {
                        url: $sce.trustAsResourceUrl("https://player.vimeo.com/video/104665096?api=1&player_id=emusic-video"),
                        player: {}
                    },
                    location: "Chicago, IL",
                    goal: $sce.trustAsHtml("<p>The Bosco created an unforgettable photography experience for fans at the Pitchfork Music Festival in Chicago.</p> <p>At the core of this experience was the question, â€œHow does music affect your mood?â€</p> <p>To answer this, we built a custom interface for reading and interpreting electrical data from the body and built it into four photo booths inside a structure dubbed the â€œElectromusical Energy Visualizerâ€ within the festival grounds.</p> <p>Users placed their hands on electro-sensitive plates and listened to tracks by Beach House, Ice Age, A$AP Rocky, and Lower Dens.</p> <p>All the while, the hand plates were capturing and contextualizing data from the listener. At the conclusion of each track, the aura camera would snap a picture.</p> <p>The results were fascinating.</p> <p>Users received their results instantly in the form of a printed photograph of their musical aura, along with a digital version that could be shared to all social networks.</p>")
                },
                hennessy: {
                    url: "hennessy",
                    meta: "The Bosco and Hennessy collaborated to celebrate the release of a limited edition bottle designed by street artist Shepard Fairey. See more at The Bosco!",
                    projectName: "HENNESSY",
                    backgroundImage: "https://s3.amazonaws.com/thebosco/angular-assets/images/case-studies/The-Bosco-Hennessy-ArtOfTheChase-HD.gif",
                    video: {
                        url: $sce.trustAsResourceUrl("https://player.vimeo.com/video/116572094?api=1&player_id=hennessy-video"),
                        player: {}
                    },
                    location: "Los Angeles, CA",
                    goal: $sce.trustAsHtml("<p>Collaborating with Hennessy and Strategic Group, The Bosco brought an original installation to Create nightclub in Los Angeles for the release party of the limited edition Hennessy bottle designed by street art legend Shepard Fairey.</p> <p>Hennessyâ€™s goal was to promote their newly designed bottle while showing support for artists, musicians, and the culture of collaboration.</p> <p>Guests could create a shareable animated GIF in our social GIF booth as well as get physical prints of their Instagrams and Twitter photos by using Hennessyâ€™s hashtag.</p> <p>We leveraged all the content from the GIF booth and printing stations by projection, mapping the feed in 360Â° onto a custom-crafted, 7-foot-tall sculpture of the newly unveiled bottle suspended in the air above the raucous dance floor. The larger-than-life bottle created a piece of collaborative, interactive art, a centerpiece to the party that was viewable from anywhere and any party-goer could contribute to. And it looked dope.</p>")
                },
                "lexus-pandora": {
                    url: "lexus-pandora",
                    meta: "The Bosco and Lexus & Pandora collaborated to create an experience that made users feel like they were driving the new Lexus NX. See more at The Bosco!",
                    projectName: "LEXUS AND PANDORA",
                    backgroundImage: "https://s3.amazonaws.com/thebosco/angular-assets/images/case-studies/The-Bosco-Lexus-Pandora-Experience-HD.gif",
                    video: {
                        url: $sce.trustAsResourceUrl("https://player.vimeo.com/video/120616715?api=1&player_id=lexus-pandora-video"),
                        player: {}
                    },
                    location: "Los Angeles, CA",
                    goal: $sce.trustAsHtml("<p>Pandora and Lexus wanted to create an interactive experience that would help auto show attendees better envision themselves in a Lexus SUV. We built a unique photo experience that measured the 'aural frequency' of users seated in a brand new Lexus NX. Using a custom-built, pressure-sensitive steering wheel, users were matched with a Pandora radio station that corresponded with their personality types and played music that fit their style. Users could instantly share their aura image across all social platforms. After the auto show, we toured the installation around the country to engage Lexus enthusiasts with the brand.</p>")
                },
                olympus: {
                    url: "olympus",
                    meta: "The Bosco and Olympus collaborated to create a unique experience that would also allow them to showcase the Olympus OM-D E-M1. See more at The Bosco today!",
                    projectName: "OLYMPUS",
                    backgroundImage: "https://s3.amazonaws.com/thebosco/angular-assets/images/case-studies/The-Bosco-Olympus.gif",
                    video: {
                        url: $sce.trustAsResourceUrl("https://player.vimeo.com/video/162986275?api=1&player_id=olympus-video"),
                        player: {}
                    },
                    location: "Whistler, Canada",
                    goal: $sce.trustAsHtml("<p>We collaborated with Olympus on a 10-day installation at the World Ski and Snowboard Festival in Whistler, Canada.</p> <p>Olympusâ€™s goal was to create a one-of-kind interactive experience for festival-goers that would also allow the brand to showcase their newest DSLR camera, the Olympus OM-D E-M1.</p> <p>The Bosco took this great opportunity to create a video experience that allowed users to hop on a snowboard and venture through psychedelic motion backgrounds via green screen and a custom-built snowboard set. Users could then share their videos instantly on social channels.</p> <p>Over 1200 GIFs were taken, garnering 204,815 social media impressions and innovatively exposing Olympus's newest camera to both festival-goers and the world.</p>")
                },
                paintbox: {
                    url: "paintbox",
                    projectName: "PAINTBOX",
                    backgroundImage: "https://s3.amazonaws.com/thebosco/angular-assets/images/case-studies/paintbox.gif",
                    video: {
                        url: $sce.trustAsResourceUrl("https://player.vimeo.com/video/171116932??api=1&player_id=paintbox"),
                        player: {}
                    },
                    location: "SoHo, NYC",
                    goal: $sce.trustAsHtml("<p>When Paintbox opened its brick and mortar location in the SoHo neighborhood of New York City, they wanted to revolutionize the manicure experience and spread the word about their store. Using The Boscoâ€™s technology helped them do that.</p> <p>We installed a custom manicure photo booth built into a glass wall. After customers get their nails done, they show off their manicures by taking a studio style photo and instantly share their manicures on social networks, or with their friends.</p> <p>In the first 2 years alone over 15,000 photos have been uploaded to social media sites garnering millions of impressions and helping spread the word about the store, and bringing the manicure experience to the social media age.</p>")
                },
                "the-bosco-facial-recognition": {
                    url: "the-bosco-facial-recognition",
                    projectName: "PANDORA FACIAL RECOGNITION",
                    backgroundImage: "https://s3.amazonaws.com/thebosco/angular-assets/images/case-studies/pandora-face-tracking.gif",
                    video: {
                        url: $sce.trustAsResourceUrl("https://player.vimeo.com/video/170689933?api=1&player_id=pandora-face-tracking"),
                        player: {}
                    },
                    location: "Gulf Shores, Alabama",
                    goal: $sce.trustAsHtml("<p>Once again, The Bosco proudly introduces a new technology to the world of event photography.We collaborated with Pandora at the Hangout Music Festival, on the beautiful Gulf Coast of Alabama,to help festival-Â­goers interact with music in a new way, and deepen their relationship with Pandora.</p> <p>Users were randomly given a song to listen to. Using face-Â­tracking technology, we gauged the user's response to the music. Based on the user's expression, we could tell how the music was making them feel. We translated that data into a colorful visual representation: their Musical Aura.</p> <p>Participants watched in real Â­time as their innermost thoughts about music blossomed into colorful aura clouds onÂ­ screen. At the end of the experience, we recommended festival artists based their musical tastes. Users were able to instantly share their experience on social networks and received a physical print that also matched their aura.</p> <p>The result was over 700 unique, personalized, and shareable musical experiences, with an social media reach of over 106,000. Pandora was able to deepen their users' connection to music, and The Bosco was able to unleash a new technology upon the world.</p>")
                },
                INSTANTARTIST: {
                    url: "instantartist",
                    projectName: "BOBBY REDD & AGW GROUP: #INSTANTARTIST",
                    backgroundImage: "https://s3.amazonaws.com/thebosco/angular-assets/images/case-studies/instant-artist.gif",
                    video: {
                        url: $sce.trustAsResourceUrl("https://player.vimeo.com/video/168386047?api=1&player_id=instantartist"),
                        player: {}
                    },
                    location: "Brooklyn, NYC",
                    goal: $sce.trustAsHtml("<p>The Bosco wanted to recontextualize the Instagram experience by taking photos from small screens to the walls of an art gallery, igniting the conversation: when does an image become art? To do that The Bosco teamed up with Bobby Redd and AGW Group to create a user- generated art show that leveraged our #PRINT technology.</p> <p>Over a two week period we automatically printed all photos that were uploaded to Instagram using the hashtag: #INSTANTARTIST. Anyone who walked by, or for that matter heard of the show, could participate by uploading a photo using the hashtag. After two weeks of non-stop printing, every single photo was hung,  and we held an opening to display the work.</p> <p>In 14 days, 2,119 images were uploaded, printed and displayed, leading to over 643,000 social media impressions and a 93% increase in hashtag usage. It was also written about across multiple media outlets garnering 2.9 million media hits.</p>")
                },
                "animated-overlays": {
                    url: "animated-overlays",
                    meta: "The Bosco and Animated Overlays collaborated to create a brand new GIF experience that merges real life and design. See more at The Bosco today!",
                    projectName: "ANIMATED OVERLAYS",
                    backgroundImage: "https://s3.amazonaws.com/thebosco/angular-assets/images/case-studies/The-Bosco-Presents-Animated-Overlays-HD.gif",
                    video: {
                        url: $sce.trustAsResourceUrl("https://player.vimeo.com/video/104275526?api=1&player_id=animated-overlays-video"),
                        player: {}
                    },
                    location: "Worldwide",
                    goal: $sce.trustAsHtml("<p>We created another brand new GIF experience.</p> <p>Introducing Animated Overlays: an original animated graphic overlaid on top of a GIF, merging real life and design.</p>")
                }
            }, $scope.project = projects[$state.params.caseStudy], null != $scope.project.meta && ($rootScope.metaDescription = $scope.project.meta), otherProject1 = _.sample(_.filter(projects, function(o) {
                return !(o.url === $state.params.caseStudy)
            })), otherProject2 = _.sample(_.filter(projects, function(o) {
                return !(o.url === $state.params.caseStudy || o.url === otherProject1.url)
            })), $scope.otherProjects = [otherProject1, otherProject2], window.prerenderReady = !0
        }, $scope.init()
    }]), angular.module("webApp").controller("LookBookPostController", ["$rootScope", "$scope", "$state", "$stateParams", "$sce", "LookbookPostService", "resolvedLookbookPost", "$uibModalInstance", "$location", "$timeout", function($rootScope, $scope, $state, $stateParams, $sce, LookbookPostService, resolvedLookbookPost, $uibModalInstance, $location, $timeout) {
        return $scope.modalLink = $location.absUrl(), $scope.init = function() {
            return $scope.post = resolvedLookbookPost, $scope.post.image && ($scope.src = $scope.post.image.main.url), $scope.downloadSrc = $scope.src, $scope.currentSlide = 0, $scope.mainSlickId = "slider-preview-" + $scope.$id, $scope.navSlickId = "slider-thumbnails-" + $scope.$id, $scope.navSlickConfig = {
                enabled: !1,
                slidesToShow: 3,
                centerMode: !0,
                dots: !1,
                arrows: !1,
                infinite: !0,
                focusOnSelect: !0,
                centerPadding: "0px",
                asNavFor: "#" + $scope.mainSlickId
            }, $scope.mainSlickConfig = {
                enabled: !0,
                slidesToShow: 1,
                centerMode: !0,
                dots: !1,
                arrows: !1,
                infinite: !0,
                centerPadding: "0px",
                asNavFor: "#" + $scope.navSlickId,
                event: {
                    init: function(event, slick) {
                        var $mainCarousel;
                        if ($scope.navSlickConfig.enabled = !0, $mainCarousel = $("#" + $scope.mainSlickId), $mainCarousel.length > 0) return document.addEventListener("keydown", function(event) {
                            if (37 === event.keyCode && $mainCarousel.slick("slickPrev"), 39 === event.keyCode) return $mainCarousel.slick("slickNext")
                        }, !1)
                    },
                    beforeChange: function(slick, currentSlide, nextSlide) {
                        var activeSlide;
                        return activeSlide = currentSlide.$slides.filter(function(index, item) {
                            return "slick-slide slick-current slick-active slick-center" === item.className
                        }), $scope.downloadSrc = $(activeSlide).find("img").attr("src")
                    }
                },
                responsive: [{
                    breakpoint: 769,
                    settings: {
                        dots: !1,
                        arrows: !0,
                        centerPadding: "0px",
                        centerMode: !0,
                        infinite: !0,
                        slidesToShow: 1
                    }
                }]
            }, $scope.$on("modal.closing", function(event, reason, closed) {
                return $state.go("look-book")
            }), $scope.modalClose = function() {
                return $uibModalInstance.close()
            }, $scope.copyTooltipIsOpen = !1, $scope.triggerTooltip = function() {
                $scope.copyTooltipIsOpen = !0, $timeout(function() {
                    return $scope.copyTooltipIsOpen = !1
                }, 1500)
            }
        }, $scope.init()
    }]), angular.module("webApp").controller("LookBookController", ["$rootScope", "$scope", "$state", "$stateParams", "$sce", "$location", "LookbookPostService", "LookbookTagService", "resolvedLookbookPosts", "resolvedLookbookTags", "appliedTagFilters", function($rootScope, $scope, $state, $stateParams, $sce, $location, LookbookPostService, LookbookTagService, resolvedLookbookPosts, resolvedLookbookTags, appliedTagFilters) {
        var buildOptionalFilters, chunk, chunkPosts, getLookbookPosts;
        return chunk = function(_this) {
            return function(array, n) {
                return array.length ? [array.slice(0, n)].concat(chunk(array.slice(n), n)) : []
            }
        }(this), chunkPosts = function() {
            return $scope.chunkedPosts = chunk($scope.posts, 5), $scope.chunkedMobilePosts = chunk($scope.posts, 4)
        }, buildOptionalFilters = function() {
            var additionOneFilters, additionTwoFilters, j, k, len1, len2, post, ref, ref1, tag;
            for (additionOneFilters = [] || $scope.additionOneFilters, additionTwoFilters = [] || $scope.additionTwoFilters, ref = $scope.posts, j = 0, len1 = ref.length; j < len1; j++)
                for (post = ref[j], ref1 = post.tags, k = 0, len2 = ref1.length; k < len2; k++) tag = ref1[k], $stateParams.customization && tag !== $stateParams.customization && tag !== $stateParams.product && indexOf.call(additionOneFilters, tag) < 0 && additionOneFilters.push(tag), $stateParams.additionOne && tag !== $stateParams.customization && tag !== $stateParams.product && tag !== $stateParams.additionOne && (indexOf.call(additionOneFilters, tag) < 0 || indexOf.call(additionTwoFilters, tag) < 0) && additionTwoFilters.push(tag);
            if (additionOneFilters.length > 0 && ($scope.additionOneFilters = additionOneFilters), additionTwoFilters.length > 0) return $scope.additionTwoFilters = additionTwoFilters
        }, getLookbookPosts = function(params) {
            return null == params && (params = ""), "" === params && (params = {}), LookbookPostService.gettingLookbookPosts(params).then(function(results) {
                return results
            })
        }, $scope.shouldDisableNextPage = function() {
            return void 0 === $scope.posts || !$scope.posts.length > 0 || $scope.noPages
        }, $scope.nextPage = function() {
            var paramsObject, posts;
            if (!($scope.busy || $scope.noPages || !$scope.posts.length > 0)) return $scope.busy = !0, $scope.page += 1, paramsObject = {
                page: $scope.page
            }, paramsObject["tags[]"] = appliedTagFilters, posts = getLookbookPosts(paramsObject).then(function(results) {
                return results.length > 0 ? ($scope.posts = $scope.posts.concat(_.shuffle(results)), $scope.busy = !1, chunkPosts()) : $scope.noPages = !0
            })
        }, $scope.resetFilter = function() {
            return $state.go("look-book", {
                product: null,
                customization: null,
                additionOne: null,
                additionTwo: null
            }, {
                reload: !0
            })
        }, $scope.init = function() {
            var tags;
            return $scope.noResultsFound = !1, $scope.product = $stateParams.product, $scope.customization = $stateParams.customization, $scope.additionOne = $stateParams.additionOne, $scope.additionTwo = $stateParams.additionTwo, $scope.showResetFilter = appliedTagFilters.length > 0, $scope.posts = _.shuffle(resolvedLookbookPosts), !$scope.posts.length > 0 && ($scope.noResultsFound = !0), buildOptionalFilters(), chunkPosts(), tags = resolvedLookbookTags, $scope.productFilters = [], $scope.customizationFilters = [], tags.forEach(function(tag) {
                if ("products" === tag.type && $scope.productFilters.push(tag), "customizations" === tag.type) return $scope.customizationFilters.push(tag)
            }), $scope.page = 1, $scope.screenSize = window.screen.width
        }, $scope.init()
    }]), angular.module("webApp.cities", []).config(["$stateProvider", "$urlMatcherFactoryProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlMatcherFactoryProvider, $urlRouterProvider, $locationProvider) {
        return $urlMatcherFactoryProvider.strictMode(!1), $urlMatcherFactoryProvider.caseInsensitive(!0), $stateProvider.state("city", {
            url: "/city/{city}",
            templateUrl: "city.template.html",
            controller: "CityController",
            resolve: {
                $title: function($stateParams) {
                    switch (!1) {
                        case "brooklyn" !== $stateParams.city:
                            return "Photo Booth Rental in NYC and Brooklyn | The Bosco";
                        case "chicago" !== $stateParams.city:
                            return "Photo Booth Rental in Chicago | The Bosco";
                        case "los-angeles" === $stateParams.city, !0:
                            return "Photo Booth Rental in Los Angeles | The Bosco";
                        case "san-francisco" === $stateParams.city, !0:
                            return "Photo Booth Rental in San Francisco | The Bosco";
                        default:
                            return "Photo Booth Rental | The Bosco"
                    }
                }
            }
        })
    }]), angular.module("webApp").controller("CityController", ["$rootScope", "$scope", "$state", "$stateParams", function($rootScope, $scope, $state, $stateParams) {
        var toCityTitle;
        return toCityTitle = function(str) {
            return str = str.replace("-", " "), str.replace(/\w\S*/g, function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
            })
        }, $scope.updateState = function(city) {
            return $scope.cityName = city, $state.transitionTo("city", {
                city: city
            }, {
                location: !0,
                relative: $state.$current,
                notify: !1
            }).then(function() {
                return $scope.init(city)
            })
        }, $scope.init = function(city) {
            return $scope.cityName = city, $rootScope.metaDescription = "The Bosco's unique and state of the art photo booth experience is available in the " + toCityTitle($scope.cityName) + " area. Book a rental with The Bosco today!", window.prerenderReady = !0
        }, $scope.init($stateParams.city)
    }]), angular.module("webApp").directive("cityCarousel", ["$state", "$stateParams", function($state, $stateParams) {
        return {
            restrict: "E",
            controller: ["$scope", "$element", "$attrs", "$timeout", function($scope, $element, $attrs, $timeout) {
                var cityDictionary, updateCurrentAsset;
                return cityDictionary = {
                    brooklyn: 0,
                    "los-angeles": 1,
                    "san-francisco": 2,
                    chicago: 3,
                    0: "brooklyn",
                    1: "los-angeles",
                    2: "san-francisco",
                    3: "chicago"
                }, $scope.goTo = function(city) {
                    return $element.trigger("to.owl.carousel", cityDictionary[city]), $scope.updateState(city)
                }, updateCurrentAsset = function(evt) {
                    return $scope.updateState(cityDictionary[evt.page.index])
                }, this.initCarousel = function() {
                    return $timeout(function() {
                        $scope.slideIndex = cityDictionary[$stateParams.city], $element.owlCarousel({
                            center: !0,
                            items: 1,
                            loop: !0,
                            nav: !0,
                            navText: ['<img src="https://s3.amazonaws.com/thebosco/angular-assets/images/arrows/carousel-smaller-left-arrow.png" style="position: absolute; top: 40%; padding: 0 30px; transform: translateY(-50%); cursor: pointer; z-index: 3;">', '<img src="https://s3.amazonaws.com/thebosco/angular-assets/images/arrows/carousel-smaller-right-arrow.png" style="position: absolute; top: 40%; padding: 0 30px; transform: translateY(-50%); cursor: pointer; z-index: 3; right: 0;">'],
                            startPosition: $scope.slideIndex
                        }), $element.on("changed.owl.carousel", function(e) {
                            return updateCurrentAsset(e)
                        })
                    })
                }, this.initCarousel()
            }]
        }
    }]), angular.module("webApp").run(["$rootScope", "$state", "constants", "envService", "$cookies", function($rootScope, $state, constants, envService, $cookies) {
        var mixpanelDevelopment, mixpanelProduction, setVariation;
        return setVariation = function() {
            var currentVariation, variation;
            return currentVariation = $cookies.getObject("variation"), null == currentVariation || 1 === currentVariation ? (variation = Math.floor(2 * Math.random()), 1 === variation ? $rootScope.variation = variation + 1 : $rootScope.variation = variation, $cookies.putObject("variation", $rootScope.variation)) : $rootScope.variation = currentVariation
        }, setVariation(), mixpanelProduction = "8856383d8837ba5877a04f9c14b98fc8", mixpanelDevelopment = "f2bf27f1ed613509a14ea0426af1e5fb", "production" === envService.get() ? mixpanel.init(mixpanelProduction) : mixpanel.init(mixpanelDevelopment), "production" === envService.get() ? $rootScope.$baseUrl = "http://www.thebos.co" : $rootScope.$baseUrl = "https://staging.thebos.co", $rootScope.fbAsyncInit = function() {
            return FB.init({
                appId: "805819946215780",
                xfbml: !0,
                version: "v2.4"
            })
        }
    }]), angular.module("webApp").run(function($rootScope, $location, $state, $anchorScroll, GoogleAnalyticsService, AssetsManager) {
        return $rootScope.$on("$stateChangeStart", function(e, toState, toParams, fromState, fromParams) {
            var placeholder, prop;
            $rootScope.$currentURL = toState.url;
            for (prop in toParams) placeholder = new RegExp("{" + prop + "}", "g"), $rootScope.$currentURL = $rootScope.$currentURL.replace(placeholder, toParams[prop]);
            if ("photo" !== toState.name && "event" !== toState.name && AssetsManager.resetPool(), AssetsManager.cancelAllImages(), "photo" === toState.name && "photo" === fromState.name && null != $rootScope.priorLocation ? (e.preventDefault(), $state.go($rootScope.priorLocation[0], $rootScope.priorLocation[1])) : $rootScope.priorLocation = null, $rootScope.metaDescription = "", $rootScope.shareImage = "https://s3.amazonaws.com/thebosco/angular-assets/images/logo-square.jpg", $rootScope.contentType = "image/jpeg", $rootScope.eventShortTitle = "The Bosco", $rootScope.eventTitle = "The Bosco", $rootScope.contentWidth = 600, $rootScope.contentHeight = 525, null == $rootScope.originalRef && (null != $location.search().ref ? $rootScope.originalRef = $location.search().ref : null != document.referrer && "" !== document.referrer ? $rootScope.originalRef = document.referrer : $rootScope.originalRef = "Direct"), null != document.referrer && "" !== document.referrer) return $rootScope.priorPage = document.referrer
        }), $rootScope.$on("$stateChangeSuccess", function(e, toState, toParams, fromState, fromParams) {
            return "event" !== toState.name && $anchorScroll(), "photo" === toState.name && "photo" !== fromState.name && null != fromState.name && "" !== fromState.name && ($rootScope.priorLocation = [fromState.name, fromParams]), $rootScope.canonical = $location.url().match(/(\/p\/)/) ? "" : $location.url(), GoogleAnalyticsService.recordPageview($location.url()), $rootScope.$currentURL = $location.url(), $rootScope.fbAsyncInit(), mixpanel.track("page-view", {
                "page name": toState.name,
                source: fromParams.name || document.referrer,
                campaign: $rootScope.originalRef
            })
        })
    }), angular.module("webApp").config(["$compileProvider", "$provide", "$anchorScrollProvider", "envServiceProvider", function($compileProvider, $provide, $anchorScrollProvider, envServiceProvider) {
        return $anchorScrollProvider.disableAutoScrolling(), $provide.decorator("$state", function($delegate, $rootScope) {
            return $rootScope.$on("$stateChangeStart", function(event, state, params) {
                $delegate.next = state, $delegate.toParams = params
            }), $delegate
        }), envServiceProvider.config({
            domains: {
                local: ["localhost"],
                development: ["user-site-redesign.us-east-1.elasticbeanstalk.com", "bosco-user-site-staging.us-east-1.elasticbeanstalk.com", "staging.thebos.co"],
                production: ["thebosconews.com", "www.thebosconews.com", "ratscratch.com", "www.ratscratch.com", "thebos.co", "www.thebos.co", "thebosco.com", "www.thebosco.com", "thbs.co", "www.thbs.co", "the-bosco.com", "www.the-bosco.com", "theboscobooth.com", "www.theboscobooth.com", "thebosco.co.uk", "www.thebosco.co.uk", "theboscobooth.co.uk", "www.theboscobooth.co.uk"]
            },
            vars: {
                local: {
                    apiURL: "https://api-local.thebos.co"
                },
                development: {
                    apiURL: "https://api-staging.thebos.co"
                },
                production: {
                    apiURL: "https://api.thebos.co"
                }
            }
        }), envServiceProvider.check(), $compileProvider.debugInfoEnabled(!1)
    }]), angular.module("webApp").controller("EventController", ["$scope", "$state", "$sce", "$q", "$timeout", "$location", "$anchorScroll", "resolvedEvent", "AssetsManager", "eventAssets", function($scope, $state, $sce, $q, $timeout, $location, $anchorScroll, resolvedEvent, AssetsManager, eventAssets) {
        var numOfImages;
        return $scope.busy = !1, $scope.singleEvent = resolvedEvent.event, $scope.placeholder = AssetsManager.getPlaceholderImage(), numOfImages = resolvedEvent.isMobile ? 4 : 8, $scope.nextPage = function() {
            var batch, promises;
            if (!$scope.busy && resolvedEvent.event.assets) return $scope.busy = !0, promises = [], batch = _.take(resolvedEvent.event.assets, numOfImages), AssetsManager.loadImages(batch, $scope.singleEvent.id, "urlThumbSmall", !0).then(function(assets) {
                return resolvedEvent.event.assets = _.drop(resolvedEvent.event.assets, numOfImages), $scope.busy = !1
            })
        }, $scope.loadImage = function(image) {
            return AssetsManager.loadImage(image, "urlThumbSmall").then(function(image) {
                return image.urlThumbSmall
            })
        }, $scope.init = function() {
            var ref;
            return resolvedEvent.event.title.length > 50 && resolvedEvent.multiday && ($scope.longTitle = !0), $scope.orientation = resolvedEvent.event.orientation, null != resolvedEvent.event.post_id && resolvedEvent.event.post_id && resolvedEvent.event.post && ($scope.eventPost = $sce.trustAsHtml((null != (ref = resolvedEvent.event.post) ? ref.content : void 0).replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, ""))), resolvedEvent.timelapse && ($scope.timelapse = $sce.trustAsHtml(resolvedEvent.timelapse)), angular.isArray(eventAssets) ? $scope.eventAssets = eventAssets : $scope.eventAssets = AssetsManager.retrieveGalleryImages(), resolvedEvent.multiday ? ($scope.multidayTitle = !1, $scope.multiDay = !1, $scope.multiDayGallery = !0) : $scope.multiDayGallery = !1, resolvedEvent.multiDayView ? ($scope.multidayTitle = !0, $scope.eventDays = resolvedEvent.days, $scope.multiDayEvent = !0) : $scope.multidayTitle = !1, $timeout(function() {
                return $anchorScroll($location.$$hash)
            }), window.prerenderReady = !0
        }, angular.element(document).ready($scope.init)
    }]), angular.module("webApp").controller("MultiDayEventController", ["$rootScope", "$scope", "$state", "$stateParams", "$sce", "resolvedEvent", function($rootScope, $scope, $state, $stateParams, $sce, resolvedEvent) {
        return $scope.nextPage = function() {
            if (!$scope.busy && resolvedEvent.event.assets.length) return $scope.busy = !0, _.each(_.take(resolvedEvent.event.assets, 20), function(asset) {
                return $scope.eventAssets.push(asset)
            }), resolvedEvent.event.assets = _.drop(resolvedEvent.event.assets, 20), $scope.busy = !1
        }, $scope.init = function() {
            return $scope.singleEvent = resolvedEvent.event, $rootScope.canonical = "/" + $scope.singleEvent.slug, null != resolvedEvent.event.post_id && resolvedEvent.event.post_id && ($scope.eventPost = $sce.trustAsHtml(resolvedEvent.event.post.content.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, ""))), $scope.singleEvent.date = moment(resolvedEvent.event.assets[0].created).format("MMMM D, YYYY"), $scope.eventAssets = _.take(resolvedEvent.event.assets, 20), resolvedEvent.event.assets = _.drop(resolvedEvent.event.assets, 20), $scope.multidayTitle = !1, $scope.multiDay = !1, $scope.multiDayGallery = !0, window.prerenderReady = !0
        }, $scope.init()
    }]), angular.module("webApp.event", []).config(["$urlMatcherFactoryProvider", "$stateProvider", function($urlMatcherFactoryProvider, $stateProvider) {
        return $urlMatcherFactoryProvider.strictMode(!1), $urlMatcherFactoryProvider.caseInsensitive(!0), $stateProvider.state("event", {
            url: "/e/{eventSlug}",
            templateUrl: "event.template.html",
            controller: "EventController",
            resolve: {
                resolvedEvent: function($state, $stateParams, $window, AssetsManager, EventService) {
                    var resolvedEvent;
                    return resolvedEvent = AssetsManager.retrieveEventResponse($stateParams.eventSlug), null == resolvedEvent || resolvedEvent.multiday ? EventService.gettingEvent($stateParams.eventSlug).then(function(resolvedEvent) {
                        return 404 === resolvedEvent.status_code && $state.go("photos"), resolvedEvent.event.private_gallery !== !0 && 1 !== resolvedEvent.event.private_gallery || $state.go("photos"), resolvedEvent.multiday && (resolvedEvent.multiDayView = !0), $window.innerWidth < 768 && (resolvedEvent.isMobile = !0), AssetsManager.storeEventResponse(resolvedEvent), resolvedEvent
                    }) : resolvedEvent
                },
                openGraph: function($rootScope, resolvedEvent) {
                    if ($rootScope.eventTitle = resolvedEvent.event.title, $rootScope.eventShortTitle = resolvedEvent.event.title_short, resolvedEvent.event.cover_url) return $rootScope.shareImage = resolvedEvent.event.cover_url
                },
                eventAssets: function(AssetsManager, resolvedEvent) {
                    var eventId, initialAssets, numOfImages, ref;
                    return numOfImages = resolvedEvent.isMobile ? 4 : 8, (null != (ref = resolvedEvent.event.assets) ? ref.length : void 0) > 0 ? (initialAssets = _.take(resolvedEvent.event.assets, 4), eventId = resolvedEvent.event.id, AssetsManager.loadImages(initialAssets, eventId, "urlThumbSmall").then(function(assets) {
                        return _.drop(resolvedEvent.event.assets, 4), assets
                    })) : null
                },
                $title: function(resolvedEvent, $state) {
                    return resolvedEvent.event.title + " | The Bosco | New York City photo booth and video booth rentals"
                }
            }
        }).state("multiday-event", {
            url: "/e/{eventSlug}/{eventDay}",
            templateUrl: "event.template.html",
            controller: "EventController",
            resolve: {
                resolvedEvent: function($state, EventService, AssetsManager, $stateParams) {
                    return EventService.gettingEvent($stateParams.eventSlug, $stateParams.eventDay).then(function(resolvedEvent) {
                        return 404 === resolvedEvent.status_code && $state.go("photos"), resolvedEvent.event.private_gallery !== !0 && 1 !== resolvedEvent.event.private_gallery ? (resolvedEvent.multiDayView = !1, AssetsManager.storeEventResponse(resolvedEvent), resolvedEvent) : ($state.go("photos"), resolvedEvent)
                    })
                },
                openGraph: function($rootScope, resolvedEvent) {
                    return $rootScope.eventTitle = resolvedEvent.event.title, $rootScope.eventShortTitle = resolvedEvent.event.title_short, resolvedEvent.event.cover_url && ($rootScope.shareImage = resolvedEvent.event.cover_url), resolvedEvent
                },
                eventAssets: function(AssetsManager, resolvedEvent) {
                    var eventId, initialAssets, ref;
                    return (null != (ref = resolvedEvent.event.assets) ? ref.length : void 0) > 0 ? (initialAssets = _.take(resolvedEvent.event.assets, 8), eventId = resolvedEvent.event.id, AssetsManager.loadImages(initialAssets, eventId, "urlThumbSmall").then(function(assets) {
                        return _.drop(resolvedEvent.event.assets, 8), assets
                    })) : null
                },
                $title: function(resolvedEvent, $state, $stateParams) {
                    return resolvedEvent.event.title + " | The Bosco | New York City photo booth and video booth rentals"
                }
            }
        }).state("private-gallery", {
            url: "/private-gallery",
            templateUrl: "private-gallery.template.html",
            controller: function() {
                return window.prerenderReady = !0
            },
            resolve: {
                $title: function() {
                    return "Errors | The Bosco | New York City photo booth and video booth rentals"
                }
            }
        })
    }]), angular.module("webApp").controller("EventsController", ["$scope", "$rootScope", "$timeout", "$state", "AssetService", "EventService", "EventSearchService", "resolvedEvents", function($scope, $rootScope, $timeout, $state, AssetService, EventService, EventSearchService, resolvedEvents) {
        var chunk;
        return $scope.page = 2, $scope.busy = !1, $scope.scroll = !1, $scope.events = [], chunk = function(array, chunkSize) {
            return [].concat.apply([], array.map(function(elem, i) {
                return i % chunkSize ? [] : [array.slice(i, i + chunkSize)]
            }))
        }, $scope.init = function() {
            return $rootScope.metaDescription = "The Bosco's GIF photos are taken at premier brand events showcasing the company's ability to capture unique photo experiences. Visit The Bosco today!", $scope.events = resolvedEvents, window.prerenderReady = !0
        }, $scope.moreEvents = function() {
            return $scope.scroll = !0, $scope.nextPage()
        }, $scope.nextPage = function() {
            if (!$scope.busy && $scope.scroll !== !1) return $scope.busy = !0, EventService.gettingEvents({
                page: $scope.page
            }).then(function(events) {
                return _.each(events, function(singleEvent) {
                    return $scope.events.push(singleEvent)
                }), $scope.busy = !1, $scope.page = $scope.page + 1
            })
        }, $scope.searchEvents = function(searchTerm) {
            return $state.go("search", {
                term: searchTerm
            })
        }, $scope.init()
    }]), angular.module("webApp.events", []).config(["$urlMatcherFactoryProvider", "$stateProvider", function($urlMatcherFactoryProvider, $stateProvider) {
        return $urlMatcherFactoryProvider.strictMode(!1), $urlMatcherFactoryProvider.caseInsensitive(!0), $stateProvider.state("photos", {
            url: "/photos",
            templateUrl: "events.template.html",
            controller: "EventsController",
            resolve: {
                resolvedEvents: function(EventService) {
                    return EventService.gettingEvents()
                },
                $title: function() {
                    return "See Your Event's GIF Photos | The Bosco"
                }
            }
        }).state("search", {
            url: "/search?term",
            templateUrl: "search.template.html",
            controller: "SearchController",
            resolve: {
                resolvedEvents: function(EventSearchService, $stateParams) {
                    return EventSearchService.searchEvents($stateParams.term)
                },
                $title: function() {
                    return "See Your Event's GIF Photos | The Bosco"
                }
            }
        })
    }]), angular.module("webApp").controller("SearchController", ["$scope", "$state", "$stateParams", "resolvedEvents", function($scope, $state, $stateParams, resolvedEvents) {
        return $scope.init = function() {
            return null != $stateParams.term ? $scope.searchTerm = $stateParams.term : $scope.searchTerm = "SEARCH", $scope.searching = !1, $scope.events = resolvedEvents, window.prerenderReady = !0
        }, $scope.searchEvents = function(searchTerm) {
            return $scope.searching = !0, 0 === searchTerm.length && $state.transitionTo("photos"), $state.transitionTo("search", {
                term: searchTerm
            })
        }, $scope.init()
    }]), angular.module("webApp").controller("GetTheBoscoController", ["$scope", "$rootScope", "$state", "$http", "$timeout", "InquiryService", "$window", "$parse", "MixpanelService", "envService", function($scope, $rootScope, $state, $http, $timeout, InquiryService, $window, $parse, MixpanelService, envService) {
        var environment, trackVariation;
        return environment = envService.get(), trackVariation = {
            variation: 0,
            campaign: $rootScope.originalRef
        }, MixpanelService.getTheBoscoTrackVariation(trackVariation), $scope.today = function() {
            return $scope.dt = new Date
        }, $scope.referenceType = [{
            option: "YES"
        }, {
            option: "NOT YET"
        }, {
            option: "NO, BUT I'VE USED THE BOSCO"
        }], $scope.type = [{
            option: "BRAND OR AGENCY",
            status: !0
        }, {
            option: "NON PROFIT",
            status: !0
        }, {
            option: "NOT AN ORGANIZATION",
            status: !1
        }, {
            option: "WEDDING",
            status: !1
        }], $scope.locationType = [{
            option: "NEW YORK"
        }, {
            option: "LOS ANGELES"
        }, {
            option: "SAN FRANCISCO"
        }, {
            option: "CHICAGO"
        }, {
            option: "OTHER"
        }], $scope.dateType = [{
            option: "SINGLE DAY"
        }, {
            option: "MULTI DAY"
        }, {
            option: "TOUR"
        }, {
            option: "OTHER"
        }], $scope.hasDateType = [{
            option: "I HAVE A DATE ALREADY",
            active: !0
        }, {
            option: "NO DATE DETERMINED YET",
            active: !1
        }], $scope.setActive = function(item, list) {
            return list.some(function(item) {
                if (item.active) return item.active = !1
            }), item.active = !0
        }, $scope.setLocationType = function(item, list) {
            return list.some(function(item) {
                if (item.active) return item.active = !1
            }), item.active = !0, $scope.location(item.option, item.status)
        }, $scope.setOrganization = function(item, list) {
            return list.some(function(item) {
                if (item.active) return item.active = !1
            }), item.active = !0, $scope.organization(item.option, item.status)
        }, $scope.setReference = function(item, list) {
            return list.some(function(item) {
                if (item.active) return item.active = !1
            }), item.active = !0, $scope.reference(item.option)
        }, $scope.setDateToggle = function(item, list) {
            return list.some(function(item) {
                if (item.active) return item.active = !1
            }), item.active = !0, $scope.date(item.option)
        }, $scope.hasDateToggle = function(item, list) {
            return list.some(function(item) {
                if (item.active) return item.active = !1
            }), item.active = !0, $scope.hasDate(item.option)
        }, $scope.inquiry = {}, $scope.inquiry.organizationPlaceholder = "ORGANIZATION", $scope.inquiry.emailToggle = !0, $scope.noOrganizationToggle = !1, $scope.displayOrganizationToggle = !1, $scope.organization = function(organization, isOrganization) {
            switch (organization) {
                case "BRAND OR AGENCY":
                    $scope.noOrganizationToggle === !0 && ($scope.inquiry.organization = ""), $scope.displayOrganizationToggle = !0, $scope.inquiry.organizationPlaceholder = "WHICH BRAND OR AGENCY?";
                    break;
                case "WEDDING":
                    $scope.inquiry.organization = "Wedding", $scope.displayOrganizationToggle = !1, $scope.inquiry.organizationPlaceholder = "WEDDING";
                    break;
                case "NOT AN ORGANIZATION":
                    $scope.inquiry.organization = "Not an Organization", $scope.displayOrganizationToggle = !1, $scope.inquiry.organizationPlaceholder = "NOT AN ORGANIZATION";
                    break;
                case "NON PROFIT":
                    $scope.inquiry.organization = "", $scope.displayOrganizationToggle = !0, $scope.inquiry.organizationPlaceholder = "WHICH NON-PROFIT?"
            }
            return $scope.noOrganizationToggle = !isOrganization
        }, $scope.date = function(value) {
            return "SINGLE DAY" === value && ($scope.today(), $scope.dateTypeToggle = !0, $scope.locationToggle = !0, $scope.dateTypeLabel = "WHEN IS THIS PROJECT?"), "MULTI DAY" === value && ($scope.today(), $scope.dateTypeToggle = !0, $scope.locationToggle = !0, $scope.dateTypeLabel = "WHEN DOES THIS PROJECT START?"), "TOUR" === value && ($scope.today(), $scope.dateTypeToggle = !0, $scope.locationToggle = !1, $scope.dateTypeLabel = "WHEN DOES THIS TOUR START?"), "OTHER" === value ? ($scope.locationToggle = !1, $scope.dateTypeToggle = !1, $scope.noDateToggle = !1) : $scope.hasDate($scope.inquiry.hasDateType)
        }, $scope.hasDate = function(value) {
            return "NO DATE DETERMINED YET" === value ? ($scope.dt = "null", $scope.noDateToggle = !1) : ($scope.noDateToggle = !0, $timeout(function() {
                return $scope.today()
            }))
        }, $scope.reference = function(value) {
            return "NO, BUT I'VE USED THE BOSCO" === value ? $scope.pastEventReferenceToggle = !0 : $scope.pastEventReferenceToggle = !1
        }, $scope.location = function(value) {
            return "OTHER" === value ? $scope.otherLocationToggle = !0 : $scope.otherLocationToggle = !1
        }, $scope.submitForm = function(data, origin) {
            var inquiry, toTitleCase;
            return toTitleCase = function(str) {
                return str.replace(/\w\S*/g, function(txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
                })
            }, inquiry = _.pick(data, ["name", "email", "emailToggle", "phone", "organization", "type", "dateType", "locationType", "notes"]), "original" === origin ? inquiry.submission_type = "Original Get The Bosco" : "new-form" === origin ? inquiry.submission_type = "New Get The Bosco (complete)" : inquiry.submission_type = "New Get The Bosco (incomplete)", "GETTING MARRIED" === inquiry.type ? (inquiry.type = "WEDDING", inquiry.organization = "Wedding") : "A NON-PROFIT" === inquiry.type ? inquiry.type = "NON PROFIT" : "A BRAND OR AGENCY" === inquiry.type ? "Brand Or Agency" === inquiry.type : "NOT AN ORGANIZATION" === inquiry.type && "Not an Organization" === inquiry.organization, inquiry.campaign = $rootScope.originalRef, inquiry.date = moment(new Date($scope.dt)).format("YYYY-MM-DD"), "Invalid date" !== inquiry.date && "OTHER" !== inquiry.dateType && null != inquiry.dateType || (inquiry.date = null), $scope.pastEventReferenceToggle === !0 ? inquiry.hear_about_us = "Event - " + ($scope.inquiry.pastEvent || "") : null != $scope.inquiry.pastEventToggle && (inquiry.hear_about_us = toTitleCase($scope.inquiry.pastEventToggle)), "OTHER" === inquiry.locationType ? inquiry.location = $scope.inquiry.otherLocation : null != $scope.inquiry.locationType && (inquiry.location = toTitleCase($scope.inquiry.locationType)), null != inquiry.type && (inquiry.type = toTitleCase(inquiry.type)), null != inquiry.dateType && (inquiry.dateType = toTitleCase(inquiry.dateType)), inquiry.variation = 0, MixpanelService.getTheBoscoSubmission(inquiry), InquiryService.submitInquiry(inquiry).then(function() {
                return "production" === environment && null != $window.google_trackConversion && $window.google_trackConversion({
                    google_conversion_id: 938860800,
                    google_conversion_language: "en",
                    google_conversion_format: "3",
                    google_conversion_color: "ffffff",
                    google_conversion_label: "YmoNCPSDxWUQgMLXvwM",
                    google_remarketing_only: !1
                }), "original" === origin ? $state.go("inquiry-thanks") : "new-form" === origin ? $state.go("inquiry-thank-you") : void 0
            })
        }, $scope.init = function() {
            return $scope.date(!1), $scope.dateTypeToggle = !1, $scope.noDateToggle = !1, $scope.locationToggle = !0, window.prerenderReady = !0
        }, $scope.init()
    }]), angular.module("webApp").controller("InquiryThanksController", ["$scope", "$state", "$interval", "$window", "MixpanelService", function($scope, $state, $interval, $window, MixpanelService) {
        return MixpanelService.getTheBoscoComplete(), $scope.init = function() {
            return $scope.redirectTiming = 7, $scope.startCountdown = $interval(function() {
                if ($scope.redirectTiming = $scope.redirectTiming - 1, $scope.redirectTiming <= 0) {
                    if ($interval.cancel($scope.startCountdown), "inquiry-thank-you" === $state.current.name) return $state.go("case-studies");
                    if ("inquiry-thanks" === $state.current.name) return $state.go("photos")
                }
            }, 1e3), window.prerenderReady = !0
        }, $scope.init()
    }]), angular.module("webApp").controller("NewGetTheBoscoController", ["$scope", "$rootScope", "$state", "$http", "$timeout", "$filter", "InquiryService", "$window", "$parse", "MixpanelService", "envService", function($scope, $rootScope, $state, $http, $timeout, $filter, InquiryService, $window, $parse, MixpanelService, envService) {
        var environment, trackVariation;
        return environment = envService.get(), trackVariation = {
            variation: 2,
            campaign: $rootScope.originalRef
        }, MixpanelService.getTheBoscoTrackVariation(trackVariation), $scope.progress = function(valid) {
            return valid ? ($scope.secondForm = !0, $scope.submitAttempt = !1) : $scope.submitAttempt = !0
        }, $scope.organizations = ["A BRAND OR AGENCY", "A NON-PROFIT", "GETTING MARRIED", "OTHER"], $scope.dateTypes = ["A SINGLE DAY EVENT", "A MULTI-DAY EVENT", "A TOUR", "NOT AN EVENT / OTHER"], $scope.mobileDateTypes = ["SINGLE DAY EVENT", "MULTI-DAY EVENT", "A TOUR", "WEDDING", "OTHER"], $scope.locations = ["NEW YORK", "LOS ANGELES", "SAN FRANCISCO", "CHICAGO", "LONDON", "OTHER"], $scope.showNext = function(nextField) {
            var model;
            return model = $parse(nextField), model.assign($scope, !0)
        }, $scope.organizationSelect = function(organization) {
            return "A BRAND OR AGENCY" === organization ? ($scope.inquiry.organization = null, $scope.brand_selected = !0, $scope.non_profit_selected = !1, $scope.show_name = !1) : "A NON-PROFIT" === organization ? ($scope.inquiry.organization = null, $scope.brand_selected = !1, $scope.show_name = !1, $scope.non_profit_selected = !0) : "GETTING MARRIED" === organization || "NOT AN ORGANIZATION" === organization ? ($scope.inquiry.organization = null, $scope.brand_selected = !1, $scope.non_profit_selected = !1, $scope.show_event_type = !1, $scope.show_name = !0) : ($scope.inquiry.organization = null, $scope.brand_selected = !1, $scope.non_profit_selected = !1, $scope.show_event_type = !0, $scope.show_name = !1)
        }, $scope.gtbSelect = function(inputName) {
            var show_name_forever;
            if ("dateType" === inputName) return show_name_forever = !0
        }, $scope.locationInput = function(location) {
            return "OTHER" === location ? $scope.otherLocationInput = !0 : $scope.anything_else_field = !0
        }, $scope.today = function() {
            return $scope.dt = new Date
        }, $scope.referenceType = [{
            option: "YES"
        }, {
            option: "NOT YET"
        }, {
            option: "NO, BUT I'VE USED THE BOSCO"
        }], $scope.type = [{
            option: "BRAND OR AGENCY",
            status: !0
        }, {
            option: "NON PROFIT",
            status: !0
        }, {
            option: "NOT AN ORGANIZATION",
            status: !1
        }, {
            option: "WEDDING",
            status: !1
        }], $scope.locationType = [{
            option: "NEW YORK"
        }, {
            option: "LOS ANGELES"
        }, {
            option: "SAN FRANCISCO"
        }, {
            option: "CHICAGO"
        }, {
            option: "OTHER"
        }], $scope.dateType = [{
            option: "SINGLE DAY"
        }, {
            option: "MULTI DAY"
        }, {
            option: "TOUR"
        }, {
            option: "OTHER"
        }], $scope.hasDateType = [{
            option: "I HAVE A DATE ALREADY",
            active: !0
        }, {
            option: "NO DATE DETERMINED YET",
            active: !1
        }], $scope.setActive = function(item, list) {
            return list.some(function(item) {
                if (item.active) return item.active = !1
            }), item.active = !0
        }, $scope.setLocationType = function(item, list) {
            return list.some(function(item) {
                if (item.active) return item.active = !1
            }), item.active = !0, $scope.location(item.option, item.status)
        }, $scope.setOrganization = function(item, list) {
            return list.some(function(item) {
                if (item.active) return item.active = !1
            }), item.active = !0, $scope.organization(item.option, item.status)
        }, $scope.setReference = function(item, list) {
            return list.some(function(item) {
                if (item.active) return item.active = !1
            }), item.active = !0, $scope.reference(item.option)
        }, $scope.setDateToggle = function(item, list) {
            return list.some(function(item) {
                if (item.active) return item.active = !1
            }), item.active = !0, $scope.date(item.option)
        }, $scope.hasDateToggle = function(item, list) {
            return list.some(function(item) {
                if (item.active) return item.active = !1
            }), item.active = !0, $scope.hasDate(item.option)
        }, $scope.inquiry = {}, $scope.mobileInquiry = {}, $scope.inquiry.organizationPlaceholder = "ORGANIZATION", $scope.inquiry.emailToggle = !0, $scope.mobileInquiry.emailToggle = !0, $scope.noOrganizationToggle = !1, $scope.displayOrganizationToggle = !1, $scope.organization = function(organization, isOrganization) {
            switch (organization) {
                case "BRAND OR AGENCY":
                    $scope.noOrganizationToggle === !0 && ($scope.inquiry.organization = ""), $scope.displayOrganizationToggle = !0, $scope.inquiry.organizationPlaceholder = "WHICH BRAND OR AGENCY?";
                    break;
                case "WEDDING":
                    $scope.inquiry.organization = "Wedding", $scope.displayOrganizationToggle = !1, $scope.inquiry.organizationPlaceholder = "WEDDING";
                    break;
                case "NOT AN ORGANIZATION":
                    $scope.inquiry.organization = "Not an Organization", $scope.displayOrganizationToggle = !1, $scope.inquiry.organizationPlaceholder = "NOT AN ORGANIZATION";
                    break;
                case "NON PROFIT":
                    $scope.inquiry.organization = "", $scope.displayOrganizationToggle = !0, $scope.inquiry.organizationPlaceholder = "WHICH NON-PROFIT?"
            }
            return $scope.noOrganizationToggle = !isOrganization
        }, $scope.date = function(value) {
            return "SINGLE DAY" === value && ($scope.today(), $scope.dateTypeToggle = !0, $scope.locationToggle = !0, $scope.dateTypeLabel = "WHEN IS THIS PROJECT?"), "MULTI DAY" === value && ($scope.today(), $scope.dateTypeToggle = !0, $scope.locationToggle = !0, $scope.dateTypeLabel = "WHEN DOES THIS PROJECT START?"), "TOUR" === value && ($scope.today(), $scope.dateTypeToggle = !0, $scope.locationToggle = !1, $scope.dateTypeLabel = "WHEN DOES THIS TOUR START?"), "OTHER" === value ? ($scope.locationToggle = !1, $scope.dateTypeToggle = !1, $scope.noDateToggle = !1) : $scope.hasDate($scope.inquiry.hasDateType)
        }, $scope.hasDate = function(value) {
            return "NO DATE DETERMINED YET" === value ? ($scope.dt = "null", $scope.noDateToggle = !1) : ($scope.noDateToggle = !0, $timeout(function() {
                return $scope.today()
            }))
        }, $scope.reference = function(value) {
            return "NO, BUT I'VE USED THE BOSCO" === value ? $scope.pastEventReferenceToggle = !0 : $scope.pastEventReferenceToggle = !1
        }, $scope.location = function(value) {
            return "OTHER" === value ? $scope.otherLocationToggle = !0 : $scope.otherLocationToggle = !1
        }, $scope.submitForm = function(data, origin, invalid) {
            var inquiry, toTitleCase;
            return invalid || $scope.loading ? $scope.submitAttempt = !0 : ($scope.loading = !0, toTitleCase = function(str) {
                    return str.replace(/\w\S*/g, function(txt) {
                        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
                    })
                }, inquiry = _.pick(data, ["name", "email", "emailToggle", "phone", "organization", "type", "dateType", "locationType", "notes", "date"]), "original" === origin ? inquiry.submission_type = "Original Get The Bosco" : "new-form" === origin ? inquiry.submission_type = "New Get The Bosco (complete)" : inquiry.submission_type = "New Get The Bosco (incomplete)", "GETTING MARRIED" === inquiry.type ? (inquiry.type = "WEDDING", inquiry.organization = "Wedding") : "A NON-PROFIT" === inquiry.type ? inquiry.type = "NON PROFIT" : "A BRAND OR AGENCY" === inquiry.type ? "Brand Or Agency" === inquiry.type : "NOT AN ORGANIZATION" === inquiry.type ? "Not an Organization" === inquiry.organization : "OTHER" === inquiry.type && "Other" === inquiry.organization,
                inquiry.campaign = $rootScope.originalRef, inquiry.priorPage = $rootScope.priorPage, null != inquiry.date && (inquiry.date = $filter("date")(inquiry.date, "yyyy-MM-dd")), $scope.pastEventReferenceToggle === !0 ? inquiry.hear_about_us = "Event - " + ($scope.inquiry.pastEvent || "") : null != $scope.inquiry.pastEventToggle && (inquiry.hear_about_us = toTitleCase($scope.inquiry.pastEventToggle)), "OTHER" === inquiry.locationType ? inquiry.location = $scope.inquiry.otherLocation : null != $scope.inquiry.locationType && (inquiry.location = toTitleCase($scope.inquiry.locationType)), null != inquiry.type && (inquiry.type = toTitleCase(inquiry.type)), null != inquiry.dateType && (inquiry.dateType = toTitleCase(inquiry.dateType)), inquiry.variation = $rootScope.variation, MixpanelService.getTheBoscoSubmission(inquiry), InquiryService.submitInquiry(inquiry).then(function() {
                    return $scope.loading = !1, $scope.inquiry = null, "production" === environment && null != $window.google_trackConversion && $window.google_trackConversion({
                        google_conversion_id: 938860800,
                        google_conversion_language: "en",
                        google_conversion_format: "3",
                        google_conversion_color: "ffffff",
                        google_conversion_label: "YmoNCPSDxWUQgMLXvwM",
                        google_remarketing_only: !1
                    }), "original" === origin ? $state.go("inquiry-thanks") : "new-form" === origin ? $state.go("inquiry-thank-you") : void 0
                }))
        }, $scope.$on("$stateChangeStart", function(event, toState, toStateParams, fromState, fromStateParams) {
            if ("NewGetTheBoscoController" === fromState.controller && $scope.inquiry && $scope.inquiry.email && "inquiry-thanks" !== toState.name && "inquiry-thank-you" !== toState.name) return $scope.submitForm($scope.inquiry), $scope.inquiry = null
        }), angular.element($window).bind("beforeunload", function(event) {
            if ("NewGetTheBoscoController" === $state.current.controller && $scope.inquiry.email) return $scope.submitForm($scope.inquiry), angular.element($window).removeEventListener("beforeunload")
        }), $scope.dateTypeSelect = function(dateType) {
            return $scope.eventDateLabel = "Event Date", "A TOUR" === dateType ? $scope.eventDateLabel = "The tour starts on" : "A MULTI-DAY EVENT" === dateType ? $scope.eventDateLabel = "Your project starts on" : void 0
        }, $scope.dateTypeSelect(), $scope.clearOrganization = function(type) {
            return $scope.inquiry.organization = null
        }, $scope.init = function() {
            return $scope.date(!1), $scope.dateTypeToggle = !1, $scope.noDateToggle = !1, $scope.locationToggle = !0, window.prerenderReady = !0
        }, $scope.init()
    }]), angular.module("webApp").directive("gtbDateInput", function() {
        return {
            restrict: "EA",
            scope: {
                ngModel: "=",
                labelText: "=",
                placeholder: "=",
                skip: "=",
                skipFunction: "&"
            },
            link: function(scope) {
                return scope.skipInput = function() {
                    return scope.skipFunction()
                }, scope.close = function() {
                    if (scope.ngModel) return scope.closed = !scope.closed
                }
            },
            templateUrl: "gtb-date-input.template.html"
        }
    }), angular.module("webApp").directive("gtbInput", function($timeout) {
        return {
            restrict: "EA",
            scope: {
                ngModel: "=",
                labelText: "=",
                placeholder: "=",
                gtbNext: "=",
                skip: "=",
                type: "=",
                autoFocus: "=",
                skipFunction: "&"
            },
            link: function(scope) {
                var autoFocus;
                if (scope.skipInput = function() {
                        return scope.skipFunction()
                    }, !autoFocus) return autoFocus = !1
            },
            templateUrl: "gtb-input.template.html"
        }
    }), angular.module("webApp").directive("gtbSelect", function($timeout) {
        return {
            restrict: "EA",
            require: "^ngModel",
            scope: {
                color: "=",
                ngModel: "=",
                options: "=",
                gtbClass: "=",
                labelText: "=",
                subLabelText: "=",
                ngChange: "&",
                skip: "=",
                skipFunction: "&"
            },
            link: function(scope, element, attrs) {
                return scope.highlight = function() {}, scope.select = function(selection) {
                    return scope.ngModel = selection, $timeout(scope.ngChange, 0)
                }, scope.skipInput = function() {
                    return scope.skipFunction()
                }, scope.close = function() {
                    if (scope.ngModel) return scope.closed = !scope.closed
                }
            },
            templateUrl: "gtb-select.template.html"
        }
    }), angular.module("webApp").directive("hoshiDateInput", function($timeout) {
        return {
            restrict: "EA",
            require: "^ngModel",
            scope: {
                type: "@",
                name: "@",
                label: "@",
                previous: "=",
                submitAttempt: "=",
                ngMinlength: "=",
                ngMaxlength: "=",
                ngRequired: "=",
                ngPattern: "=",
                ngTrim: "=",
                color: "=",
                ngModel: "=",
                options: "=",
                ngChange: "&",
                skip: "=",
                skipFunction: "&"
            },
            link: function(scope, element, attrs) {
                return scope.highlight = function() {}, scope.select = function(selection) {
                    return scope.ngModel = selection, $timeout(scope.ngChange, 0)
                }, scope.skipInput = function() {
                    return scope.skipFunction()
                }, scope.closed = !0, scope.close = function() {
                    return scope.closed = !scope.closed
                }, scope.$watch("previous", function(newValue, oldValue) {
                    return scope.previous === !0 ? scope.closed = scope.previous : scope.previous === !1 ? scope.closed = scope.previous : null == scope.previous ? scope.closed = !0 : null != scope.previous ? scope.closed = !1 : void 0
                })
            },
            templateUrl: "hoshi-date-input.template.html"
        }
    }), angular.module("webApp").directive("hoshiInput", function($timeout) {
        return {
            restrict: "EA",
            require: "^ngModel",
            scope: {
                type: "@",
                name: "@",
                label: "@",
                modelOptions: "=?ngModelOptions",
                submitAttempt: "=",
                ngMinlength: "=",
                ngMaxlength: "=",
                ngRequired: "=",
                form: "=",
                ngPattern: "=",
                ngTrim: "=",
                color: "=",
                ngModel: "=",
                options: "=",
                ngChange: "&",
                skip: "=",
                skipFunction: "&"
            },
            link: function(scope, element, attrs) {},
            templateUrl: "hoshi-input.template.html"
        }
    }), angular.module("webApp").directive("hoshiSelect", function($timeout) {
        return {
            restrict: "EA",
            require: "^ngModel",
            scope: {
                type: "@",
                name: "@",
                label: "@",
                subLabel: "@",
                previous: "=",
                submitAttempt: "=",
                form: "=",
                ngMinlength: "=",
                ngMaxlength: "=",
                ngRequired: "=",
                ngPattern: "=",
                ngTrim: "=",
                color: "=",
                ngModel: "=",
                options: "=",
                ngChange: "&",
                skip: "=",
                skipFunction: "&"
            },
            link: function(scope, element, attrs) {
                return scope.highlight = function() {}, scope.select = function(selection) {
                    return scope.ngModel = selection, $timeout(scope.ngChange, 0)
                }, scope.skipInput = function() {
                    return scope.skipFunction()
                }, scope.close = function() {
                    return scope.closed = !scope.closed
                }, scope.$watch("previous", function(newValue, oldValue) {
                    return scope.previous === !0 ? scope.closed = scope.previous : scope.previous === !1 ? scope.closed = scope.previous : null == scope.previous ? scope.closed = !0 : null != scope.previous ? scope.closed = !1 : void 0
                })
            },
            templateUrl: "hoshi-select.template.html"
        }
    }), angular.module("webApp.get-the-bosco", []).config(["$urlMatcherFactoryProvider", "$stateProvider", function($urlMatcherFactoryProvider, $stateProvider) {
        return $urlMatcherFactoryProvider.strictMode(!1), $urlMatcherFactoryProvider.caseInsensitive(!0), $stateProvider.state("get-the-bosco", {
            url: "/get-the-bosco",
            templateUrl: "get-the-bosco-three.template.html",
            controller: "NewGetTheBoscoController",
            resolve: {
                $title: function() {
                    return "Get The Bosco | The Bosco | New York City photo booth and video booth rentals"
                }
            }
        }).state("subscribe", {
            url: "/subscribe",
            templateUrl: "get-the-bosco.template.html",
            controller: "GetTheBoscoController",
            resolve: {
                $title: function() {
                    return "Get The Bosco | The Bosco | New York City photo booth and video booth rentals"
                }
            }
        }).state("inquiry-thanks", {
            url: "/inquiry-thanks",
            templateUrl: "inquiry-thanks.template.html",
            controller: "InquiryThanksController",
            resolve: {
                $title: function() {
                    return "The Bosco | New York City photo booth and video booth rentals"
                }
            }
        }).state("inquiry-thank-you", {
            url: "/inquiry-thank-you",
            templateUrl: "new-inquiry-thanks.template.html",
            controller: "InquiryThanksController",
            resolve: {
                $title: function() {
                    return "The Bosco | New York City photo booth and video booth rentals"
                }
            }
        })
    }]), angular.module("webApp").directive("jobListing", ["$filter", function($filter) {
        return {
            restrict: "A",
            scope: {
                job: "="
            },
            templateUrl: "job-listing.template.html"
        }
    }]), angular.module("webApp").controller("JobsController", ["$scope", "$rootScope", "$timeout", "$state", "$location", "$sce", "resolvedJobs", function($scope, $rootScope, $timeout, $state, $location, $sce, resolvedJobs) {
        return $scope.init = function() {
            return $scope.jobs = resolvedJobs, $scope.$on("jobs-accordion:onReady", function() {
                return $scope.accordion.toggle($location.$$hash)
            }), $scope.whatIsTheBoscoVideo = {
                url: $sce.trustAsResourceUrl("https://player.vimeo.com/video/161245960?api=1&player_id=what-is-the-bosco-video"),
                player: {}
            }, window.prerenderReady = !0
        }, $scope.init()
    }]), angular.module("webApp.jobs", []).config(["$urlMatcherFactoryProvider", "$stateProvider", function($urlMatcherFactoryProvider, $stateProvider) {
        return $urlMatcherFactoryProvider.strictMode(!1), $urlMatcherFactoryProvider.caseInsensitive(!0), $stateProvider.state("jobs", {
            url: "/jobs",
            templateUrl: "jobs.template.html",
            controller: "JobsController",
            resolve: {
                resolvedJobs: function(JobService) {
                    return JobService.gettingJobsListings()
                },
                $title: function() {
                    return "Jobs | The Bosco | New York City photo booth and video booth rentals"
                }
            }
        })
    }]), angular.module("webApp").controller("DoSomethingController", ["$scope", "$timeout", "$sce", "AssetService", function($scope, $timeout, $sce, AssetService) {
        return AssetService.getAssetCount().then(function(response) {
            return $scope.asset_count = response
        }), $scope.moveTo = function(index) {
            return $scope.slideIndex = index, $.scrollify.move(index)
        }, $.scrollify({
            section: ".angular-section",
            sectionName: !1,
            easing: "easeOutExpo",
            scrollSpeed: 1100,
            offset: 0,
            scrollbars: !0,
            setHeights: !0,
            overflowScroll: !1,
            before: function(index, array) {
                if (3 !== index) return $timeout(function() {
                    return $scope.slideIndex = index
                })
            },
            afterResize: function() {
                return $.scrollify.move($.scrollify.current()[0].id)
            }
        }), $scope.init = function() {
            return $scope.slideIndex = 0
        }, $scope.$on("$stateChangeStart", function() {
            return $.scrollify.destroy()
        }), $scope.init()
    }]), angular.module("webApp.landing-page", ["ui.bootstrap"]).config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider) {
        return $stateProvider.state("landing-page", {
            url: "/landing-page/{page}",
            templateUrl: function($stateParams) {
                return $stateParams.page + ".template.html"
            },
            controllerProvider: function($stateParams) {
                return "" + $stateParams.page
            }
        }).state("do-something", {
            url: "/do-something",
            templateUrl: "do-something.template.html",
            controller: "DoSomethingController",
            resolve: {
                $title: function() {
                    return "DoSomething.org + The Bosco"
                }
            }
        })
    }]), angular.module("webApp").controller("year-in-review-2", ["$scope", function($scope) {
        return $scope.init = function() {
            return window.prerenderReady = !0
        }, $scope.init()
    }]), angular.module("webApp").controller("year-in-review", ["$scope", function($scope) {
        return $scope.init = function() {
            return window.prerenderReady = !0
        }, $scope.init()
    }]), angular.module("webApp").controller("MainController", ["$scope", "$rootScope", "$timeout", "$state", "AssetService", "EventService", "EventSearchService", "resolvedEvents", function($scope, $rootScope, $timeout, $state, AssetService, EventService, EventSearchService, resolvedEvents) {
        return $scope.moreEventsText = "MORE EVENTS", $scope.moreEvents = function() {
            return resolvedEvents.length ? (_.each(_.take(resolvedEvents, 4), function(asset) {
                return $scope.events.push(asset)
            }), resolvedEvents = _.drop(resolvedEvents, 4), resolvedEvents.length ? void 0 : $scope.moreEventsText = "GO TO PHOTOS") : $state.go("photos")
        }, $scope.init = function() {
            return $scope.events = _.take(resolvedEvents, 4), resolvedEvents = _.drop(resolvedEvents, 4), $rootScope.metaDescription = "The Bosco is the industry leader of high tech luxury social media GIF and video photo booths. Book a rental with The Bosco today!", window.prerenderReady = !0
        }, $scope.init()
    }]), angular.module("webApp.main", []).config(["$urlMatcherFactoryProvider", "$stateProvider", function($urlMatcherFactoryProvider, $stateProvider) {
        return $urlMatcherFactoryProvider.strictMode(!1), $urlMatcherFactoryProvider.caseInsensitive(!0), $stateProvider.state("main", {
            url: "/",
            templateUrl: "main.template.html",
            controller: "MainController",
            resolve: {
                resolvedEvents: function(EventService) {
                    return EventService.gettingEvents({
                        starred: 1
                    })
                },
                $title: function() {
                    return "Luxury and High Tech Social Media Photo Booths | The Bosco"
                }
            }
        })
    }]), angular.module("webApp").controller("FooterController", ["$scope", "$interval", "InquiryService", function($scope, $interval, InquiryService) {
        return $scope.copyrightDate = new Date, $scope.addSubscriber = function(subscriber) {
            return InquiryService.addSubscriber(subscriber).then(function(response) {
                return "Success" === response.data.status ? ($scope.subscribedSuccess = !0, null == response.data.message && ($scope.newSubscriber = !0)) : $scope.subscribedFailure = !0, $scope.showAddSubscriber = 5, $scope.startCountdown = $interval(function() {
                    if ($scope.showAddSubscriber = $scope.showAddSubscriber - 1, $scope.showAddSubscriber <= 0) return $scope.subscribedSuccess = !1, $scope.subscribedFailure = !1, $scope.newSubscriber = !1, $interval.cancel($scope.startCountdown)
                }, 1e3)
            })
        }
    }]), angular.module("webApp").directive("fullScreenNavigation", ["$filter", "$window", function($filter, $window) {
        return {
            restrict: "EA",
            link: function(scope, element, attr, event) {
                var $win;
                return "true" === attr.transparent && (scope.transparent = !0, element.addClass("sticky-navigation-transparent")), $win = angular.element($window), scope.open = function() {
                    return scope.isOpen = !scope.isOpen
                }
            },
            templateUrl: "full-screen-navigation.template.html"
        }
    }]), angular.module("webApp").directive("navigation", ["$filter", "$window", function($filter, $window) {
        return {
            restrict: "EA",
            scope: {
                color: "=",
                placeholder: "="
            },
            link: function(scope, element, attr, event) {
                var $win;
                return "true" === attr.transparent && (scope.transparent = !0, element.addClass("sticky-navigation-transparent")), $win = angular.element($window), scope.open = function() {
                    return scope.isOpen = !scope.isOpen
                }, $win.on("scroll", function(e) {
                    return $window.pageYOffset > 1 ? (element.addClass("sticky-navigation"), $("#gtb3header").css("marginTop", "50px")) : (element.removeClass("sticky-navigation"), $("#gtb3header").css("marginTop", "0px"))
                })
            },
            templateUrl: "navigation.template.html"
        }
    }]), angular.module("webApp").directive("formatToggle", [function() {
        return {
            restrict: "E",
            replace: !0,
            templateUrl: "format-toggle.template.html",
            link: function(scope, element, attrs) {
                return scope.setFormat = function(format) {
                    return scope.format = format
                }
            }
        }
    }]), angular.module("webApp").directive("photoViewerHeader", [function() {
        return {
            scope: {
                photo: "=",
                format: "=",
                event: "="
            },
            templateUrl: "photo-viewer-header.template.html"
        }
    }]), angular.module("webApp").directive("mainPhoto", ["$state", "$timeout", "ShareService", function($state, $timeout, ShareService) {
        return {
            restrict: "A",
            scope: {
                photo: "=",
                format: "=",
                event: "=",
                emailShareOpen: "="
            },
            templateUrl: "main-photo.template.html",
            controller: ["$scope", "$element", "$attrs", "AssetsManager", function($scope, $element, $attrs, AssetsManager) {
                return $scope.user = {
                    opt_in: !0
                }, $scope.placeholder = AssetsManager.getPlaceholderImage(), $scope.shareEmail = function(user) {
                    return ShareService.emailShareRequest($scope.photo.code, $scope.event.id, user.email, user.opt_in).then(function(response, error) {
                        return $timeout(function() {
                            return $scope.toggleEmailShare()
                        })
                    })
                }, $scope.toggleEmailShare = function(toggle) {
                    return $scope.emailShareOpen = !$scope.emailShareOpen, $timeout(function() {
                        if (null != toggle && $scope.emailShareOpen && ("instagram" === toggle && ($scope.photo.emailShareIcon = "https://s3.amazonaws.com/thebosco/angular-assets/images/icons/instagram-icon-no-outline.png", $scope.photo.emailShareText = "ENTER YOUR EMAIL ADDRESS BELOW TO RECEIVE AN INSTAGRAM READY VIDEO"), "snapchat" === toggle)) return $scope.photo.emailShareIcon = "https://s3.amazonaws.com/thebosco/angular-assets/images/icons/snapchat-new-icon-144.png", $scope.photo.emailShareText = "ENTER YOUR EMAIL ADDRESS BELOW TO RECEIVE A SNAPCHAT READY VIDEO"
                    })
                }, $scope.isEmailShareOpen = function() {
                    return $scope.emailShareOpen
                }
            }]
        }
    }]), angular.module("webApp").directive("photoCarouselNav", [function() {
        return {
            restrict: "E",
            scope: {
                next: "&",
                prev: "&",
                isPrivate: "="
            },
            replace: !0,
            templateUrl: "photo-carousel-nav.template.html",
            link: function(scope, element, attrs) {
                return element.find(".nav-next").click(function() {
                    return scope.next()
                }), element.find(".nav-prev").click(function() {
                    return scope.prev()
                })
            }
        }
    }]), angular.module("webApp").directive("photoCarousel", ["$state", "$document", "$timeout", "ShareService", "MixpanelService", "AssetsManager", function($state, $document, $timeout, ShareService, MixpanelService, AssetsManager) {
        return {
            restrict: "E",
            scope: {
                photo: "=",
                eventPhotos: "=",
                photoIndex: "=",
                format: "=",
                event: "=",
                emailShareOpen: "=",
                isPrivate: "="
            },
            templateUrl: "photo-carousel.template.html",
            controller: ["$rootScope", "$scope", "$element", "$attrs", function($rootScope, $scope, $element, $attrs) {
                var getTranslateX, init, mod, navigateBy, updateState;
                return init = function() {
                    var height, translateX, width;
                    return $scope.user = {
                        opt_in: !0
                    }, "nerve-junket" === $scope.event.slug && ($scope.isNerveJunket = !0), $scope.centerScale = 3, $scope.totalSlidesCount = 5, $scope.scaledSlideExtraUnits = $scope.centerScale - 1, $scope.totalUnitsCount = $scope.eventPhotos.length + $scope.scaledSlideExtraUnits, $scope.visibleUnitsCount = $scope.totalSlidesCount + $scope.scaledSlideExtraUnits, width = $scope.totalUnitsCount / $scope.visibleUnitsCount * 100, height = $scope.centerScale / $scope.visibleUnitsCount * 100, translateX = getTranslateX(), $element.find(".photo-carousel-slides-container").css("width", width + "%").css("height", height + "vw").css("transform", "translateX(" + translateX + "%)")
                }, getTranslateX = function() {
                    var centerOffset;
                    return centerOffset = Math.floor($scope.totalSlidesCount / 2), -1 * ($scope.photoIndex - centerOffset) / $scope.totalUnitsCount * 100
                }, updateState = function(photoCode) {
                    return $state.transitionTo("photo", {
                        photoCode: photoCode
                    }, {
                        location: !0,
                        relative: $state.$current,
                        notify: !1,
                        reload: !1
                    })
                }, mod = function(a, b) {
                    return (a % b + b) % b
                }, navigateBy = function(amount) {
                    var translateX;
                    $rootScope.nextPhoto = amount, $scope.photoIndex = mod($scope.photoIndex + amount, $scope.eventPhotos.length), updateState($scope.eventPhotos[$scope.photoIndex].code), translateX = getTranslateX(), $element.find(".photo-carousel-slides-container").css("transform", "translateX(" + translateX + "%)"), $scope.photo = $scope.eventPhotos[$scope.photoIndex]
                }, $scope.next = function() {
                    return navigateBy(1)
                }, $scope.prev = function() {
                    return navigateBy(-1)
                }, $scope.keydownHandler = function(evt) {
                    if (27 === evt.which && $state.go("event", {
                            eventSlug: $scope.event.slug,
                            "#": $scope.photo.code
                        }), 37 !== evt.which || $scope.emailShareOpen || $scope.prev(), 39 === evt.which && !$scope.emailShareOpen) return $scope.next()
                }, $document.bind("keydown", $scope.keydownHandler), $scope.$on("$destroy", function() {
                    return $document.unbind("keydown", $scope.keydownHandler)
                }), $scope.goTo = function(index) {
                    if (!$scope.isCenterIndex(index)) return navigateBy(index - $scope.photoIndex)
                }, $scope.isCenterIndex = function(index) {
                    return index === $scope.photoIndex
                }, $scope.isActive = function(index) {
                    if (index >= $scope.photoIndex - 3 && index <= $scope.photoIndex + 4) return !0
                }, $scope.isPrint = function(index) {
                    return "print" === $scope.format
                }, $scope.shareEmail = function(user) {
                    var mixpanelData;
                    return mixpanelData = {
                        service: $scope.event.service,
                        action: "share",
                        asset_id: $scope.photo.code,
                        photo_url: "http://www.thebos.co/p/" + $scope.photo.code,
                        event_title: $scope.event.title,
                        event_id: $scope.event.id,
                        etype: $scope.event.etype
                    }, MixpanelService.trackPhotoInteraction(mixpanelData), ShareService.emailShareRequest($scope.photo.code, $scope.event.id, user.email, user.opt_in).then(function(response, error) {
                        return $timeout(function() {
                            return $scope.toggleEmailShare()
                        })
                    })
                }, $scope.toggleEmailShare = function(toggle) {
                    return $scope.event.service = toggle, $scope.emailShareOpen = !$scope.emailShareOpen, $timeout(function() {
                        if (null != toggle && $scope.emailShareOpen && ("instagram" === toggle && ($scope.photo.emailShareIcon = "https://s3.amazonaws.com/thebosco/angular-assets/images/icons/instagram-icon-no-outline.png", $scope.photo.emailShareText = "ENTER YOUR EMAIL ADDRESS BELOW TO RECEIVE AN INSTAGRAM READY VIDEO"), "snapchat" === toggle)) return $scope.photo.emailShareIcon = "https://s3.amazonaws.com/thebosco/angular-assets/images/icons/snapchat-new-icon-144.png", $scope.photo.emailShareText = "ENTER YOUR EMAIL ADDRESS BELOW TO RECEIVE A SNAPCHAT READY VIDEO"
                    })
                }, $scope.hideImage = function(url) {
                    return url.indexOf(!1)
                }, $scope.isEmailShareOpen = function() {
                    return $scope.emailShareOpen
                }, $scope.getFormat = function(index, photo) {
                    return $scope.isCenterIndex(index) ? $scope.format : photo.defaultFormat
                }, $scope.placeholder = AssetsManager.getPlaceholderImage(), init()
            }]
        }
    }]), angular.module("webApp").directive("photoCarouselSlide", [function() {
        return {
            restrict: "A",
            scope: {
                photo: "="
            }
        }
    }]), angular.module("webApp").directive("photoViewer", ["$timeout", "$location", "$window", "$filter", "MixpanelService", function($timeout, $location, $window, $filter, MixpanelService) {
        return {
            restrict: "E",
            scope: {
                photo: "=",
                event: "=",
                format: "=",
                eventPhotos: "=",
                photoIndex: "=",
                commentsCollapsed: "=",
                emailShareOpen: "=",
                isPrivate: "="
            },
            templateUrl: "photo-viewer.template.html",
            link: function($scope) {
                return $scope.emailShareOpen = !1, $scope.init = function() {
                    return $scope.$root.fbAsyncInit()
                }, $scope.twitterShare = function() {
                    var mixpanelData, reshareCopy;
                    return mixpanelData = {
                        service: "Twitter",
                        action: "share",
                        asset_id: $scope.photo.code,
                        photo_url: "http://www.thebos.co/p/" + $scope.photo.code,
                        event_title: $scope.event.title,
                        event_id: $scope.event.id,
                        etype: $scope.event.etype
                    }, MixpanelService.trackPhotoInteraction(mixpanelData), reshareCopy = $filter("urlEscape")($scope.event.reshare_copy), $window.location.href = "https://twitter.com/intent/tweet?text=" + reshareCopy + "%20http://www.thebos.co/p/" + $scope.photo.code + "?ref=twitter"
                }, $scope.tumblrShare = function() {
                    var eventTitle, filename, mixpanelData, reshareCopy, shareUrl;
                    return mixpanelData = {
                        service: "Tumblr",
                        action: "share",
                        asset_id: $scope.photo.code,
                        photo_url: "http://www.thebos.co/p/" + $scope.photo.code,
                        event_title: $scope.event.title,
                        event_id: $scope.event.id,
                        etype: $scope.event.etype
                    }, MixpanelService.trackPhotoInteraction(mixpanelData), eventTitle = $filter("urlEscape")($scope.event.title), reshareCopy = $filter("urlEscape")($scope.event.reshare_copy), filename = "mp4" === $scope.photo.defaultFormat ? $scope.photo.print.filename : "https://s3.amazonaws.com/thebosco/" + $scope.photo.defaultFilename, shareUrl = "http://www.tumblr.com/widgets/share/tool?posttype=photo&title=" + eventTitle + "&canonicalUrl=" + filename + "&caption=" + reshareCopy + "&clickthru=http://www.thebos.co/p/" + $scope.photo.code + "?ref=tumblr", $window.location.href = shareUrl
                }, $scope.facebookFeedShare = function() {
                    var mixpanelData, publish;
                    if ("undefined" != typeof FB && null !== FB) return mixpanelData = {
                        service: "Facebook",
                        action: "share",
                        asset_id: $scope.photo.code,
                        photo_url: "http://www.thebos.co/p/" + $scope.photo.code,
                        event_title: $scope.event.title,
                        event_id: $scope.event.id,
                        etype: $scope.event.etype
                    }, MixpanelService.trackPhotoInteraction(mixpanelData), publish = {
                        app_id: "805819946215780",
                        method: "feed",
                        link: "http://www.thebos.co/p/" + $scope.photo.code,
                        redirect_uri: "http://www.thebos.co/p/" + $scope.photo.code,
                        description: $scope.event.reshare_copy,
                        name: $scope.event.title,
                        picture: "gif" === $scope.format ? $scope.photo.gif.filename : $scope.photo.print.filename
                    }, FB.ui(publish)
                }, $scope.trackDownload = function() {
                    var mixpanelData;
                    return mixpanelData = {
                        service: "Bosco",
                        action: "download",
                        asset_id: $scope.photo.code,
                        photo_url: "http://www.thebos.co/p/" + $scope.photo.code,
                        event_title: $scope.event.title,
                        event_id: $scope.event.id,
                        etype: $scope.event.etype
                    }, MixpanelService.trackPhotoInteraction(mixpanelData)
                }, $scope.downloadUrl = function() {
                    return "gif" === $scope.format ? $scope.photo.gif.url : "video" !== $scope.format ? $scope.photo.print.url : $scope.photo.video.url
                }, $scope.toggleEmailShare = function(toggle) {
                    return $scope.event.service = toggle, $scope.emailShareOpen = !$scope.emailShareOpen, $timeout(function() {
                        if (null != toggle && $scope.emailShareOpen && ("instagram" === toggle && ($scope.photo.emailShareIcon = "https://s3.amazonaws.com/thebosco/angular-assets/images/icons/instagram-icon-no-outline.png", $scope.photo.emailShareText = "ENTER YOUR EMAIL ADDRESS BELOW TO RECEIVE AN INSTAGRAM READY VIDEO"), "snapchat" === toggle)) return $scope.photo.emailShareIcon = "https://s3.amazonaws.com/thebosco/angular-assets/images/icons/snapchat-new-icon-144.png", $scope.photo.emailShareText = "ENTER YOUR EMAIL ADDRESS BELOW TO RECEIVE A SNAPCHAT READY VIDEO"
                    })
                }, $scope.init()
            }
        }
    }]), angular.module("webApp").controller("PhotoController", ["$scope", "$rootScope", "$stateParams", "$state", "$sce", "$timeout", "PhotoService", "EventService", "AssetsManager", "ShareService", "resolvedPhoto", "eventPhotos", function($scope, $rootScope, $stateParams, $state, $sce, $timeout, PhotoService, EventService, AssetsManager, ShareService, resolvedPhoto, eventPhotos) {
        return $scope.commentsCollapsed = !0, $scope.emailShareOpen = !1, $scope.allPhotos = resolvedPhoto.photos, $scope.isPrivate = 1 === resolvedPhoto.event.private_gallery, $scope.init = function() {
            return $scope.eventPhotos = eventPhotos, $scope.format = resolvedPhoto.format, $scope.singleEvent = resolvedPhoto.event, $scope.photoIndex = _.findIndex(eventPhotos, function(photo) {
                return photo.code === resolvedPhoto.photo.code
            }), $scope.photo = eventPhotos[$scope.photoIndex], $scope.eventPhotos = _.filter($scope.eventPhotos, function(photo) {
                return null != photo && 1 === photo.active
            }), window.prerenderReady = !0
        }, $scope.init()
    }]), angular.module("webApp.photo", []).config(["$urlMatcherFactoryProvider", "$stateProvider", function($urlMatcherFactoryProvider, $stateProvider) {
        return $urlMatcherFactoryProvider.strictMode(!1), $stateProvider.state("photo", {
            url: "/p/{photoCode}",
            templateUrl: "photo.template.html",
            controller: "PhotoController",
            resolve: {
                resolvedPhoto: function($rootScope, $stateParams, $state, AssetsManager, PhotoService) {
                    return null == $rootScope.nextPhoto ? PhotoService.gettingPhoto($stateParams.photoCode, !0).then(function(resolvedPhoto) {
                        return 404 === resolvedPhoto.status_code && $state.go("404"), resolvedPhoto.photo.active || $state.go("event", {
                            eventSlug: resolvedPhoto.event.slug
                        }), resolvedPhoto.multiday ? resolvedPhoto.event.galleryLink = resolvedPhoto.event.galleryLink + "/" + moment(resolvedPhoto.date, "MMM DD, YYYY").format("YYYY-MM-DD") : resolvedPhoto.event.galleryLink = "/e/" + resolvedPhoto.event.slug, resolvedPhoto
                    }) : AssetsManager.retrievePhotoResponse()
                },
                eventPhotos: function($q, $stateParams, $rootScope, AssetsManager, resolvedPhoto, $window) {
                    var addPhotoEnd, addPhotoStart, end, event, length, loadAssets, photoIndex, photos, srcProperty, start;
                    return event = resolvedPhoto.event, photoIndex = 1 !== event.private_gallery ? resolvedPhoto.photos.findIndex(function(photo) {
                        return photo.code === $stateParams.photoCode
                    }) : void 0, $rootScope.eventShortTitle = event.title_short, $rootScope.canonical = "/" + event.slug, $rootScope.eventTitle = event.title, "gif" === resolvedPhoto.photo.defaultFormat ? (resolvedPhoto.format = "gif", srcProperty = "gif.filename", $rootScope.contentType = "image/gif", $rootScope.shareImage = 1 === event.private_gallery ? resolvedPhoto.photo : resolvedPhoto.photos[photoIndex].gif.url, $rootScope.contentWidth = 600, $rootScope.contentHeight = 600) : "mp4" === resolvedPhoto.photo.defaultFormat ? (resolvedPhoto.format = "video", srcProperty = "defaultFilename", $rootScope.contentType = "image/jpeg", $rootScope.shareImage = 1 === event.private_gallery ? resolvedPhoto.photo : resolvedPhoto.photos[photoIndex].print.url, $rootScope.contentWidth = 400, $rootScope.contentHeight = 600) : (resolvedPhoto.format = "print", srcProperty = "print.filename", $rootScope.contentType = "image/jpeg", $rootScope.shareImage = 1 === event.private_gallery ? resolvedPhoto.photo : resolvedPhoto.photos[photoIndex].print.url, $rootScope.contentWidth = 400, $rootScope.contentHeight = 600), "video" !== resolvedPhoto.format && (1 === event.private_gallery || $window.innerWidth < 768 ? photos = [resolvedPhoto.photo] : null == $rootScope.nextPhoto ? (length = resolvedPhoto.photos.length, start = photoIndex - 3 > 0 ? photoIndex - 3 : 0, end = photoIndex + 4 > length - 1 ? length : photoIndex + 4, photos = resolvedPhoto.photos.slice(start, end), 0 === photoIndex && resolvedPhoto.photos.length > 3 ? (addPhotoStart = length - 3 < 1 ? 0 : length - 3, photos = photos.concat(resolvedPhoto.photos.slice(addPhotoStart, length))) : photoIndex === resolvedPhoto.photos.length - 1 && resolvedPhoto.photos.length > 3 && (addPhotoEnd = length < 4 ? length : 4, photos = photos.concat(resolvedPhoto.photos.slice(0, addPhotoEnd)))) : (start = $rootScope.nextPhoto > 0 ? photoIndex + 2 : photoIndex - 4, start = start > 0 ? start : 0, end = $rootScope.nextPhoto > 0 ? photoIndex + 4 : photoIndex - 2, end = end > 0 ? end : 1, length = resolvedPhoto.photos.length, photos = resolvedPhoto.photos.slice(start, end), 0 === photoIndex ? photos = photos.concat(resolvedPhoto.photos.slice(length - 3, length)) : photoIndex === resolvedPhoto.photos.length - 1 && (photos = photos.concat(resolvedPhoto.photos.slice(0, 4))), $rootScope.nextPhoto = null)), null != photos ? loadAssets = AssetsManager.loadImages(photos, event.id, srcProperty) : (AssetsManager.resetPool(), null != resolvedPhoto.photos ? (resolvedPhoto.photos.forEach(function(photo, index, photos) {
                        var ref;
                        if (null != (null != (ref = photo.print) ? ref.filename : void 0)) return photos[index].print.filename = "https://s3.amazonaws.com/thebosco/" + photo.print.filename
                    }), loadAssets = $q.resolve(resolvedPhoto.photos)) : loadAssets = $q.resolve([resolvedPhoto.photo])), loadAssets.then(function(assets) {
                        return assets
                    })
                },
                $title: function(resolvedPhoto) {
                    if (resolvedPhoto.event.title + " | The Bosco | New York City photo booth and video booth rentals", resolvedPhoto.event.hashtag && (resolvedPhoto.event.hashtag = resolvedPhoto.event.hashtag.trim(), "#" !== resolvedPhoto.event.hashtag[0] && resolvedPhoto.event.hashtag)) return resolvedPhoto.event.hashtag = "#" + resolvedPhoto.event.hashtag
                }
            }
        }).state("mobile", {
            url: "/m/{photoCode}",
            templateUrl: "photo.template.html",
            controller: "PhotoController",
            resolve: {
                resolvedPhoto: function($rootScope, $stateParams, $state, AssetsManager, PhotoService) {
                    return null == $rootScope.nextPhoto ? PhotoService.gettingPhoto($stateParams.photoCode, !0).then(function(resolvedPhoto) {
                        return 404 === resolvedPhoto.status_code && $state.go("404"), resolvedPhoto.photo.active || $state.go("event", {
                            eventSlug: resolvedPhoto.event.slug
                        }), resolvedPhoto.multiday ? resolvedPhoto.event.galleryLink = resolvedPhoto.event.galleryLink + "/" + moment(resolvedPhoto.date, "MMM DD, YYYY").format("YYYY-MM-DD") : resolvedPhoto.event.galleryLink = "/e/" + resolvedPhoto.event.slug, resolvedPhoto
                    }) : AssetsManager.retrievePhotoResponse()
                },
                eventPhotos: function($q, $stateParams, $rootScope, AssetsManager, resolvedPhoto, $window) {
                    var addPhotoEnd, addPhotoStart, end, event, length, loadAssets, photoIndex, photos, srcProperty, start;
                    return event = resolvedPhoto.event, photoIndex = 1 !== event.private_gallery ? resolvedPhoto.photos.findIndex(function(photo) {
                            return photo.code === $stateParams.photoCode
                        }) : void 0, $rootScope.eventShortTitle = event.title_short, $rootScope.canonical = "/" + event.slug, $rootScope.eventTitle = event.title, "gif" === resolvedPhoto.photo.defaultFormat ? (resolvedPhoto.format = "gif", srcProperty = "gif.filename", $rootScope.contentType = "image/gif", $rootScope.shareImage = 1 === event.private_gallery ? resolvedPhoto.photo : resolvedPhoto.photos[photoIndex].gif.url, $rootScope.contentWidth = 600, $rootScope.contentHeight = 600) : "mp4" === resolvedPhoto.photo.defaultFormat ? (resolvedPhoto.format = "video", srcProperty = "defaultFilename", $rootScope.contentType = "image/jpeg", $rootScope.shareImage = 1 === event.private_gallery ? resolvedPhoto.photo : resolvedPhoto.photos[photoIndex].print.url, $rootScope.contentWidth = 400, $rootScope.contentHeight = 600) : (resolvedPhoto.format = "print", srcProperty = "print.filename", $rootScope.contentType = "image/jpeg", $rootScope.shareImage = 1 === event.private_gallery ? resolvedPhoto.photo : resolvedPhoto.photos[photoIndex].print.url, $rootScope.contentWidth = 400, $rootScope.contentHeight = 600), "video" !== resolvedPhoto.format && (1 === event.private_gallery || $window.innerWidth < 768 ? photos = [resolvedPhoto.photo] : null == $rootScope.nextPhoto ? (length = resolvedPhoto.photos.length, start = photoIndex - 3 > 0 ? photoIndex - 3 : 0, end = photoIndex + 4 > length - 1 ? length : photoIndex + 4, photos = resolvedPhoto.photos.slice(start, end), 0 === photoIndex && resolvedPhoto.photos.length > 3 ? (addPhotoStart = length - 3 < 1 ? 0 : length - 3, photos = photos.concat(resolvedPhoto.photos.slice(addPhotoStart, length))) : photoIndex === resolvedPhoto.photos.length - 1 && resolvedPhoto.photos.length > 3 && (addPhotoEnd = length < 4 ? length : 4, photos = photos.concat(resolvedPhoto.photos.slice(0, addPhotoEnd)))) : (start = $rootScope.nextPhoto > 0 ? photoIndex + 2 : photoIndex - 4, start = start > 0 ? start : 0, end = $rootScope.nextPhoto > 0 ? photoIndex + 4 : photoIndex - 2, end = end > 0 ? end : 1, length = resolvedPhoto.photos.length, photos = resolvedPhoto.photos.slice(start, end), 0 === photoIndex ? photos = photos.concat(resolvedPhoto.photos.slice(length - 3, length)) : photoIndex === resolvedPhoto.photos.length - 1 && (photos = photos.concat(resolvedPhoto.photos.slice(0, 4))), $rootScope.nextPhoto = null)), null != photos ? loadAssets = AssetsManager.loadImages(photos, event.id, srcProperty) : (AssetsManager.resetPool(), null != resolvedPhoto.photos ? (resolvedPhoto.photos.forEach(function(photo, index, photos) {
                            var ref;
                            if (null != (null != (ref = photo.print) ? ref.filename : void 0)) return photos[index].print.filename = "https://s3.amazonaws.com/thebosco/" + photo.print.filename
                        }), loadAssets = $q.resolve(resolvedPhoto.photos)) : loadAssets = $q.resolve([resolvedPhoto.photo])),
                        loadAssets.then(function(assets) {
                            return assets
                        })
                },
                $title: function(resolvedPhoto) {
                    if (resolvedPhoto.event.title + " | The Bosco | New York City photo booth and video booth rentals", resolvedPhoto.event.hashtag && (resolvedPhoto.event.hashtag = resolvedPhoto.event.hashtag.trim(), "#" !== resolvedPhoto.event.hashtag[0] && resolvedPhoto.event.hashtag)) return resolvedPhoto.event.hashtag = "#" + resolvedPhoto.event.hashtag(resolvedPhoto.event.title + " | The Bosco | New York City photo booth and video booth rentals")
                }
            }
        }).state("inactive-photo", {
            url: "/inactive-photo",
            templateUrl: "inactive-photo.template.html"
        })
    }]), angular.module("webApp").directive("seeMoreGifs", [function() {
        return {
            restrict: "E",
            replace: !0,
            templateUrl: "see-more-gifs.template.html",
            link: function(scope, element, attrs) {
                var pickThreeRandIntsExceptOne, setMoreGifsIndices;
                return pickThreeRandIntsExceptOne = function(limit, exception) {
                    var i, ints;
                    return 1 === limit ? [0, 0, 0] : 2 === limit ? [0, 1, 0] : 3 === limit ? [0, 1, 2] : (ints = function() {
                        var j, ref, results1;
                        for (results1 = [], i = j = 0, ref = limit - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) i !== exception && results1.push(i);
                        return results1
                    }(), _.sample(ints, 3))
                }, setMoreGifsIndices = function() {
                    var iteration, moreGifsIndices, results1;
                    if (moreGifsIndices = pickThreeRandIntsExceptOne(scope.allPhotos, scope.photoIndex), scope.moreGifs = [], iteration = 1, scope.allPhotos.length > 3) {
                        for (results1 = []; scope.moreGifs.length < 3;) null != scope.allPhotos[scope.photoIndex + iteration] && scope.moreGifs.length < 3 && scope.moreGifs.push(scope.allPhotos[scope.photoIndex + iteration]), null != scope.allPhotos[scope.photoIndex - iteration] && scope.moreGifs.length < 3 && scope.moreGifs.push(scope.allPhotos[scope.photoIndex - iteration]), results1.push(iteration++);
                        return results1
                    }
                    return moreGifsIndices.forEach(function(index) {
                        return scope.moreGifs.push(scope.allPhotos[index])
                    })
                }, setMoreGifsIndices(), scope.seeMoreGifsFormat = scope.format
            }
        }
    }]), angular.module("webApp").directive("gifsExamplesBlackArrows", [function() {
        return {
            restrict: "E",
            link: function(scope, element, attrs) {
                return scope.initCarousel = function(element) {
                    var defaultOptions;
                    return defaultOptions = {
                        autoplay: !0,
                        autoplayTimeout: 3e3,
                        animateIn: !0,
                        animateOut: !0,
                        center: !0,
                        items: 2,
                        loop: !0,
                        nav: !0,
                        navText: ['<img src="https://s3.amazonaws.com/thebosco/angular-assets/images/arrows/carousel-smaller-left-arrow-black.png" style="position: absolute; top: 50%; padding: 0 20px; transform: translateY(-50%); cursor: pointer; z-index: 3;">', '<img src="https://s3.amazonaws.com/thebosco/angular-assets/images/arrows/carousel-smaller-right-arrow-black.png" style="position: absolute; top: 50%; padding: 0 20px; transform: translateY(-50%); cursor: pointer; z-index: 3; right: 0;">'],
                        responsive: {
                            768: {
                                center: !1,
                                items: 3
                            }
                        }
                    }, $(element).owlCarousel(defaultOptions)
                }, scope.initCarousel(element)
            }
        }
    }]), angular.module("webApp").directive("gifsExamples", [function() {
        return {
            restrict: "E",
            link: function(scope, element, attrs) {
                return scope.initCarousel = function(element) {
                    var defaultOptions;
                    return defaultOptions = {
                        autoplay: !0,
                        autoplayTimeout: 3e3,
                        animateIn: !0,
                        animateOut: !0,
                        center: !0,
                        items: 2,
                        loop: !0,
                        nav: !0,
                        navText: ['<img src="https://s3.amazonaws.com/thebosco/angular-assets/images/arrows/carousel-smaller-left-arrow.png" style="position: absolute; top: 50%; padding: 0 20px; transform: translateY(-50%); cursor: pointer; z-index: 3;">', '<img src="https://s3.amazonaws.com/thebosco/angular-assets/images/arrows/carousel-smaller-right-arrow.png" style="position: absolute; top: 50%; padding: 0 20px; transform: translateY(-50%); cursor: pointer; z-index: 3; right: 0;">'],
                        responsive: {
                            768: {
                                center: !1,
                                items: 3
                            }
                        }
                    }, $(element).owlCarousel(defaultOptions)
                }, scope.initCarousel(element)
            }
        }
    }]), angular.module("webApp").directive("newRotator", ["$sce", function($sce) {
        return {
            restrict: "A",
            transclude: !0,
            templateUrl: "new-rotator.template.html",
            link: function(scope, element, attb, ctrl, transclude) {
                var getMousePositionCrossBrowser;
                return scope.numberOfImages = element.find("img").length, getMousePositionCrossBrowser = function(mouseEvent) {
                    var offEl, offX, offY, result;
                    if (result = {
                            x: 0,
                            y: 0
                        }, mouseEvent || (mouseEvent = window.event), mouseEvent.pageX || mouseEvent.pageY ? (result.x = mouseEvent.pageX, result.y = mouseEvent.pageY) : (mouseEvent.clientX || mouseEvent.clientY) && (result.x = mouseEvent.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, result.y = mouseEvent.clientY + document.body.scrollTop + document.documentElement.scrollTop), mouseEvent.target) {
                        if (offEl = mouseEvent.target, offX = 0, offY = 0, "undefined" != typeof offEl.offsetParent)
                            for (; offEl;) offX += offEl.offsetLeft, offY += offEl.offsetTop, offEl = offEl.offsetParent;
                        else offX = offEl.x, offY = offEl.y;
                        result.x -= offX, result.y -= offY
                    }
                    return result
                }, scope.reset = function() {
                    return angular.element(element.find("img")).removeClass("active"), angular.element(element.find("img")[7]).addClass("active"), "done"
                }, scope.updateFrame = function(event) {
                    var mousePosition, newFrameNumber;
                    return mousePosition = getMousePositionCrossBrowser(event), angular.element(element.find("img")).removeClass("active"), newFrameNumber = Math.ceil(mousePosition.x / event.target.width * scope.numberOfImages) - 1, angular.element(element.find("img")[newFrameNumber]).addClass("active"), "done"
                }
            }
        }
    }]), angular.module("webApp").directive("rotator", ["$interval", function($interval) {
        return {
            restrict: "E",
            link: function(scope, element, attrs) {
                var updateFrame;
                return scope.currentFrame = Math.floor(element.find("[frame]").length / 2), updateFrame = function(targetFrame) {
                    var results1;
                    for (results1 = []; scope.currentFrame !== targetFrame;) scope.currentFrame < targetFrame ? results1.push(element.trigger("to.owl.carousel", [++scope.currentFrame - 1, 1])) : scope.currentFrame > targetFrame ? results1.push(element.trigger("to.owl.carousel", [--scope.currentFrame - 1, 1])) : results1.push(void 0);
                    return results1
                }, element.on("mousemove", function(event) {
                    var frameCount, mouseX, mouseY, targetFrame, width;
                    return width = element.width(), frameCount = element.find("[frame]").length, mouseX = event.pageX, mouseY = event.pageY, targetFrame = Math.ceil(mouseX / width * frameCount), 0 === targetFrame && (targetFrame = 1), updateFrame(targetFrame)
                }), scope.initCarousel = function(element) {
                    var $accordionToggle, defaultOptions;
                    return defaultOptions = {
                        items: 1,
                        animateIn: !1,
                        animateOut: !1,
                        startPosition: scope.currentFrame
                    }, $(element).owlCarousel(defaultOptions), $accordionToggle = $('#design [data-toggle="collapse"]'), $accordionToggle.click(function() {
                        var evt;
                        return evt = document.createEvent("UIEvents"), evt.initUIEvent("resize", !0, !1, window, 0), window.dispatchEvent(evt)
                    })
                }, scope.initCarousel(element)
            }
        }
    }]), angular.module("webApp").directive("uxSteps", function() {
        return {
            restrict: "E",
            link: function(scope, element, attrs) {
                return scope.initCarousel = function(element) {
                    var $accordionToggle, defaultOptions;
                    return defaultOptions = {
                        items: 1,
                        loop: !0,
                        navText: ['<img src="https://s3.amazonaws.com/thebosco/angular-assets/images/arrows/carousel-smaller-left-arrow-black.png" style="position: absolute; top: 50%; padding: 0 20px; transform: translateY(-50%); cursor: pointer; z-index: 3;">', '<img src="https://s3.amazonaws.com/thebosco/angular-assets/images/arrows/carousel-smaller-right-arrow-black.png" style="position: absolute; top: 50%; padding: 0 20px; transform: translateY(-50%); cursor: pointer; z-index: 3; right: 0;">']
                    }, element.owlCarousel(defaultOptions), $accordionToggle = $('#ux [data-toggle="collapse"]'), $accordionToggle.click(function() {
                        var evt;
                        return evt = document.createEvent("UIEvents"), evt.initUIEvent("resize", !0, !1, window, 0), window.dispatchEvent(evt)
                    })
                }, scope.initCarousel(element)
            }
        }
    }), angular.module("webApp").directive("gifBoothTechSpecs", [function() {
        return {
            restrict: "E",
            link: function(scope, element, attrs) {
                return scope.initCarousel = function(element) {
                    var $accordionToggle, defaultOptions;
                    return defaultOptions = {
                        autoplay: !1,
                        autoplayTimeout: 3e3,
                        items: 1,
                        loop: !0,
                        nav: !0,
                        navText: ['<img src="https://s3.amazonaws.com/thebosco/angular-assets/images/arrows/carousel-smaller-left-arrow.png" style="position: absolute; top: 50%; padding: 0 20px; transform: translateY(-50%); cursor: pointer; z-index: 3;">', '<img src="https://s3.amazonaws.com/thebosco/angular-assets/images/arrows/carousel-smaller-right-arrow.png" style="position: absolute; top: 50%; padding: 0 20px; transform: translateY(-50%); cursor: pointer; z-index: 3; right: 0;">']
                    }, $(element).owlCarousel(defaultOptions), $accordionToggle = $('#tech-specs [data-toggle="collapse"]'), $accordionToggle.click(function() {
                        var evt;
                        return evt = document.createEvent("UIEvents"), evt.initUIEvent("resize", !0, !1, window, 0), window.dispatchEvent(evt)
                    })
                }, scope.initCarousel(element)
            }
        }
    }]), angular.module("webApp").controller("GifBoothController", ["$rootScope", "$scope", "$state", "$sce", "$timeout", function($rootScope, $scope, $state, $sce, $timeout) {
        return $scope.init = function() {
            return $rootScope.metaDescription = "The Bosco's state of the art GIF photo booth captures unique photo experiences at premier events. Book a rental with The Bosco today!", $scope.gifVideo = {
                url: $sce.trustAsResourceUrl("https://player.vimeo.com/video/126322071?api=1&player_id=gif-booth-video"),
                player: {}
            }, $scope.metricsVideo = {
                url: $sce.trustAsResourceUrl("https://player.vimeo.com/video/159964187?api=1&player_id=metrics"),
                player: {}
            }, $scope.customizationVideo = {
                url: $sce.trustAsResourceUrl("https://player.vimeo.com/video/138219017?api=1&player_id=customization"),
                player: {}
            }, $scope.uxVideo = {
                url: $sce.trustAsResourceUrl("https://player.vimeo.com/video/153974780?api=1&player_id=ux-video"),
                player: {}
            }
        }, $scope.init()
    }]), angular.module("webApp").controller("MulticamController", ["$scope", "$timeout", "$sce", function($scope, $timeout, $sce) {
        return $scope.moveTo = function(index) {
            return $scope.slideIndex = index, $.scrollify.move(index)
        }, $scope.slickConfig = {
            slidesToShow: 3,
            centerMode: !0,
            dots: !1,
            arrows: !0,
            infinite: !0,
            centerPadding: "0px",
            responsive: [{
                breakpoint: 768,
                settings: {
                    dots: !0,
                    arrows: !0,
                    centerPadding: "0px",
                    centerMode: !0,
                    infinite: !0,
                    slidesToShow: 1
                }
            }],
            method: {},
            event: {
                init: function() {
                    return $(".slick-track").on("click", function(evt) {
                        var target;
                        if (target = $(evt.target), target.parent().prev().is(".slick-current") && $scope.slickConfig.method.slickNext(), target.parent().next().is(".slick-current")) return $scope.slickConfig.method.slickPrev()
                    }), $.scrollify({
                        section: ".angular-section",
                        sectionName: !1,
                        interstitialSection: ".multi-cam-footer-container",
                        easing: "easeOutExpo",
                        scrollSpeed: 1100,
                        offset: 0,
                        scrollbars: !0,
                        setHeights: !1,
                        overflowScroll: !1,
                        before: function(index, array) {
                            if (3 !== index) return $timeout(function() {
                                return $scope.slideIndex = index
                            })
                        },
                        afterResize: function() {
                            return $.scrollify.move($.scrollify.current()[0].id)
                        }
                    })
                }
            }
        }, $scope.init = function() {
            return $scope.slideIndex = 0, $scope.multiCamVideo = {
                url: $sce.trustAsResourceUrl("https://player.vimeo.com/video/191719994?api=1&player_id=multi-cam-video"),
                player: {}
            }
        }, $scope.$on("$destroy", function() {
            return $scope.slickConfig.method.unslick(), $.scrollify.destroy()
        }), $scope.init()
    }]), angular.module("webApp").controller("PrintStationController", ["$rootScope", "$scope", "$state", "$sce", "$timeout", function($rootScope, $scope, $state, $sce, $timeout) {
        return $scope.init = function() {
            return $rootScope.metaDescription = "The Bosco's state of the art photo booth printers captures branded hashtag and Instagram photo experiences at premier events. Book a rental with The Bosco!", $scope.printStationVideo = {
                url: $sce.trustAsResourceUrl("https://player.vimeo.com/video/126323080?api=1&player_id=bosco-lite-video"),
                player: {}
            }
        }, $scope.init()
    }]), angular.module("webApp.products", ["ui.bootstrap"]).config(["$urlMatcherFactoryProvider", "$stateProvider", function($urlMatcherFactoryProvider, $stateProvider) {
        return $urlMatcherFactoryProvider.strictMode(!1), $urlMatcherFactoryProvider.caseInsensitive(!0), $stateProvider.state("products", {
            url: "/products",
            templateUrl: "products.template.html",
            resolve: {
                $title: function() {
                    return "Products | The Bosco | New York City photo booth and video booth rentals"
                }
            }
        }).state("the-bosco-lite", {
            url: "/products/the-bosco-lite",
            templateUrl: "the-bosco-lite.template.html",
            controller: "BoscoLiteController",
            resolve: {
                $title: function() {
                    return "Social Media Photo Booth Kiosk Rental | The Bosco Lite"
                }
            }
        }).state("gif-booth", {
            url: "/products/gif-booth",
            templateUrl: "gif-booth.template.html",
            controller: "GifBoothController",
            resolve: {
                $title: function() {
                    return "Animated GIF Photo Booth Rental | The Bosco"
                }
            }
        }).state("video-booth", {
            url: "/products/video-booth",
            templateUrl: "video-booth.template.html",
            controller: "VideoBoothController",
            resolve: {
                $title: function() {
                    return "Video Photo Booth Rental | The Bosco"
                }
            }
        }).state("print-station", {
            url: "/products/print-station",
            templateUrl: "print-station.template.html",
            controller: "PrintStationController",
            resolve: {
                $title: function() {
                    return "Instagram and Hashtag Photo Booth Printer | The Bosco"
                }
            }
        }).state("multicam", {
            url: "/products/multicam",
            templateUrl: "multicam.template.html",
            controller: "MulticamController",
            resolve: {
                $title: function() {
                    return "Multicam | The Bosco"
                }
            }
        })
    }]), angular.module("webApp").controller("BoscoLiteController", ["$rootScope", "$scope", "$state", "$sce", "$timeout", function($rootScope, $scope, $state, $sce, $timeout) {
        return $scope.init = function() {
            return $rootScope.metaDescription = "The Bosco Lite is a state of the art photo booth kiosk capturing unique photo and social media experiences at premier events. Book a rental with The Bosco!", $scope.boscoLiteVideo = {
                url: $sce.trustAsResourceUrl("https://player.vimeo.com/video/146678632?api=1&player_id=bosco-lite-video"),
                player: {}
            }, $scope.uxVideo = {
                url: $sce.trustAsResourceUrl("https://player.vimeo.com/video/155052299?api=1&player_id=ux-video"),
                player: {}
            }
        }, $scope.init()
    }]), angular.module("webApp").controller("VideoBoothController", ["$rootScope", "$scope", "$state", "$sce", "$timeout", function($rootScope, $scope, $state, $sce, $timeout) {
        return $scope.init = function() {
            return $rootScope.metaDescription = "The Bosco's state of the art video photo booth kiosk captures unique photo and video experiences at premier events. Book a rental with The Bosco today!", $scope.videoBoothVideo = {
                url: $sce.trustAsResourceUrl("https://player.vimeo.com/video/126322577?api=1&player_id=video-booth"),
                player: {}
            }, $scope.customizationVideo = {
                url: $sce.trustAsResourceUrl("https://player.vimeo.com/video/138219017?api=1&player_id=customization"),
                player: {}
            }, $scope.uxVideo = {
                url: $sce.trustAsResourceUrl("https://player.vimeo.com/video/153975532?api=1&player_id=ux-video"),
                player: {}
            }
        }, $scope.init()
    }]), angular.module("webApp").config(["$stateProvider", "$urlMatcherFactoryProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlMatcherFactoryProvider, $urlRouterProvider, $locationProvider) {
        return $urlMatcherFactoryProvider.caseInsensitive(!0), $urlMatcherFactoryProvider.strictMode(!1), $locationProvider.html5Mode(!0), $urlRouterProvider.otherwise("/404"), $stateProvider.state("google-main", {
            url: "/!",
            resolve: {
                redirect: function($state, $location) {
                    return $location.path("/")
                }
            }
        }).state("asmlog", {
            url: "/asmlog",
            controller: function($window) {
                return $window.open("https://docs.google.com/a/thebos.co/forms/d/1Dhh4ICAgrihZECn5IO9TB1tV2cQsMPPyh8Hn-ZOvRKI/viewform?c=0&w=1", "_self")
            }
        }).state("404", {
            url: "/404",
            controller: function($window) {
                return $window.open("/404", "_self")
            }
        }).state("checkout", {
            url: "/checkout",
            controller: function($window) {
                return $window.open("https://docs.google.com/forms/d/1HEBoTn0ug0EyU8QySf1Knzo7B7SaLO_1xq44zo-8Fl0/viewform", "_self")
            }
        }), $stateProvider.state("juice-generation", {
            url: "/e/juice-generation",
            templateUrl: "event.template.html",
            controller: "EventController",
            resolve: {
                resolvedEvent: function(EventService) {
                    return EventService.gettingEvent("juice-generation-fidi")
                },
                $title: function() {
                    return "Juice Generation | The Bosco | New York City photo booth and video booth rentals"
                }
            }
        }).state("charity-water-la", {
            url: "/e/charity-water-la",
            templateUrl: "event.template.html",
            controller: "EventController",
            resolve: {
                resolvedEvent: function(EventService) {
                    return EventService.gettingEvent("w-hotels-charity-water")
                },
                $title: function() {
                    return "Charity Water LA | The Bosco | New York City photo booth and video booth rentals"
                }
            }
        }).state("mtv", {
            url: "/mtvu",
            templateUrl: "event.template.html",
            controller: "EventController",
            resolve: {
                resolvedEvent: function(EventService) {
                    return EventService.gettingEvent("mtvu-campus-event-photos")
                },
                $title: function() {
                    return "MTVU | The Bosco | New York City photo booth and video booth rentals"
                }
            }
        }).state("citytargetdtla", {
            url: "/citytargetdtla",
            templateUrl: "event.template.html",
            controller: "EventController",
            resolve: {
                resolvedEvent: function(EventService) {
                    return EventService.gettingEvent("citytarget-dtla")
                },
                $title: function() {
                    return "City Target | The Bosco | New York City photo booth and video booth rentals"
                }
            }
        }).state("dkny", {
            url: "/dkny",
            templateUrl: "event.template.html",
            controller: "EventController",
            resolve: {
                resolvedEvent: function(EventService) {
                    return EventService.gettingEvent("dkny-holiday-2012")
                },
                $title: function() {
                    return "DKNY | The Bosco | New York City photo booth and video booth rentals"
                }
            }
        }).state("atodocolor", {
            url: "/atodocolor",
            templateUrl: "event.template.html",
            controller: "EventController",
            resolve: {
                resolvedEvent: function(EventService) {
                    return EventService.gettingEvent("target-people-en-espanol")
                },
                $title: function() {
                    return "Target | The Bosco | New York City photo booth and video booth rentals"
                }
            }
        })
    }]), angular.module("webApp.sitemap", []).config(["$urlMatcherFactoryProvider", "$stateProvider", function($urlMatcherFactoryProvider, $stateProvider) {
        return $urlMatcherFactoryProvider.strictMode(!1), $urlMatcherFactoryProvider.caseInsensitive(!0), $stateProvider.state("sitemap", {
            url: "/sitemap",
            templateUrl: "sitemap.template.html",
            controller: function() {
                return window.prerenderReady = !0
            },
            resolve: {
                $title: function() {
                    return "Sitemap | The Bosco"
                }
            }
        })
    }]), angular.module("webApp").controller("SlideshowController-1", ["$scope", "$rootScope", "$stateParams", "$timeout", "AssetService", "resolvedEvent", "resolvedAssets", function($scope, $rootScope, $stateParams, $timeout, AssetService, resolvedEvent, resolvedAssets) {
        return $scope.transformSlideshow = function() {
            return $timeout(function() {
                return $scope.currentImageURL = _.sample($scope.eventAssets).filename
            })
        }, $scope.refreshSlideshow = function() {
            return AssetService.gettingEventAssets($scope.singleEvent.event.id).then(function(eventAssets) {
                return $scope.eventAssets = eventAssets
            })
        }, $scope.init = function() {
            var refreshSlideShowInterval, transformSlideShowInterval;
            return $scope.singleEvent = resolvedEvent, $scope.eventAssets = resolvedAssets, $scope.eventDate = Date.parse($scope.singleEvent.date), $scope.transformSlideshow(), transformSlideShowInterval = window.setInterval($scope.transformSlideshow, 6e3), refreshSlideShowInterval = window.setInterval($scope.refreshSlideshow, 6e4), window.prerenderReady = !0
        }, $scope.init()
    }]), angular.module("webApp").controller("SlideshowController-2-mp4", ["$scope", "$rootScope", "$stateParams", "$timeout", "AssetService", "EventService", "resolvedEvent", "resolvedAssets", function($scope, $rootScope, $stateParams, $timeout, AssetService, EventService, resolvedEvent, resolvedAssets) {
        return $scope.transformSlideshow = function() {
            return $timeout(function() {
                var position;
                return position = _.random(0, $scope.pageAssets.length - 1), $scope.pageAssets[position] = _.sample($scope.eventAssets)
            })
        }, $scope.refreshSlideshow = function() {
            return AssetService.gettingEventMP4s($scope.singleEvent.event.id).then(function(eventAssets) {
                return $scope.eventAssets = eventAssets
            })
        }, $scope.init = function() {
            return $scope.singleEvent = resolvedEvent, AssetService.gettingEventMP4s($scope.singleEvent.event.id).then(function(assets) {
                var refreshSlideShowInterval, transformSlideShowInterval;
                return $scope.eventAssets = assets, $scope.pageAssets = [], _.times(16, function(i) {
                    return $scope.pageAssets.push(_.sample($scope.eventAssets))
                }), refreshSlideShowInterval = window.setInterval($scope.refreshSlideshow, 6e4), transformSlideShowInterval = window.setInterval($scope.transformSlideshow, 6e3), window.prerenderReady = !0
            })
        }, $scope.init()
    }]), angular.module("webApp").controller("SlideshowController-2", ["$scope", "$rootScope", "$stateParams", "$timeout", "AssetService", "EventService", "resolvedEvent", "resolvedAssets", function($scope, $rootScope, $stateParams, $timeout, AssetService, EventService, resolvedEvent, resolvedAssets) {
        return $scope.transformSlideshow = function() {
            return $timeout(function() {
                var position;
                return position = _.random(0, $scope.pageAssets.length - 1), $scope.pageAssets[position] = _.sample($scope.eventAssets)
            })
        }, $scope.refreshSlideshow = function() {
            return AssetService.gettingEventAssets($scope.singleEvent.event.id).then(function(eventAssets) {
                return $scope.eventAssets = eventAssets
            })
        }, $scope.init = function() {
            var refreshSlideShowInterval, transformSlideShowInterval;
            return $scope.singleEvent = resolvedEvent, $scope.eventAssets = resolvedAssets, $scope.eventDate = Date.parse($scope.singleEvent.date), $scope.pageAssets = $scope.eventAssets.slice(0, 12), transformSlideShowInterval = window.setInterval($scope.transformSlideshow, 3e3), refreshSlideShowInterval = window.setInterval($scope.refreshSlideshow, 3e4), window.prerenderReady = !0
        }, $scope.init()
    }]), angular.module("webApp").controller("SlideshowController-beauty-con", ["$scope", "$rootScope", "$stateParams", "$timeout", "$location", "AssetService", "EventService", "resolvedEvent", "resolvedAssets", function($scope, $rootScope, $stateParams, $timeout, $location, AssetService, EventService, resolvedEvent, resolvedAssets) {
        var imageLoaded, imagesLoaded;
        return imagesLoaded = 0, imageLoaded = function() {
            if (imagesLoaded += 1, 2 === imagesLoaded) return $("#slideshow-beauty-con-container").fadeTo(2e3, 1)
        }, $scope.transformSlideshow = function() {
            return imagesLoaded = 0, $("#slideshow-beauty-con-container").fadeTo(2e3, 0, function() {
                return $scope.$apply(function() {
                    var asset, index, j, len1, ref, results1;
                    for (ref = $scope.pageAssets, results1 = [], index = j = 0, len1 = ref.length; j < len1; index = ++j) asset = ref[index], results1.push($scope.pageAssets[index] = $scope.eventAssets[_.random(0, $scope.eventAssets.length - 1)]);
                    return results1
                })
            })
        }, $scope.refreshSlideshow = function() {
            return AssetService.gettingEventAssets($scope.singleEvent.event.id).then(function(eventAssets) {
                return $scope.eventAssets = eventAssets
            })
        }, $scope.init = function() {
            var refreshSlideShowInterval, transformSlideShowInterval;
            return $("img").each(function() {
                return $(this).on("load", imageLoaded)
            }), $scope.singleEvent = resolvedEvent, $scope.eventAssets = resolvedAssets, transformSlideShowInterval = window.setInterval($scope.transformSlideshow, 1e4), refreshSlideShowInterval = window.setInterval($scope.refreshSlideshow, 3e4), $scope.pageAssets = $scope.eventAssets.slice(0, 2), window.prerenderReady = !0
        }, $scope.init()
    }]), angular.module("webApp").controller("SlideshowController-cadillac-house", ["$scope", "$rootScope", "$stateParams", "$timeout", "$location", "AssetService", "EventService", "resolvedEvent", "resolvedAssets", function($scope, $rootScope, $stateParams, $timeout, $location, AssetService, EventService, resolvedEvent, resolvedAssets) {
        return $scope.index = 0, $scope.newAssets = [], $scope.assets = {
            a: {
                active: !0,
                asset: void 0
            },
            b: {
                active: !1,
                asset: void 0
            }
        }, $scope.transformSlideshow = function() {
            return $timeout(function() {
                return $scope.newAssets.length > 0 ? ($scope.displayAsset($scope.newAssets[$scope.newAssets.length - 1]), $scope.newAssets.pop()) : ($scope.displayAsset($scope.eventAssets[$scope.index]), $scope.index >= $scope.eventAssets.length - 1 ? $scope.index = 0 : $scope.index += 1)
            })
        }, $scope.displayAsset = function(asset) {
            return $timeout(function() {
                return $scope.assets.a.active === !0 ? $(".a").fadeTo(0, 0, function() {
                    return $scope.assets.a.asset = asset, $scope.assets.a.active = !$scope.assets.a.active
                }) : $(".b").fadeTo(0, 0, function() {
                    return $scope.assets.b.asset = asset, $scope.assets.b.active = !$scope.assets.b.active
                }), $timeout(function() {
                    var randomNumber;
                    return randomNumber = Math.random() >= .5, randomNumber ? $(".b").fadeTo(0, 1, function() {
                        return $scope.assets.b.active = !$scope.assets.a.active
                    }) : $(".a").fadeTo(0, 1, function() {
                        return $scope.assets.a.active = !$scope.assets.a.active
                    })
                }, 1e3)
            })
        }, $scope.refreshSlideshow = function() {
            return AssetService.gettingEventAssets($scope.singleEvent.event.id).then(function(eventAssets) {
                if (eventAssets.length > $scope.eventAssets.length) return $scope.newAssets = eventAssets.slice($scope.eventAssets.length), $scope.eventAssets = eventAssets
            })
        }, $scope.init = function() {
            var refreshSlideShowInterval, transformSlideShowInterval;
            return $scope.singleEvent = resolvedEvent, $scope.eventAssets = resolvedAssets, $scope.delayTime = 1e3 * $location.search().delay || 6e3, transformSlideShowInterval = window.setInterval($scope.transformSlideshow, $scope.delayTime), refreshSlideShowInterval = window.setInterval($scope.refreshSlideshow, 3e4), window.prerenderReady = !0
        }, $scope.init()
    }]), angular.module("webApp").controller("SlideshowController-grid", ["$scope", "$rootScope", "$stateParams", "$timeout", "$location", "AssetService", "EventService", "resolvedEvent", "resolvedAssets", function($scope, $rootScope, $stateParams, $timeout, $location, AssetService, EventService, resolvedEvent, resolvedAssets) {
        return $scope.transformSlideshow = function() {
            return $timeout(function() {
                var position;
                return position = _.random(0, $scope.pageAssets.length - 1), $scope.pageAssets[position] = _.sample($scope.eventAssets)
            })
        }, $scope.refreshSlideshow = function() {
            return AssetService.gettingEventAssets($scope.singleEvent.event.id).then(function(eventAssets) {
                return $scope.eventAssets = eventAssets
            })
        }, $scope.init = function() {
            var refreshSlideShowInterval, transformSlideShowInterval;
            return $scope.singleEvent = resolvedEvent, $scope.eventAssets = resolvedAssets, $scope.numberOfPhotos = $location.search().photos || 6, $scope.verticallyCenter = function() {
                return $location.search().center || "horizontal"
            }, $scope.imageWidth = 100 / ($scope.numberOfPhotos / 2) + "%", $scope.delayTime = 1e3 * $location.search().delay || 6e3, $scope.pageAssets = $scope.eventAssets.slice(0, $scope.numberOfPhotos), transformSlideShowInterval = window.setInterval($scope.transformSlideshow, $scope.delayTime), refreshSlideShowInterval = window.setInterval($scope.refreshSlideshow, 3e4), window.prerenderReady = !0
        }, $scope.init()
    }]), angular.module("webApp").controller("SlideshowController-juice-generation-horizontal", ["$scope", "$rootScope", "$stateParams", "$timeout", "AssetService", "EventService", "resolvedEvent", "resolvedAssets", function($scope, $rootScope, $stateParams, $timeout, AssetService, EventService, resolvedEvent, resolvedAssets) {
        return $scope.slideshowImages = [], $scope.transformSlideshow = function() {
            return $timeout(function() {
                return $scope.slideshowImages[_.random(0, $scope.slideshowImages.length - 1)] = _.sample($scope.eventAssets)
            })
        }, $scope.refreshSlideshow = function() {
            return AssetService.gettingEventAssets($scope.singleEvent.event.id).then(function(eventAssets) {
                return $scope.eventAssets = eventAssets
            })
        }, $scope.init = function() {
            var j, refreshSlideShowInterval, transformSlideShowInterval;
            for ($scope.singleEvent = resolvedEvent, $scope.eventAssets = resolvedAssets, $scope.eventDate = Date.parse($scope.singleEvent.date), j = 1; j <= 2; j++) $scope.slideshowImages.push(_.sample($scope.eventAssets));
            return transformSlideShowInterval = window.setInterval($scope.transformSlideshow, 5e3), refreshSlideShowInterval = window.setInterval($scope.refreshSlideshow, 3e4), window.prerenderReady = !0
        }, $scope.toggleFullScreen = function($event) {
            var element;
            if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
                if (document.exitFullscreen) return document.exitFullscreen();
                if (document.webkitExitFullscreen) return document.webkitExitFullscreen();
                if (document.mozCancelFullScreen) return document.mozCancelFullScreen();
                if (document.msExitFullscreen) return document.msExitFullscreen()
            } else if (document.fullscreenEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.documentElement.webkitRequestFullScreen, element = $event.currentTarget, document.fullscreenEnabled) {
                if (element.requestFullscreen) return element.requestFullscreen();
                if (element.mozRequestFullScreen) return element.mozRequestFullScreen();
                if (element.webkitRequestFullScreen) return element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
            }
        }, $scope.init()
    }]), angular.module("webApp").controller("SlideshowController-juice-generation-vertical", ["$window", "$document", "$scope", "$rootScope", "$stateParams", "$timeout", "AssetService", "EventService", "resolvedEvent", "resolvedAssets", function($window, $document, $scope, $rootScope, $stateParams, $timeout, AssetService, EventService, resolvedEvent, resolvedAssets) {
        return $scope.slideshowImages = [], $scope.transformSlideshow = function() {
            return $timeout(function() {
                return $scope.slideshowImages[_.random(0, $scope.slideshowImages.length - 1)] = _.sample($scope.eventAssets)
            })
        }, $scope.refreshSlideshow = function() {
            return AssetService.gettingEventAssets($scope.singleEvent.event.id).then(function(eventAssets) {
                return $scope.eventAssets = eventAssets
            })
        }, $scope.init = function() {
            var j, refreshSlideShowInterval, transformSlideShowInterval;
            for ($scope.singleEvent = resolvedEvent, $scope.eventAssets = resolvedAssets, $scope.eventDate = Date.parse($scope.singleEvent.date), j = 1; j <= 2; j++) $scope.slideshowImages.push(_.sample($scope.eventAssets));
            return transformSlideShowInterval = window.setInterval($scope.transformSlideshow, 5e3), refreshSlideShowInterval = window.setInterval($scope.refreshSlideshow, 3e4), window.prerenderReady = !0
        }, $scope.toggleFullScreen = function($event) {
            var element;
            if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
                if (document.exitFullscreen) return document.exitFullscreen();
                if (document.webkitExitFullscreen) return document.webkitExitFullscreen();
                if (document.mozCancelFullScreen) return document.mozCancelFullScreen();
                if (document.msExitFullscreen) return document.msExitFullscreen()
            } else if (document.fullscreenEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.documentElement.webkitRequestFullScreen, element = $event.currentTarget, document.fullscreenEnabled) {
                if (element.requestFullscreen) return element.requestFullscreen();
                if (element.mozRequestFullScreen) return element.mozRequestFullScreen();
                if (element.webkitRequestFullScreen) return element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
            }
        }, $scope.init()
    }]), angular.module("webApp").controller("SlideshowController-mp4-vertical", ["$scope", "$rootScope", "$stateParams", "$timeout", "$sce", "$window", "AssetService", "EventService", "resolvedEvent", "resolvedAssets", function($scope, $rootScope, $stateParams, $timeout, $sce, $window, AssetService, EventService, resolvedEvent, resolvedAssets) {
        var showVideoTop;
        return showVideoTop = !1, $scope.opacity = 1, $scope.readyToSwitch = !1, $scope.windowResize = function() {
            return $timeout(function() {
                return $scope.videoWidth = $(window).height(), $scope.letterbox = ($(window).width() - document.getElementById("mp4-slideshow-video-top").clientHeight) / 2
            })
        }, $scope.checkVideoState = function() {
            if ($scope.readyToSwitch) return $scope.transformSlideshow()
        }, $scope.videoLoaded = function() {
            return $scope.readyToSwitch = !0
        }, $scope.initSlideshow = function() {
            return $scope.imageURLTop = $sce.trustAsResourceUrl("https://s3.amazonaws.com/thebosco/" + _.sample($scope.assets).filename), $("#mp4-slideshow-video-top").on("canplay", function() {
                return $("#mp4-slideshow-video-top").off(), $scope.windowResize(), $scope.imageURLBottom = $sce.trustAsResourceUrl("https://s3.amazonaws.com/thebosco/" + _.sample($scope.assets).filename), $("#mp4-slideshow-video-bottom").on("canplay", function() {
                    var checkToSwitchVideo;
                    return $("#mp4-slideshow-video-bottom").off(), $scope.windowResize(), $scope.readyToSwitch = !0, checkToSwitchVideo = window.setInterval($scope.checkVideoState, 16e3)
                })
            })
        }, $scope.transformSlideshow = function() {
            return $scope.readyToSwitch = !1, $timeout(function() {
                return showVideoTop ? ($scope.opacity = 1, $timeout($scope.showVideoTop, 4e3)) : ($scope.opacity = 0, $timeout($scope.showVideoBottom, 4e3)), showVideoTop = !showVideoTop
            })
        }, $scope.showVideoTop = function() {
            return $("#mp4-slideshow-video-top").off(), $scope.imageURLBottom = $sce.trustAsResourceUrl("https://s3.amazonaws.com/thebosco/" + _.sample($scope.assets).filename), $("#mp4-slideshow-video-bottom").on("canplay", $scope.videoLoaded)
        }, $scope.showVideoBottom = function() {
            return $("#mp4-slideshow-video-bottom").off(), $scope.imageURLTop = $sce.trustAsResourceUrl("https://s3.amazonaws.com/thebosco/" + _.sample($scope.assets).filename), $("#mp4-slideshow-video-top").on("canplay", $scope.videoLoaded)
        }, $scope.refreshSlideshow = function() {
            return AssetService.gettingEventMP4s($scope.singleEvent.id).then(function(eventAssets) {
                return $scope.assets = eventAssets
            })
        }, $scope.init = function() {
            return $scope.singleEvent = resolvedEvent, AssetService.gettingEventMP4s($scope.singleEvent.id).then(function(eventAssets) {
                var refreshSlideShowInterval;
                return $scope.assets = eventAssets, $scope.initSlideshow(), window.addEventListener("resize", $scope.windowResize), refreshSlideShowInterval = window.setInterval($scope.refreshSlideshow, 6e4), window.prerenderReady = !0
            })
        }, $scope.init()
    }]), angular.module("webApp").controller("SlideshowController-mp4", ["$scope", "$rootScope", "$stateParams", "$location", "$timeout", "$sce", "$window", "AssetService", "EventService", "resolvedEvent", "resolvedAssets", function($scope, $rootScope, $stateParams, $location, $timeout, $sce, $window, AssetService, EventService, resolvedEvent, resolvedAssets) {
        var showVideoTop;
        return showVideoTop = !1, $scope.opacity = 1, $scope.readyToSwitch = !1, $scope.windowResize = function(evt) {
            return $timeout(function() {
                return $scope.videoHeight = $(window).height(), $scope.letterbox = ($(window).width() - document.getElementById("mp4-slideshow-video-top").clientWidth) / 2
            })
        }, $scope.checkVideoState = function() {
            if ($scope.readyToSwitch) return $scope.transformSlideshow()
        }, $scope.videoLoaded = function() {
            return $scope.readyToSwitch = !0
        }, $scope.initSlideshow = function() {
            return $scope.imageURLTop = $sce.trustAsResourceUrl("https://s3.amazonaws.com/thebosco/" + _.sample($scope.assets).filename), $("#mp4-slideshow-video-top").on("canplay", function() {
                return $("#mp4-slideshow-video-top").off(), $scope.windowResize(), $scope.imageURLBottom = $sce.trustAsResourceUrl("https://s3.amazonaws.com/thebosco/" + _.sample($scope.assets).filename), $("#mp4-slideshow-video-bottom").on("canplay", function() {
                    var checkToSwitchVideo;
                    return $("#mp4-slideshow-video-bottom").off(), $scope.readyToSwitch = !0, checkToSwitchVideo = window.setInterval($scope.checkVideoState, $scope.delayTime)
                })
            })
        }, $scope.transformSlideshow = function() {
            return $scope.readyToSwitch = !1, $timeout(function() {
                return showVideoTop ? ($scope.opacity = 1, $timeout($scope.showVideoTop, 4e3)) : ($scope.opacity = 0, $timeout($scope.showVideoBottom, 4e3)), showVideoTop = !showVideoTop
            })
        }, $scope.showVideoTop = function() {
            return $("#mp4-slideshow-video-top").off(), $scope.imageURLBottom = $sce.trustAsResourceUrl("https://s3.amazonaws.com/thebosco/" + _.sample($scope.assets).filename), $("#mp4-slideshow-video-bottom").on("canplay", $scope.videoLoaded)
        }, $scope.showVideoBottom = function() {
            return $("#mp4-slideshow-video-bottom").off(), $scope.imageURLTop = $sce.trustAsResourceUrl("https://s3.amazonaws.com/thebosco/" + _.sample($scope.assets).filename), $("#mp4-slideshow-video-top").on("canplay", $scope.videoLoaded)
        }, $scope.refreshSlideshow = function() {
            return AssetService.gettingEventMP4s($scope.singleEvent.event.id).then(function(eventAssets) {
                return $scope.assets = eventAssets
            })
        }, $scope.init = function() {
            return $scope.singleEvent = resolvedEvent, $scope.delayTime = 1e3 * $location.search().delay || 16e3, AssetService.gettingEventMP4s($stateParams.eventSlug).then(function(eventAssets) {
                var refreshSlideShowInterval;
                return $scope.assets = eventAssets, $scope.initSlideshow(), window.addEventListener("resize", $scope.windowResize), refreshSlideShowInterval = window.setInterval($scope.refreshSlideshow, 6e4), window.prerenderReady = !0
            })
        }, $scope.init()
    }]), angular.module("webApp").controller("SlideshowController-sephora", ["$scope", "$rootScope", "$stateParams", "$timeout", "$sce", "$window", "AssetService", "EventService", "resolvedEvent", "resolvedAssets", function($scope, $rootScope, $stateParams, $timeout, $sce, $window, AssetService, EventService, resolvedEvent, resolvedAssets) {
        var init, productUrls, refreshSlideshow;
        return productUrls = ["https://s3.amazonaws.com/thebosco/angular-assets/images/slideshows/sephora/240583_all-nighter_hero_aRGB_r4.jpg", "https://s3.amazonaws.com/thebosco/angular-assets/images/slideshows/sephora/240583_moondust_palette_hero_open_blue_v2_CMYK.jpg", "https://s3.amazonaws.com/thebosco/angular-assets/images/slideshows/sephora/ALL_NIGHTER_2GIRLS_CMYK.jpg", "https://s3.amazonaws.com/thebosco/angular-assets/images/slideshows/sephora/ALL_NIGHTER_3GIRLS_A_CMYK.jpg", "https://s3.amazonaws.com/thebosco/angular-assets/images/slideshows/sephora/ALL_NIGHTER_3GIRLS_B_CMYK.jpg", "https://s3.amazonaws.com/thebosco/angular-assets/images/slideshows/sephora/All-Fall-Purple-2.jpg", "https://s3.amazonaws.com/thebosco/angular-assets/images/slideshows/sephora/All-Fall-Purple.jpg", "https://s3.amazonaws.com/thebosco/angular-assets/images/slideshows/sephora/All-Nighter-Social-1.jpg", "https://s3.amazonaws.com/thebosco/angular-assets/images/slideshows/sephora/All-Nighter-Social-2.jpg", "https://s3.amazonaws.com/thebosco/angular-assets/images/slideshows/sephora/MOONDUST_PALETTE_CMYK.jpg", "https://s3.amazonaws.com/thebosco/angular-assets/images/slideshows/sephora/Moondust-Social-1.jpg", "https://s3.amazonaws.com/thebosco/angular-assets/images/slideshows/sephora/Moondust-Social-2.jpg", "https://s3.amazonaws.com/thebosco/angular-assets/images/slideshows/sephora/Moondust-Social-3.jpg", "https://s3.amazonaws.com/thebosco/angular-assets/images/slideshows/sephora/Perversion-Social-1.jpg", "https://s3.amazonaws.com/thebosco/angular-assets/images/slideshows/sephora/RAZOR_SHARP_ALT1_CMYK.jpg", "https://s3.amazonaws.com/thebosco/angular-assets/images/slideshows/sephora/RAZOR_SHARP_CMYK.jpg", "https://s3.amazonaws.com/thebosco/angular-assets/images/slideshows/sephora/RAZOR_SHARP_CMYK_WEBVERSION.jpg", "https://s3.amazonaws.com/thebosco/angular-assets/images/slideshows/sephora/Razor-Sharp-Social.jpg", "https://s3.amazonaws.com/thebosco/angular-assets/images/slideshows/sephora/razorsharp_liquidliner_hero.jpg"], $scope.productLocations = [], $scope.users = [], $scope.transformSlideshow = function() {
            var random;
            return random = _.random(0, 16), productUrls.push($scope.productLocations[random]), $("#product-" + random).fadeTo(2e3, 0, function() {
                return $timeout(function(_this) {
                    return function() {
                        var image;
                        return image = productUrls.splice(_.random(0, productUrls.length - 1), 1)[0], $scope.productLocations[random] = image, $("#product-" + random).fadeTo(2e3, 1)
                    }
                }(this))
            })
        }, refreshSlideshow = function() {
            return AssetService.gettingEventAssets($stateParams.eventSlug).then(function(assets) {
                return _.times(5, function(i) {
                    return $timeout(function(_this) {
                        return function() {
                            return $scope.users[i] = assets[assets.length - (i + 1)].url
                        }
                    }(this))
                })
            })
        }, (init = function() {
            var assets, refreshSlideShowInterval, singleEvent, transformSlideshowInterval;
            return singleEvent = resolvedEvent, assets = resolvedAssets, _.times(5, function(i) {
                return $timeout(function() {
                    return $scope.users[i] = assets[assets.length - (i + 1)].url
                })
            }), _.times(17, function(i) {
                return $timeout(function() {
                    return $scope.productLocations[i] = productUrls.splice(_.random(productUrls.length - 1), 1)[0]
                })
            }), refreshSlideShowInterval = window.setInterval(refreshSlideshow, 3e4), transformSlideshowInterval = window.setInterval($scope.transformSlideshow, 5e3)
        })()
    }]), angular.module("webApp").controller("SlideshowController-slimeshow", ["$scope", "$rootScope", "$stateParams", "$timeout", "AssetService", "EventService", "resolvedEvent", "resolvedAssets", function($scope, $rootScope, $stateParams, $timeout, AssetService, EventService, resolvedEvent, resolvedAssets) {
        var possibleColors;
        return possibleColors = ["#663399", "#234674", "#FFCC00", "#009933"], $scope.slideshowImages = [], $scope.assets = [], $scope.transformSlideshow = function() {
            return $timeout(function() {
                return $scope.slideshowImages[_.random(0, $scope.slideshowImages.length - 1)] = _.sample($scope.assets)
            })
        }, $scope.refreshSlideshow = function() {
            return AssetService.gettingEventAssets($scope.singleEvent.id).then(function(eventAssets) {
                return $scope.eventAssets = eventAssets
            })
        }, $scope.changeColor = function() {
            return $timeout(function() {
                return $scope.slimeColorA = _.sample(possibleColors), $scope.slimeColorB = _.sample(possibleColors), $scope.slimeColorC = _.sample(possibleColors)
            })
        }, $scope.init = function() {
            var changeColorInterval, j, refreshSlideShowInterval, transformSlideShowInterval;
            for ($scope.singleEvent = resolvedEvent, $scope.assets = resolvedAssets, j = 1; j <= 17; j++) $scope.slideshowImages.push(_.sample($scope.assets));
            return changeColorInterval = window.setInterval($scope.changeColor, 5e3), transformSlideShowInterval = window.setInterval($scope.transformSlideshow, 1e3), refreshSlideShowInterval = window.setInterval($scope.refreshSlideshow, 6e4), window.prerenderReady = !0
        }, $scope.init()
    }]), angular.module("webApp").controller("SlideshowController-vertically-centered", ["$scope", "$rootScope", "$stateParams", "$timeout", "$sce", "$window", "AssetService", "EventService", "resolvedEvent", "resolvedAssets", function($scope, $rootScope, $stateParams, $timeout, $sce, $window, AssetService, EventService, resolvedEvent, resolvedAssets) {
        var init, refreshSlideshow, showImageA;
        return showImageA = !1, $scope.transformSlideshow = function() {
            return showImageA === !0 ? $scope.$apply(function() {
                return $("#slideshow-vertically-centered-image-a").fadeTo(2e3, 1, function() {
                    return $scope.$apply(function() {
                        return $scope.assetB = _.sample($scope.assets)
                    })
                })
            }) : $scope.$apply(function() {
                return $("#slideshow-vertically-centered-image-a").fadeTo(2e3, 0, function() {
                    return $scope.$apply(function() {
                        return $scope.assetA = _.sample($scope.assets)
                    })
                })
            }), showImageA = !showImageA
        }, refreshSlideshow = function() {
            return AssetService.gettingEventAssets($stateParams.eventSlug).then(function(assets) {
                return $scope.assets = assets
            })
        }, (init = function() {
            var refreshSlideShowInterval, singleEvent, transformSlideshowInterval;
            return singleEvent = resolvedEvent, $scope.assets = resolvedAssets, $scope.assetA = _.sample($scope.assets), $scope.assetB = _.sample($scope.assets), refreshSlideShowInterval = window.setInterval(refreshSlideshow, 3e4), transformSlideshowInterval = window.setInterval($scope.transformSlideshow, 5e3)
        })()
    }]), angular.module("webApp.slideshow", []).config(["$stateProvider", "$urlMatcherFactoryProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlMatcherFactoryProvider, $urlRouterProvider, $locationProvider) {
        return $urlMatcherFactoryProvider.strictMode(!1), $urlMatcherFactoryProvider.caseInsensitive(!0), $stateProvider.state("slideshow", {
            url: "/e/slideshow/{slideshow}/{eventSlug}?fullheight",
            templateUrl: function($stateParams) {
                return "slideshow-" + $stateParams.slideshow + ".template.html"
            },
            controllerProvider: function($stateParams, $rootScope) {
                return "true" === $stateParams.fullheight && ($rootScope.isFullHeight = !0), "SlideshowController-" + $stateParams.slideshow
            },
            resolve: {
                resolvedEvent: function(EventService, $stateParams) {
                    return EventService.gettingEvent($stateParams.eventSlug)
                },
                resolvedAssets: function(AssetService, $stateParams) {
                    return AssetService.gettingEventAssets($stateParams.eventSlug)
                }
            }
        })
    }]), angular.module("webApp").controller("social-recap", ["$scope", "$state", "$location", "$stateParams", "$timeout", "AssetService", "EventService", "resolvedAnalytics", function($scope, $state, $location, $stateParams, $timeout, AssetService, EventService, resolvedAnalytics) {
        var render;
        return $scope.fullPageOptions = {
            anchors: ["slide-1", "slide-2", "slide-3", "slide-4", "slide-5", "slide-6"],
            verticalCentered: !1,
            afterLoad: function(anchorLink, index) {
                return $timeout(function() {
                    return $scope.slideIndex = index
                })
            },
            onLeave: function(index, nextIndex, direction) {
                return $timeout(function() {
                    return 3 === nextIndex ? $scope.darkBackground = !1 : $scope.darkBackground = !0, $scope.slideIndex = nextIndex
                })
            }
        }, render = function() {
            var nonTwitterShareCount, ref;
            return $scope.analytics.formatted_date = moment($scope.analytics.date).format("MMMM DD, YYYY"), "#" === !(null != (ref = $scope.analytics.hashtag) ? ref[0] : void 0) && ($scope.analytics.hashtag = "#" + $scope.analytics.hashtag), nonTwitterShareCount = $scope.analytics.sms_sum + $scope.analytics.email_sum + $scope.analytics.fb_sum, $scope.analytics.twitterReach = Math.round(750 * $scope.analytics.twitter_sum), $scope.analytics.facebookReach = Math.round(10 * nonTwitterShareCount + 18 * nonTwitterShareCount), $scope.analytics.instagramReach = Math.round(37.5 * $scope.analytics.asset_count), $scope.analytics.tumblrReach = Math.round(60 * nonTwitterShareCount), $scope.analytics.totalReach = $scope.analytics.twitterReach + $scope.analytics.facebookReach + $scope.analytics.instagramReach + $scope.analytics.tumblrReach, AssetService.gettingEventAssets($scope.analytics.slug).then(function(assets) {
                return $scope.assets = [], _(50).times(function() {
                    return $scope.assets.push(_.sample(assets))
                }), window.prerenderReady = !0
            })
        }, $scope.init = function() {
            return $scope.darkBackground = !0, resolvedAnalytics instanceof Error ? EventService.gettingEvent($stateParams.event).then(function(singleEvent) {
                return 404 === singleEvent.status_code ? $state.go("social-recap-missing") : ($scope.analytics = {
                    slug: singleEvent.event.slug,
                    title: singleEvent.event.title,
                    hashtag: singleEvent.event.hashtag,
                    date: singleEvent.event.date,
                    asset_count: 0,
                    twitter_sum: 0,
                    facebook_sum: 0,
                    sms_sum: 0,
                    email_sum: 0
                }, render())
            }) : ($scope.analytics = resolvedAnalytics, render())
        }, $scope.init()
    }]), angular.module("webApp.social-recap", []).config(["$urlMatcherFactoryProvider", "$stateProvider", function($urlMatcherFactoryProvider, $stateProvider) {
        return $urlMatcherFactoryProvider.strictMode(!1), $urlMatcherFactoryProvider.caseInsensitive(!0), $stateProvider.state("social-recap", {
            url: "/social-recap/{event}",
            templateUrl: "social-recap.template.html",
            controller: "social-recap",
            resolve: {
                resolvedAnalytics: function(AnalyticsService, $stateParams) {
                    return AnalyticsService.gettingAnalytics($stateParams.event)
                },
                $title: function() {
                    return "Social Recap | The Bosco | New York City photo booth and video booth rentals"
                }
            }
        }).state("social-recap-missing", {
            url: "/social-recap-missing",
            templateUrl: "social-recap-missing.template.html"
        })
    }]), angular.module("webApp").controller("team.controller", ["$scope", "resolvedData", function($scope, resolvedData) {
        var patterns;
        return $scope.team = [], patterns = ["https://s3.amazonaws.com/thebosco/angular-assets/images/team/backgrounds/80s.jpg", "https://s3.amazonaws.com/thebosco/angular-assets/images/team/backgrounds/donuts.jpg", "https://s3.amazonaws.com/thebosco/angular-assets/images/team/backgrounds/flamingos.jpg", "https://s3.amazonaws.com/thebosco/angular-assets/images/team/backgrounds/glitter.jpg", "https://s3.amazonaws.com/thebosco/angular-assets/images/team/backgrounds/palmsnflowers.jpg", "https://s3.amazonaws.com/thebosco/angular-assets/images/team/backgrounds/saved.jpg", "https://s3.amazonaws.com/thebosco/angular-assets/images/team/backgrounds/zigzags.jpg"], $scope.init = function() {
            return resolvedData = _.shuffle(resolvedData), $scope.team = _.map(resolvedData, function(member) {
                return member.profileImage = member.bio_image, member.bio = member.biography, member.twitter = member.twitter_id, member.instagram = member.instagram_id, member
            }), window.prerenderReady = !0
        }, $scope.init()
    }]), angular.module("webApp.team", []).config(["$urlMatcherFactoryProvider", "$stateProvider", function($urlMatcherFactoryProvider, $stateProvider) {
        return $urlMatcherFactoryProvider.strictMode(!1), $urlMatcherFactoryProvider.caseInsensitive(!0), $stateProvider.state("team", {
            url: "/team",
            templateUrl: "team.template.html",
            controller: "team.controller",
            resolve: {
                resolvedData: function(UserService) {
                    return UserService.getTeamData()
                },
                $title: function() {
                    return "The Team | The Bosco | New York City photo booth and video booth rentals"
                }
            }
        })
    }]), angular.module("webApp.templates", []).config(["$urlMatcherFactoryProvider", "$stateProvider", function($urlMatcherFactoryProvider, $stateProvider) {
        return $urlMatcherFactoryProvider.strictMode(!1), $urlMatcherFactoryProvider.caseInsensitive(!0), $stateProvider.state("templates", {
            url: "/templates",
            templateUrl: "templates.template.html",
            controller: function() {
                return window.prerenderReady = !0
            },
            resolve: {
                $title: function() {
                    return "The Bosco | New York City photo booth and video booth rentals"
                }
            }
        })
    }]), angular.module("webApp.terms", []).config(["$urlMatcherFactoryProvider", "$stateProvider", function($urlMatcherFactoryProvider, $stateProvider) {
        return $urlMatcherFactoryProvider.strictMode(!1), $urlMatcherFactoryProvider.caseInsensitive(!0), $stateProvider.state("terms", {
            url: "/terms",
            templateUrl: "terms.template.html",
            controller: function() {
                return window.prerenderReady = !0
            },
            resolve: {
                $title: function() {
                    return "Terms of Use & Privacy Policy | The Bosco | New York City photo booth and video booth rentals"
                }
            }
        }).state("broken", {
            url: "/504",
            templateUrl: "404.template.html",
            controller: function() {
                return window.prerenderReady = !0
            },
            resolve: {
                $title: function() {
                    return "Terms of Use & Privacy Policy | The Bosco | New York City photo booth and video booth rentals"
                }
            }
        })
    }]), angular.module("webApp").controller("WhatIsTheBoscoController", ["$scope", "$rootScope", "$sce", function($scope, $rootScope, $sce) {
        var init, logoSlides, quoteSlides;
        return logoSlides = [{
            id: 0,
            imageURL: "https://s3.amazonaws.com/thebosco/angular-assets/images/what-is-the-bosco/logos/logos-01.png"
        }, {
            id: 1,
            imageURL: "https://s3.amazonaws.com/thebosco/angular-assets/images/what-is-the-bosco/logos/logos-02.png"
        }, {
            id: 2,
            imageURL: "https://s3.amazonaws.com/thebosco/angular-assets/images/what-is-the-bosco/logos/logos-03.png"
        }, {
            id: 3,
            imageURL: "https://s3.amazonaws.com/thebosco/angular-assets/images/what-is-the-bosco/logos/logos-04.png"
        }, {
            id: 4,
            imageURL: "https://s3.amazonaws.com/thebosco/angular-assets/images/what-is-the-bosco/logos/logos-05.png"
        }, {
            id: 5,
            imageURL: "https://s3.amazonaws.com/thebosco/angular-assets/images/what-is-the-bosco/logos/logos-06.png"
        }, {
            id: 6,
            imageURL: "https://s3.amazonaws.com/thebosco/angular-assets/images/what-is-the-bosco/logos/logos-07.png"
        }, {
            id: 7,
            imageURL: "https://s3.amazonaws.com/thebosco/angular-assets/images/what-is-the-bosco/logos/logos-08.png"
        }, {
            id: 8,
            imageURL: "https://s3.amazonaws.com/thebosco/angular-assets/images/what-is-the-bosco/logos/logos-09.png"
        }, {
            id: 9,
            imageURL: "https://s3.amazonaws.com/thebosco/angular-assets/images/what-is-the-bosco/logos/logos-10.png"
        }, {
            id: 10,
            imageURL: "https://s3.amazonaws.com/thebosco/angular-assets/images/what-is-the-bosco/logos/logos-11.png"
        }, {
            id: 11,
            imageURL: "https://s3.amazonaws.com/thebosco/angular-assets/images/what-is-the-bosco/logos/logos-10.png"
        }, {
            id: 12,
            imageURL: "https://s3.amazonaws.com/thebosco/angular-assets/images/what-is-the-bosco/logos/logos-12.png"
        }], quoteSlides = [{
            id: 0,
            quote: "IF YOU'VE BEEN TO A COMPANY PARTY IN THE LAST FEW YEARS, THE ODDS ARE GOOD THAT YOU'VE SEEN ONE OF THE BOSCO'S PHOTO BOOTHS.",
            imageURL: "https://s3.amazonaws.com/thebosco/angular-assets/images/what-is-the-bosco/press-logos/business-insider.png",
            link: "http://www.businessinsider.com/the-bosco-makes-gif-booths-for-parties-and-celebrities-2015-6"
        }, {
            id: 1,
            quote: "PIONEERED THE GIF BOOTH",
            imageURL: "https://s3.amazonaws.com/thebosco/angular-assets/images/what-is-the-bosco/press-logos/the-new-york-times.png",
            link: "http://www.nytimes.com/2015/10/08/fashion/photo-boots-warby-parker-topshop.html?_r=0"
        }, {
            id: 2,
            quote: "WHAT DO RIHANNA, BEYONCÃ‰ AND UN SECRETARY GENERAL BAN KI MOON HAVE IN COMMON? THEY HAVE ALL HAD THEIR PICTURE SNAPPED BY THE BOSCO",
            imageURL: "https://s3.amazonaws.com/thebosco/angular-assets/images/what-is-the-bosco/press-logos/forbes.png",
            link: "http://www.forbes.com/sites/natalierobehmed/2014/09/22/the-bosco-the-photobooth-company-making-a-mint-from-party-pictures/"
        }, {
            id: 3,
            quote: "THEY DON'T JUST GET THE PARTY STARTED, THEY ARE THE PARTY.",
            imageURL: "https://s3.amazonaws.com/thebosco/angular-assets/images/what-is-the-bosco/press-logos/yahoo-news.png",
            link: "http://news.yahoo.com/blogs/trending-now/turn-yourself-very-own-gif-bosco-200208170.html"
        }, {
            id: 4,
            quote: "THE RESULTS CAN'T QUITE BE REPRODUCED ANYWHERE ELSE",
            imageURL: "https://s3.amazonaws.com/thebosco/angular-assets/images/what-is-the-bosco/press-logos/psfk-logo.jpg",
            link: "http://www.psfk.com/2014/09/gif-animation-photobooth-animation-overlay.html"
        }, {
            id: 5,
            quote: "THE PARTY'S MOST POPULAR ATTRACTION",
            imageURL: "https://s3.amazonaws.com/thebosco/angular-assets/images/what-is-the-bosco/press-logos/the-wall-street-journal.png",
            link: "http://www.wsj.com/articles/SB10001424127887323566804578549621182997116"
        }, {
            id: 6,
            quote: "10 COOL TECH TWISTS FOR ANY SUMMER PARTY",
            imageURL: "https://s3.amazonaws.com/thebosco/angular-assets/images/what-is-the-bosco/press-logos/time-magazine.png",
            link: "http://techland.time.com/2012/06/21/10-cool-tech-twists-for-any-summer-party/"
        }, {
            id: 7,
            quote: "THE BOSCO'S INTERACTIVE PHOTO BOOTH HAS BECOME WILDLY SUCCESSFUL FOR EVENTS...AROUND THE COUNTRY",
            imageURL: "https://s3.amazonaws.com/thebosco/angular-assets/images/what-is-the-bosco/press-logos/Brooklyn-Magazine.png",
            link: "http://www.bkmag.com/2012/08/24/inside-americas-roaming-photo-booth-the-boscos-10-best-pictures/"
        }, {
            id: 8,
            quote: "DEFINITELY, A FUN TOY TO HAVE AT PARTIES",
            imageURL: "https://s3.amazonaws.com/thebosco/angular-assets/images/what-is-the-bosco/press-logos/TAXI-logo.png",
            link: "http://designtaxi.com/interstitial.html?v=1&advertiser=External&return_url=http%3A%2F%2Fdesigntaxi.com%2Fnews%2F352842%2FNew-York-Company-Creates-Photobooth-That-Takes-3D-Animated-GIFs%2F"
        }, {
            id: 9,
            quote: "CUTTING EDGE OF SOCIAL MEDIA, MARKETING, AND DIGITAL TECHNOLOGY",
            imageURL: "https://s3.amazonaws.com/thebosco/angular-assets/images/what-is-the-bosco/press-logos/bizbash.png",
            link: "http://www.bizbash.com/nick-fehr-and-aaron-fisher-cohen/new-york/story/26311#.VqE4BVMrI_U"
        }], (init = function() {
            return $scope.logoSlides = logoSlides, $scope.quoteSlides = quoteSlides, $scope.whatIsTheBoscoVideo = {
                url: $sce.trustAsResourceUrl("https://player.vimeo.com/video/161245960?api=1&player_id=what-is-the-bosco-video"),
                player: {}
            }, window.prerenderReady = !0
        })()
    }]), angular.module("webApp.what-is-the-bosco", []).config(["$urlMatcherFactoryProvider", "$stateProvider", function($urlMatcherFactoryProvider, $stateProvider) {
        return $urlMatcherFactoryProvider.strictMode(!1), $urlMatcherFactoryProvider.caseInsensitive(!0), $stateProvider.state("what-is-the-bosco", {
            url: "/what-is-the-bosco",
            templateUrl: "what-is-the-bosco.template.html",
            controller: "WhatIsTheBoscoController",
            resolve: {
                $title: function() {
                    return "What Is The Bosco | The Bosco | New York City photo booth and video booth rentals"
                }
            }
        }).state("brooklyn", {
            url: "/brooklyn",
            templateUrl: "what-is-the-bosco.template.html",
            controller: "WhatIsTheBoscoController",
            resolve: {
                $title: function() {
                    return "What Is The Bosco | The Bosco | New York City photo booth and video booth rentals"
                }
            }
        }).state("los angeles", {
            url: "/losangeles",
            templateUrl: "what-is-the-bosco.template.html",
            controller: "WhatIsTheBoscoController",
            resolve: {
                $title: function() {
                    return "What Is The Bosco | The Bosco | New York City photo booth and video booth rentals"
                }
            }
        })
    }]), angular.module("webApp").directive("disableNgAnimate", ["$animate", function($animate) {
        return {
            restrict: "A",
            link: function(scope, element) {
                return $animate.enabled(!1, element)
            }
        }
    }]), angular.module("webApp").directive("focus", function($timeout, $parse) {
        return {
            restrict: "A",
            link: function(scope, element, attrs) {
                return scope.$watch(attrs.focus, function(newValue, oldValue) {
                    newValue && element[0].select()
                }), element.bind("blur", function(e) {
                    $timeout(function() {}, 0)
                }), element.bind("focus", function(e) {
                    $timeout(function() {
                        attrs.select + "=true"
                    }, 0)
                })
            }
        }
    }), angular.module("webApp").directive("boscoButton", function($timeout) {
        return {
            restrict: "EA",
            scope: {
                label: "=",
                ngDisabled: "=",
                primary: "="
            },
            link: function(scope) {
                return scope.skipInput = function() {
                    return scope.skipFunction()
                }
            },
            templateUrl: "bosco-button.template.html"
        }
    }), angular.module("webApp").directive("eventCoverWithYear", ["$filter", function($filter) {
        return {
            restrict: "A",
            scope: {
                event: "="
            },
            templateUrl: "event-cover-with-year.template.html"
        }
    }]), angular.module("webApp").directive("eventCover", ["$filter", function($filter) {
        return {
            restrict: "A",
            scope: {
                event: "="
            },
            templateUrl: "event-cover.template.html",
            controller: ["$scope", "AssetsManager", function($scope, AssetsManager) {
                return $scope.placeholder = AssetsManager.getPlaceholderImage()
            }]
        }
    }]), angular.module("webApp").directive("eventImage", ["$filter", function($filter) {
        return {
            restrict: "A",
            scope: {
                asset: "=",
                event: "=",
                placeholder: "="
            },
            templateUrl: "event-image.template.html"
        }
    }]), angular.module("webApp").directive("fullscreenContent", [function() {
        return {
            restrict: "A",
            transclude: !0,
            replace: !0,
            scope: {
                fullscreenOn: "=",
                toggleFullscreen: "&"
            },
            templateUrl: "fullscreen-content.template.html",
            link: function(scope, element, attrs) {
                return scope.$watch("fullscreenOn", function(newVal) {
                    if (newVal) return $(window.document).on("keyup", function(e) {
                        if (27 === e.keyCode) return scope.toggleFullscreen(), scope.$apply(), $(document).off("keyup")
                    })
                })
            }
        }
    }]), angular.module("webApp").directive("imageBox", function($timeout) {
        return {
            restrict: "EA",
            scope: {
                eventdata: "="
            },
            templateUrl: "image-box.template.html"
        }
    }), angular.module("webApp").directive("hires", [function() {
        return {
            restrict: "A",
            scope: {
                hires: "@"
            },
            link: function(scope, element, attrs) {
                return element.on("error", function() {
                    if (null != scope.hires && element.attr("src", scope.hires), element.hasClass("event-container-cover-image")) return element.parent("div").addClass("image-failed")
                }), element.on("load", function() {
                    return element.attr("src") === scope.hires && (element.removeClass("image-loader"), element.unbind("load")), element.attr("src", scope.hires), element.addClass("image-loaded")
                })
            }
        }
    }]), angular.module("webApp").directive("imageRowMobile", function($timeout) {
        return {
            restrict: "E",
            scope: {
                eventrowmobile: "="
            },
            templateUrl: "image-row-mobile.template.html"
        }
    }), angular.module("webApp").directive("imageRow", function($timeout) {
        return {
            restrict: "E",
            scope: {
                eventrow: "="
            },
            templateUrl: "image-row.template.html"
        }
    }), angular.module("webApp").directive("modal", [function() {
        return {
            restrict: "E",
            scope: {
                show: "="
            },
            replace: !0,
            transclude: !0,
            link: function(scope, element, attrs) {
                scope.dialogStyle = {}, attrs.width && (scope.dialogStyle.width = attrs.width), attrs.height && (scope.dialogStyle.height = attrs.height), scope.hideModal = function() {
                    scope.show = !1
                }
            },
            templateUrl: "modal.template.html"
        }
    }]), angular.module("webApp").directive("multiDayEventCover", ["$filter", function($filter) {
        return {
            restrict: "A",
            scope: {
                eventDay: "=",
                event: "="
            },
            templateUrl: "multiday-event-cover.template.html"
        }
    }]), angular.module("webApp").directive("onload", [function() {
        return {
            scope: {
                onload: "@"
            },
            link: function(scope, element, attrs) {
                return element.on("error", function() {
                    return console.log("error"), element.parent("div").addClass("image-failed")
                }), element.one("load", function() {
                    return element.addClass("image-loaded")
                })
            }
        }
    }]), angular.module("webApp").directive("wrapOwlcarousel", [function() {
        return {
            restrict: "E",
            link: function(scope, element, attrs) {
                var options;
                options = scope.$eval($(element).attr("data-options")), $(element).owlCarousel(options)
            }
        }
    }]), angular.module("webApp").directive("videoPlayer", ["$timeout", function($timeout) {
        return {
            restrict: "A",
            scope: {
                video: "="
            },
            link: function(scope, element, attrs) {
                var $closeButton, $playButton, addCloseVideoListeners, close, closeOnFinish, contentFadeOutTime, open, pause, play, removeCloseVideoListeners, videoFadeInDelay;
                return $playButton = element.find(".play-button"), $closeButton = element.find(".close-button"), contentFadeOutTime = 300, videoFadeInDelay = 300, play = function() {
                    if (null != scope.video.player) return scope.video.player.api("play")
                }, pause = function() {
                    if (null != scope.video.player) return scope.video.player.api("pause")
                }, open = function() {
                    return element.addClass("content-fade-out"), $timeout(function() {
                        return element.addClass("is-playing"), element.removeClass("content-fade-out"), $timeout(function() {
                            return play()
                        }, videoFadeInDelay)
                    }, contentFadeOutTime)
                }, close = function() {
                    return element.removeClass("is-playing"), removeCloseVideoListeners()
                }, closeOnFinish = function() {
                    if (null != scope.video.player) return scope.video.player.addEvent("ready", function() {
                        return scope.video.player.addEvent("finish", function() {
                            return close()
                        })
                    })
                }, $playButton.click(function() {
                    return open(), addCloseVideoListeners()
                }), addCloseVideoListeners = function() {
                    return $(document).keyup(function(e) {
                        if (27 === e.keyCode) return pause(), close()
                    }), $closeButton.click(function() {
                        return pause(), close()
                    })
                }, removeCloseVideoListeners = function() {
                    return $(document).off("keyup"), $closeButton.off("click")
                }
            }
        }
    }]), angular.module("webApp").directive("vimeo", ["$sce", function($sce) {
        return {
            restrict: "EA",
            replace: !0,
            scope: {
                video: "="
            },
            templateUrl: "vimeo.template.html",
            controller: ["$scope", "$element", "$attrs", "$timeout", function($scope, $element, $attrs, $timeout) {
                return $timeout(function() {
                    var player;
                    return player = $f($element[0]), $scope.video.player = player
                })
            }]
        }
    }]), angular.module("webApp").service("AssetsManager", ["$q", "$http", function($q, $http) {
        var placeholder;
        return placeholder = new Image, placeholder.src = "https://thebosco.s3.amazonaws.com/angular-assets/images/bosco-loader.gif", {
            _pool: {
                gallery_assets: [],
                carousel_assets: [],
                id: null,
                photo_data: {},
                event_data: {},
                slug: null,
                pendingImages: []
            },
            resetPool: function(id, slug) {
                return this._pool.gallery_assets = [], this._pool.carousel_assets = [], this._pool.id = id, this._pool.photo_data = {}, this._pool.event_data = {}, this._pool.slug = slug
            },
            cancelAllImages: function() {
                var ref;
                if (null != (ref = this._pool.pendingImages) ? ref.length : void 0) return this._pool.pendingImages.forEach(function(image) {
                    return image.canceller.resolve("cancelled")
                })
            },
            retrieveGalleryImages: function() {
                return this._pool.gallery_assets
            },
            getPlaceholderImage: function() {
                return placeholder.src
            },
            galleryCount: function() {
                return this._pool.gallery_count
            },
            storePhotoResponse: function(photoData) {
                return this._pool.id === photoData.event.id ? (this._pool.photo_data = photoData, this._pool.carousel_assets = photoData.photos || [photoData.photo] || []) : (this.resetPool(photoData.event.id), this._pool.photo_data = photoData, this._pool.carousel_assets = photoData.photos || [photoData.photo] || [])
            },
            retrievePhotoResponse: function(asset_code) {
                return this._pool.photo_data
            },
            storeEventResponse: function(eventData) {
                var scope;
                return scope = this, scope._pool.id === eventData.event.id ? (scope._pool.event_data = eventData, scope._pool.slug = eventData.event.slug) : (scope.resetPool(eventData.event.id, eventData.event.slug), scope._pool.event_data = eventData, scope._pool.gallery_assets = _.take(eventData.event.assets, 8))
            },
            retrieveEventResponse: function(slug) {
                var scope;
                return scope = this, scope._pool.slug === slug ? scope._pool.event_data : (scope.resetPool(), null)
            },
            loadImages: function(images, eventId, srcProperty, eventGallery) {
                var deferred, e, i, image, promises, scope;
                scope = this, deferred = $q.defer(), eventId !== scope._pool.id && scope.resetPool(eventId), eventGallery && images.forEach(function(image) {
                    if (!scope._pool.gallery_assets.find(function(asset) {
                            return asset.code === image.code
                        })) return scope._pool.gallery_assets.push(image)
                }), srcProperty = srcProperty ? srcProperty : "urlThumbSmall";
                try {
                    if (promises = [], !Array.isArray(images)) throw console.error("threw error"), new TypeError("No image list provided");
                    for (i = 0; i < images.length;) indexOf.call(scope._pool.gallery_assets, image) < 0 && (images[i].event_id = eventId, "urlThumbSmall" === srcProperty && this.loadImage(images[i], "urlThumbBig"), image = this.loadImage(images[i], srcProperty), promises.push(image)), i++;
                    1 === srcProperty.split(".").length ? eventGallery ? $q.all(promises).then(function() {
                        return deferred.resolve(scope._pool.gallery_assets)
                    }) : deferred.resolve(scope._pool.gallery_assets) : deferred.resolve(scope._pool.carousel_assets)
                } catch (error1) {
                    e = error1, console.error(e)
                }
                return deferred.promise
            },
            loadImage: function(image, srcProperty) {
                var deferred, e, existingAsset, nestedPath, scope;
                scope = this, deferred = $q.defer(), srcProperty = srcProperty ? srcProperty : "urlThumbSmall";
                try {
                    if (existingAsset = scope._pool.gallery_assets.concat(scope._pool.carousel_assets).find(function(asset) {
                            return null != asset && asset.code === image.code && asset[srcProperty + "_is_loaded"]
                        }), null == existingAsset)
                        if (null != image[srcProperty]) scope.requestImage(image[srcProperty], image, srcProperty, deferred);
                        else {
                            if (!(nestedPath = srcProperty.split(".").reduce(function(object, property) {
                                    return object ? object[property] : null
                                }, image))) throw new TypeError("No image provided");
                            scope.requestImage("https://s3.amazonaws.com/thebosco/" + nestedPath, image, srcProperty, deferred)
                        }
                    else deferred.resolve("already_loaded")
                } catch (error1) {
                    e = error1, deferred.reject(e)
                }
                return deferred.promise
            },
            requestImage: function(url, image, srcProperty, deferred) {
                var canceller, scope;
                return scope = this, scope._pool.pendingImages || (scope._pool.pendingImages = []), scope._pool.pendingImages.some(function(request) {
                    return request.url === url
                }) ? deferred.resolve("already_loaded") : (canceller = $q.defer(), scope._pool.pendingImages.push({
                    url: url,
                    canceller: canceller
                }), $http.get(url, {
                    responseType: "arraybuffer",
                    timeout: canceller.promise
                }).then(function(response) {
                    return scope.imageOnLoad(response, image, srcProperty, deferred)
                }).finally(function() {
                    return scope._pool.pendingImages = scope._pool.pendingImages.filter(function(request) {
                        return request.url !== url
                    })
                }))
            },
            imageOnLoad: function(response, image, srcProperty, deferred) {
                var existingAsset, imageData, propArray, ref, ref1, ref2, ref3, scope;
                return scope = this, "cancelled" === response || null != image.event_id && image.event_id !== scope._pool.id ? deferred.resolve(null) : (imageData = scope._arrayBufferToBase64(response.data), propArray = srcProperty.split("."), 1 === propArray.length && (null != (ref = scope._pool.gallery_assets) ? ref.length : void 0) > 0 ? existingAsset = scope._pool.gallery_assets.find(function(asset) {
                    return asset.code === image.code
                }) : 1 !== propArray.length && (null != (ref1 = scope._pool.carousel_assets) ? ref1.length : void 0) > 0 && (existingAsset = scope._pool.carousel_assets.find(function(asset) {
                    return asset.code === image.code
                })), null != existingAsset ? ("gif.filename" !== srcProperty || null == (null != (ref2 = existingAsset.print) ? ref2.filename : void 0) || existingAsset["gif.filename_is_loaded"] || (existingAsset["gif.filename_is_loaded"] = !0, existingAsset.print.filename = "https://s3.amazonaws.com/thebosco/" + existingAsset.print.filename), null != existingAsset[srcProperty] || 1 === srcProperty.split(".").length ? existingAsset[srcProperty] = imageData : existingAsset[propArray[0]] ? existingAsset[propArray[0]][propArray[1]] = imageData : existingAsset[propArray[0]] = {
                    filename: imageData
                }, existingAsset.is_loaded = !0, existingAsset[srcProperty + "_is_loaded"] = !0, ("urlThumbSmall" === srcProperty && existingAsset.urlThumbBig_is_loaded || "urlThumbBig" === srcProperty && existingAsset.urlThumbSmall_is_loaded) && delete existingAsset.urlThumbSmall) : ("gif.filename" !== srcProperty || null == (null != (ref3 = image.print) ? ref3.filename : void 0) || image["gif.filename_is_loaded"] || (image["gif.filename_is_loaded"] = !0, image.print.filename = "https://s3.amazonaws.com/thebosco/" + image.print.filename), null != image[srcProperty] ? (image[srcProperty] = imageData, scope._pool.gallery_assets.push(image)) : (image[propArray[0]][propArray[1]] = imageData, scope._pool.carousel_assets.push(image)), image.is_loaded = !0, image[srcProperty + "_is_loaded"] = !0), deferred.resolve(image))
            },
            _arrayBufferToBase64: function(buffer) {
                var binary, bytes, i, len;
                for (binary = "", bytes = new Uint8Array(buffer), len = bytes.byteLength, i = 0; i < len;) binary += String.fromCharCode(bytes[i]), i++;
                return "data:image/gif;base64," + window.btoa(binary)
            }
        }
    }]), angular.module("urlEscape", []).filter("urlEscape", [function() {
        return function(input) {
            var character, escape, escapeCharacters;
            escapeCharacters = {
                "%": "%25",
                "#": "%23",
                $: "%24",
                "&": "%26",
                "@": "%40",
                "`": "%60",
                "/": "%2F",
                ":": "%3A",
                ";": "%3B",
                "<": "%3C",
                "=": "%3D",
                ">": "%3E",
                "?": "%3F",
                "[": "%5B",
                "]": "%5D",
                "{": "%7B",
                "|": "%7C",
                "}": "%7D",
                "~": "%7E",
                "â€œ": "%22",
                "â€˜": "%27",
                "+": "%2B",
                ",": "%2C",
                " ": "%20"
            };
            for (character in escapeCharacters) escape = escapeCharacters[character], input = input.replace(RegExp("[" + character + "]", "g"), escape);
            return input
        }
    }]), angular.module("webApp").factory("Asset", [function() {
        var Asset;
        return Asset = function() {
            function Asset(data) {
                this.id = data.id, this.code = data.code, this.eventId = data.foreign_id, this.date = data.created, this.active = data.active, this.filename = data.filename, this.link = "/p/" + data.code, data.filename.indexOf(".jpg") > -1 ? (this.filename_180 = data.filename.replace(".jpg", "_180.jpg"), this.filename_270 = data.filename.replace(".jpg", "_270.jpg"), this.filename_400 = data.filename.replace(".jpg", "_400.jpg"), this.thumbnail_url = this.filename_400) : (this.filename_180 = data.filename.replace(".gif", "_180.gif"), this.filename_270 = data.filename.replace(".gif", "_270.gif"), this.filename_400 = data.filename.replace(".gif", "_400.gif"), this.thumbnail_url = this.filename_400), this.url = "https://s3.amazonaws.com/thebosco/" + this.filename, this.url_tiny = "https://s3.amazonaws.com/thebosco/" + this.filename_180, this.url_tiny_landscape = "https://s3.amazonaws.com/thebosco/" + this.filename_270, this.url_big = "https://s3.amazonaws.com/thebosco/" + this.filename_400
            }
            return Asset
        }()
    }]), angular.module("webApp").factory("Event", ["$filter", function($filter) {
        var Event;
        return Event = function() {
            function Event(data) {
                this.id = data.id, this.slug = data.slug, this.link = "/e/" + data.slug, this.active = data.active, this.title = data.title, this.titleShort = data.title_short, this.timelapse = data.timelapse, this.post_id = data.post_id, null != data.tweet_ipad ? "#" !== !data.tweet_ipad[0] && 0 !== data.tweet_ipad.length || (this.hashtag = data.tweet_ipad) : this.hashtag = "#" + data.tweet_ipad, this.date = Date.parse(data.date), this.endDate = Date.parse(data.end_date), this.formattedDate = $filter("date")(data.date, "MMMM d", data.utc_offset), this.formattedDateWithYear = this.formattedDate + ", " + $filter("date")(data.date, "yyyy", data.utc_offset), this.private = 1 === data.private_gallery, this.eventType = data.etype, this.orientation = data.orientation, this.reshareCopy = null != data.reshare_copy ? data.reshare_copy.replace("[[event_name]]", data.title_short) : void 0, this.postId = data.post_id, null != data.cover_url ? (this.originalCoverUrl = data.cover_url.replace("_180.jpg", ".jpg"), data.cover_url.indexOf(".jpg") > -1 ? this.cover_url = data.cover_url.replace(".jpg", "_400.jpg") : this.cover_url = data.cover_url.replace(".gif", "_400.gif")) : this.originalCoverUrl = data.cover_url, this.multiDayEvent = this.isMultiday(this.date, this.endDate)
            }
            return Event.prototype.isMultiday = function(startDate, endDate) {
                return moment(moment(endDate).diff(moment(startDate))) > 864e5
            }, Event.prototype.sortEventDays = function(assets) {
                var eventDays, position;
                return eventDays = {}, position = 1, _.each(assets, function(asset) {
                    var assetDate, assetDateMoment;
                    return assetDateMoment = moment(asset.date, "YYYY-MM-DDTHH:mm:ss"), assetDate = assetDateMoment.hour() < 7 ? assetDateMoment.subtract(1, "days").format("MMMM Do") : assetDateMoment.format("MMMM Do"), null == eventDays[assetDate] && (eventDays[assetDate] = {
                        day: position,
                        date: assetDate,
                        startDate: moment(asset.date, "YYYY-MM-DDTHH:mm:ss").startOf("day").add(7, "h"),
                        endDate: moment(asset.date, "YYYY-MM-DDTHH:mm:ss").startOf("day").add(31, "h"),
                        assets: []
                    }, position += 1), eventDays[assetDate].assets.push(asset)
                }), eventDays = _.filter(eventDays, function(eventDay) {
                    if (eventDay.assets.length > 1) return eventDay
                }), _.each(eventDays, function(eventDay) {
                    return eventDay.assets.length > 4 ? eventDay.filename = eventDay.assets[3].filename : eventDay.filename = eventDay.assets[0].filename
                }), eventDays
            }, Event
        }()
    }]), angular.module("webApp").factory("Job", ["$sce", function($sce) {
        var Job;
        return Job = function() {
            function Job(data) {
                var textArea;
                this.title = data.title, this.titleDashed = data.title.replace(/\s+/g, "-").toLowerCase(), this.location = data.location.name, textArea = document.createElement("textarea"), textArea.innerHTML = data.content, this.description = $sce.trustAsHtml(textArea.value), this.link = data.absolute_url
            }
            return Job
        }()
    }]), angular.module("webApp").factory("LookbookPost", [function() {
        var LookbookPost;
        return LookbookPost = function() {
            function LookbookPost(params) {
                var data;
                null != params.data["lookbook-post"] && (params.data && (data = params.data), params.id && (this.id = params.id), params.tags && (this.tags = params.tags), data["lookbook-post"].product && (this.product = data["lookbook-post"].product.value[0]), data["lookbook-post"].addons && (this.addons = data["lookbook-post"].addons.value), data["lookbook-post"].description && (this.description = data["lookbook-post"].description.value[0]), data["lookbook-post"].title && (this.title = data["lookbook-post"].title.value[0]), data["lookbook-post"]["featured-image"] && (this.image = data["lookbook-post"]["featured-image"].value), data["lookbook-post"]["video-link"] && (this.video = data["lookbook-post"]["video-link"].value), data["lookbook-post"]["image-gallery"] && (this.gallery = data["lookbook-post"]["image-gallery"].value), data["lookbook-post"].long_description && (this.long_description = data["lookbook-post"].long_description.value[0]), data["lookbook-post"].customizations && (this.customizations = data["lookbook-post"].customizations.value), data["lookbook-post"].related_case_studies && (this.related_case_studies = data["lookbook-post"].related_case_studies.value))
            }
            return LookbookPost
        }()
    }]), angular.module("webApp").factory("LookbookTag", [function() {
        var LookbookTag;
        return LookbookTag = function() {
            function LookbookTag(data, type) {
                this.name = data.text, this.type = type
            }
            return LookbookTag
        }()
    }]), angular.module("webApp").factory("Photo", ["$filter", function($filter) {
        var Photo, getDefaultFormat, getFormat, getGif, getPrint, hasGif, hasPrint, initFormat;
        return getGif = function(data) {
            return getFormat(data, ".gif")
        }, getPrint = function(data) {
            return getFormat(data, ".jpg")
        }, getFormat = function(data, ext) {
            var format;
            return format = _.find(data, function(asset) {
                return asset.filename.indexOf(ext) > -1
            }), format ? initFormat(format, ext) : null
        }, getDefaultFormat = function(data) {
            var ext, rawAsset;
            return rawAsset = _.find(data, function(asset) {
                return "raw" === asset.type
            }), ext = rawAsset.filename.slice(rawAsset.filename.lastIndexOf(".")), ".gif" === ext ? "gif" : ".jpg" === ext ? "print" : void 0
        }, initFormat = function(asset, ext) {
            var filename, filename_180, filename_270, filename_400, thumbnail_url;
            return filename = asset.filename, filename_180 = filename.replace(ext, "_180" + ext), filename_270 = filename.replace(ext, "_270" + ext), filename_400 = filename.replace(ext, "_400" + ext), thumbnail_url = filename.replace(ext, "_400" + ext), {
                id: asset.id,
                active: asset.active,
                filename: filename,
                filename_180: filename_180,
                filename_270: filename_270,
                filename_400: filename_400,
                thumbnail_url: thumbnail_url,
                url: "https://s3.amazonaws.com/thebosco/" + filename,
                url_tiny: "https://s3.amazonaws.com/thebosco/" + filename_180,
                url_tiny_landscape: "https://s3.amazonaws.com/thebosco/" + filename_270,
                url_big: "https://s3.amazonaws.com/thebosco/" + filename_400
            }
        }, hasGif = function() {
            return null !== this.gif
        }, hasPrint = function() {
            return null !== this.print
        }, Photo = function() {
            function Photo(data) {
                this.gif = getGif(data), this.print = getPrint(data), this.defaultFormat = getDefaultFormat(data), "gif" === this.defaultFormat ? this.defaultFilename = this.gif.filename : this.defaultFilename = this.print.filename, this.active = data[0].active, this.code = data[0].code, this.eventId = data[0].foreign_id, this.time = $filter("date")(data[0].created, "h:mma").toLowerCase(), this.date = data[0].created, this.hasGif = hasGif, this.hasPrint = hasPrint
            }
            return Photo
        }()
    }]), angular.module("webApp").factory("Post", [function() {
        var Post;
        return Post = function() {
            function Post(data) {
                this.id = data.id, this.slug = data.slug, this.title = data.title, this.content = data.content.replace(/([{])\w+}/g, "")
            }
            return Post
        }()
    }]), angular.module("webApp").factory("User", [function() {
        var User;
        return User = function() {
            function User(data) {
                this.id = data.id, this.name = data.name, this.title = data.title, this.bio = data.bio, this.twitter = data.twitter_id, this.instagram = data.instagram_id, null != data.profile && (this.profileImage = data.profile.filename)
            }
            return User
        }()
    }]), angular.module("webApp.adrollPixel", [function() {
        var adroll_adv_id, adroll_pix_id;
        return adroll_adv_id = "BS3GA66JG5CWZGOXKI3RR4", adroll_pix_id = "4H7L7M32HFDQHMF37TOGP3",
            function() {
                var _onload;
                _onload = function() {
                    var __adroll_loaded, host, scr;
                    return document.readyState && !/loaded|complete/.test(document.readyState) ? void setTimeout(_onload, 10) : window.__adroll_loaded ? (scr = document.createElement("script"), host = "https:" === document.location.protocol ? "https://s.adroll.com" : "http://a.adroll.com", scr.setAttribute("async", "true"), scr.type = "text/javascript", scr.src = host + "/j/roundtrip.js", void((document.getElementsByTagName("head") || [null])[0] || document.getElementsByTagName("script")[0].parentNode).appendChild(scr)) : (__adroll_loaded = !0, void setTimeout(_onload, 50))
                }, window.addEventListener ? window.addEventListener("load", _onload, !1) : window.attachEvent("onload", _onload)
            }()
    }]), angular.module("webApp.googleAnalytics", [function() {
        ! function(i, s, o, g, r, a, m) {
            i.GoogleAnalyticsObject = r, i[r] = i[r] || function() {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date, a = s.createElement(o), m = s.getElementsByTagName(o)[0], a.async = 1, a.src = g, m.parentNode.insertBefore(a, m)
        }(window, document, "script", "//www.google-analytics.com/analytics.js", "ga"), ga("create", "UA-26808254-1", "auto")
    }]), angular.module("webApp").service("AnalyticsService", ["$q", "$http", "constants", function($q, $http, constants) {
        this.gettingAnalytics = function(eventId) {
            var success;
            return success = function(response) {
                return 202 === response.data.status_code ? response.data.analytics : new Error("Event not found")
            }, $http({
                url: constants.apiURL + "/v1/analytics/" + eventId,
                method: "GET"
            }).then(success, this.genericErrorCallback)
        }
    }]), angular.module("webApp").service("AssetService", ["$q", "$http", "EventService", "Asset", "constants", function($q, $http, EventService, Asset, constants) {
        this.genericErrorCallback = function(response) {
            return console.log("error", response), $q.reject(response)
        }, this.gettingAsset = function(code) {
            var success;
            return success = function(response) {
                return response.data.data.length ? new Asset(response.data.data[0]) : {
                    isEmpty: !0
                }
            }, $http({
                url: constants.apiURL + "/search",
                method: "POST",
                data: {
                    tableName: "assets",
                    whereParams: {
                        code: code,
                        type: "raw"
                    },
                    limit: 10
                }
            }).then(success, this.genericErrorCallback)
        }, this.gettingUserAsset = function(id) {
            var success;
            return success = function(response) {
                return new Asset(response.data.data[0])
            }, $http({
                url: constants.apiURL + "/search",
                method: "POST",
                data: {
                    tableName: "assets",
                    whereParams: {
                        class: "User",
                        foreign_id: id
                    },
                    limit: 1
                }
            }).then(success, this.genericErrorCallback)
        }, this.gettingEventAssets = function(param) {
            var success;
            return success = function(response) {
                return response.data.data.map(function(asset) {
                    return new Asset(asset)
                })
            }, isNaN(param) ? $http({
                url: constants.apiURL + "/search",
                method: "POST",
                data: {
                    tableName: "events",
                    whereParams: {
                        slug: param
                    }
                }
            }).then(function(result) {
                return $http({
                    url: constants.apiURL + "/search",
                    method: "POST",
                    data: {
                        tableName: "assets",
                        whereParams: {
                            foreign_id: result.data.data[0].id,
                            active: 1,
                            class: "Event",
                            type: "raw"
                        },
                        limit: 1e5
                    }
                })
            }).then(success, this.genericErrorCallback) : $http({
                url: constants.apiURL + "/search",
                method: "POST",
                data: {
                    tableName: "assets",
                    whereParams: {
                        foreign_id: param,
                        active: 1,
                        class: "Event",
                        type: "raw"
                    },
                    limit: 1e5
                }
            }).then(success, this.genericErrorCallback)
        }, this.gettingEventMP4s = function(param) {
            var success;
            return success = function(response) {
                return response.data.data.map(function(asset) {
                    return new Asset(asset)
                })
            }, isNaN(param) ? $http({
                url: constants.apiURL + "/search",
                method: "POST",
                data: {
                    tableName: "events",
                    whereParams: {
                        slug: param
                    }
                }
            }).then(function(result) {
                return $http({
                    url: constants.apiURL + "/search",
                    method: "POST",
                    data: {
                        tableName: "assets",
                        whereParams: {
                            foreign_id: result.data.data[0].id,
                            active: 1,
                            type: "video"
                        },
                        limit: 1e5
                    }
                })
            }).then(success, this.genericErrorCallback) : $http({
                url: constants.apiURL + "/search",
                method: "POST",
                data: {
                    tableName: "assets",
                    whereParams: {
                        foreign_id: param,
                        active: 1,
                        type: "video"
                    },
                    limit: 1e5
                }
            }).then(success, this.genericErrorCallback)
        }, this.getAssetCount = function() {
            return $http({
                url: constants.apiURL + "/v1/total-asset-count",
                method: "GET"
            }).then(function(response) {
                return response.data.result
            })
        }
    }]), angular.module("webApp").service("constants", ["envService", function(envService) {
        console.log(envService.get()), this.apiURL = envService.read("apiURL")
    }]), angular.module("webApp").service("EventSearchService", ["$q", "$http", "Event", "constants", function($q, $http, Event, constants) {
        this.genericErrorCallback = function(response) {
            return console.log("error", response), $q.reject(response)
        }, this.searchEvents = function(searchTerm) {
            var success;
            return success = function(response) {
                return response = response.data.events.map(function(event, index) {
                    return new Event(event)
                }), response.reverse()
            }, $http({
                url: constants.apiURL + "/user-site/events/search",
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                data: "query=" + encodeURIComponent(searchTerm)
            }).then(success, this.genericErrorCallback)
        }
    }]), angular.module("webApp").service("EventService", ["$q", "$http", "Event", "constants", function($q, $http, Event, constants) {
        this.genericErrorCallback = function(response) {
            return $q.reject(response)
        }, this.gettingEvent = function(event, date) {
            var parameters, success;
            return success = function(response) {
                var ref;
                return 404 === response.data.status_code ? response.data : (null != (null != (ref = response.data.result.event) ? ref.hashtag : void 0) && (response.data.result.event.hashtag = response.data.result.event.hashtag.trim(), "#" !== response.data.result.event.hashtag[0] && response.data.result.event.hashtag.length && (response.data.result.event.hashtag = "#" + response.data.result.event.hashtag)), response.data.result)
            }, parameters = isNaN(event) ? {
                slug: event
            } : {
                id: event
            }, null != date && (parameters.date = date), $http({
                url: constants.apiURL + "/v1/user-site/events",
                method: "GET",
                params: parameters
            }).then(success, this.genericErrorCallback)
        }, this.gettingEvents = function(parameters) {
            var success;
            return success = function(response) {
                return response.data.events.map(function(event) {
                    return new Event(event)
                })
            }, $http({
                url: constants.apiURL + "/v1/user-site/galleries",
                method: "GET",
                params: parameters
            }).then(success, this.genericErrorCallback)
        }
    }]), angular.module("webApp").service("GoogleAnalyticsService", [function() {
        this.recordPageview = function(url) {
            return ga("set", "page", url), ga("send", "pageview")
        }
    }]), angular.module("webApp").service("InquiryService", ["$q", "$http", "constants", function($q, $http, constants) {
        this.submitInquiry = function(data) {
            var deferred;
            return deferred = $q.defer(), $http({
                url: constants.apiURL + "/v1/user-site/inquiry",
                method: "POST",
                data: data
            }).then(function(response) {
                return deferred.resolve(response)
            }), deferred.promise
        }, this.addSubscriber = function(subscriber) {
            var deferred;
            return deferred = $q.defer(), $http({
                url: constants.apiURL + "/subscribe",
                method: "POST",
                data: subscriber
            }).then(function(response) {
                return deferred.resolve(response)
            }), deferred.promise
        }
    }]), angular.module("webApp").service("JobService", ["$q", "$http", "Job", "constants", function($q, $http, Job, constants) {
        this.genericErrorCallback = function(response) {
            return console.log("error", response), $q.reject(response)
        }, this.gettingJobsListings = function() {
            var success;
            return success = function(response) {
                return response.data.jobs.jobs.length ? response.data.jobs.jobs.map(function(job) {
                    return new Job(job)
                }) : []
            }, $http({
                url: constants.apiURL + "/v1/user-site/jobs/thebosco",
                method: "GET"
            }).then(success, this.genericErrorCallback)
        }
    }]), angular.module("webApp").service("LookbookPostService", ["$q", "$http", "LookbookPost", "constants", function($q, $http, LookbookPost, constants) {
        this.genericErrorCallback = function(response) {
            return $q.reject(response)
        }, this.gettingLookbookPosts = function(parameters) {
            var success;
            return success = function(response) {
                return response.data.results.length > 0 ? response.data.results.map(function(result) {
                    return new LookbookPost(result)
                }) : []
            }, $http({
                url: constants.apiURL + "/lookbook-posts",
                method: "GET",
                params: parameters
            }).then(success, this.genericErrorCallback)
        }, this.gettingLookbookPost = function(parameters) {
            var success;
            return success = function(response) {
                var result;
                return response.data.results.length > 0 ? (result = response.data.results[0], new LookbookPost(result)) : []
            }, $http({
                url: constants.apiURL + "/lookbook-posts/" + parameters,
                method: "GET"
            }).then(success, this.genericErrorCallback)
        }
    }]), angular.module("webApp").service("LookbookTagService", ["$q", "$http", "LookbookTag", "constants", function($q, $http, LookbookTag, constants) {
        this.genericErrorCallback = function(response) {
            return $q.reject(response)
        }, this.gettingLookbookTags = function(parameters) {
            var success;
            return success = function(response) {
                var data, tags;
                return response.data.results.length > 0 ? (data = response.data.results[0].data["tag-list"], tags = [], Object.keys(data).forEach(function(key) {
                    return data[key].value.forEach(function(result) {
                        return tags.push(new LookbookTag(result, key))
                    })
                }), tags) : []
            }, $http({
                url: constants.apiURL + "/lookbook-tags",
                method: "GET",
                params: parameters
            }).then(success, this.genericErrorCallback)
        }
    }]), angular.module("webApp").service("MixpanelService", ["$rootScope", "$http", function($rootScope, $http) {
        var ignoreOffice;
        ignoreOffice = function() {
            return $http({
                url: "https://ipinfo.io",
                method: "GET"
            }).then(function(response) {
                return $http({
                    url: "bosco-ip?ip=" + response.data.ip,
                    method: "GET"
                }).then(function(internal) {
                    return internal.data
                })
            })
        }, this.getVariation = function() {
            return $rootScope.variation
        }, this.getTheBoscoTrackVariation = function(data) {
            return ignoreOffice().then(function(notTheBosco) {
                if (notTheBosco) return mixpanel.track("Get-The-Bosco", {
                    variation: 2,
                    campaign: $rootScope.originalRef
                })
            })
        }, this.getTheBoscoSubmission = function(data) {
            return ignoreOffice().then(function(notTheBosco) {
                if (notTheBosco) return mixpanel.track("Get-The-Bosco-Submission", {
                    email: data.email,
                    name: data.name,
                    email_subscription: data.emailToggle,
                    phone: data.phone,
                    organization: data.organization,
                    type: data.type,
                    event_length: data.dateType,
                    location: data.location,
                    other_location: data.otherLocation,
                    event_date: data.date,
                    notes: data.notes,
                    form_variation: 2,
                    completed: "New Get The Bosco (incomplete)" !== data.submission_type,
                    campaign: $rootScope.originalRef
                })
            })
        }, this.getTheBoscoComplete = function() {
            return ignoreOffice().then(function(notTheBosco) {
                if (notTheBosco) return mixpanel.track("Get-The-Bosco-Thanks", {
                    campaign: $rootScope.originalRef
                })
            })
        }, this.trackPhotoInteraction = function(data) {
            return ignoreOffice().then(function(notTheBosco) {
                if (notTheBosco) return mixpanel.track("photoInteraction", {
                    service: data.service,
                    action: data.action,
                    asset_id: data.asset_id,
                    photo_url: data.photo_url,
                    event_title: data.event_title,
                    event_id: data.event_id,
                    etype: data.etype
                })
            })
        }
    }]), angular.module("webApp").service("PhotoService", ["$q", "$http", "Photo", "AssetsManager", "constants", function($q, $http, Photo, AssetsManager, constants) {
        this.genericErrorCallback = function(response) {
            return $q.reject(response)
        }, this.gettingPhoto = function(code, store) {
            var success;
            return success = function(response) {
                return 404 === response.data.status_code ? response.data : (response.data.result.event.reshare_copy = response.data.result.event.reshare_copy || "", response.data.result.event.title = response.data.result.event.title || "", store && AssetsManager.storePhotoResponse(response.data.result), response.data.result)
            }, $http({
                url: constants.apiURL + "/v1/user-site/photo/" + code,
                method: "GET"
            }).then(success, this.genericErrorCallback)
        }
    }]), angular.module("webApp").service("PostService", ["$q", "$http", "Post", "constants", function($q, $http, Post, constants) {
        this.genericErrorCallback = function(response) {
            return $q.reject(response)
        }, this.gettingPost = function(slug) {
            var success;
            return success = function(response) {
                if (response.data.data.length > 0) return new Post(response.data.data[0])
            }, $http({
                url: constants.apiURL + "/search",
                method: "POST",
                data: {
                    tableName: "posts",
                    orderBy: {
                        date: "ASC"
                    },
                    whereParams: {
                        slug: slug
                    },
                    limit: 1
                }
            }).then(success, this.genericErrorCallback)
        }
    }]), angular.module("webApp").service("ShareService", ["$q", "$http", "constants", function($q, $http, constants) {
        this.genericErrorCallback = function(response) {
            return console.log("error", response), $q.reject(response)
        }, this.emailShareRequest = function(code, event_id, email, opt_in) {
            return $http({
                url: "/api/asset/share/email",
                method: "GET",
                params: {
                    asset_code: code,
                    event_id: event_id,
                    email_address: email,
                    opt_in: opt_in
                }
            }).then(function(response) {
                return response
            }).catch(function(error) {
                return this.genericErrorCallback
            })
        }
    }]), angular.module("webApp").service("UserService", ["$q", "$http", "User", "constants", function($q, $http, User, constants) {
        this.genericErrorCallback = function(response) {
            return console.log("error", response), $q.reject(response)
        }, this.getTeamData = function() {
            var success;
            return success = function(response) {
                return response.data.data
            }, $http({
                url: constants.apiURL + "/v1/user-site/team",
                method: "GET"
            }).then(success, this.genericErrorCallback)
        }
    }])
}).call(this), angular.module("webApp").run(["$templateCache", function($templateCache) {
    "use strict";
    $templateCache.put("404.html", '<html lang="en" ng-app="webApp"><head></head><title ng-bind="($title || \'The Bosco | New York City photo booth and video booth rentals\')">Errors | The Bosco | New York City photo booth and video booth rentals</title><link rel="icon" type="image/x-icon" href="/assets/images/favicon.ico"><meta charset="UTF-8"><meta name="fragment" content="!"><meta name="description" content="The Bosco is a New York and Los Angeles based company that rents state of the art photo booths and video confessionals. Weâ€™re inspired by early automatic self-portraits, and intrigued by combining emerging technology with art. The photo booth has come a long way since 1889, but there is still room for exploration and innovation. The Bosco is here to do that exploring."><meta name="keywords" content="photo booth rental nyc, photo booth rental la, photo booth rental los angeles, photo booths, photo booth services, photo booth rentals, photo booths in new york, vintage photo booths, branded photo booths, customized photo booths, photo, booth, wedding, photograph, event, rental, photobooth, classic, digital, bride, wedding, photos, photo booth, photobooth, smart design, stunning photographs, event photos, smilebooth, magbooth, magnolia photo booth, nyc photo booth, mvs, digital photo booth, polite in public, bkbooth, capturepod"><meta name="viewport" content="width=device-width,initial-scale=1"><meta property="fb:app_id" content="805819946215780"><meta property="og:title" content="The Bosco"><meta property="og:type" content="company"><meta property="og:url" content="http://www.thebos.co/private-gallery"><meta property="og:description" content="The Bosco"><meta property="og:site_name" content="The Bosco"><meta property="og:image" content="https://s3.amazonaws.com/thebosco/angular-assets/images/logo-square.jpg"><meta property="og:image:type" content="image/jpeg"><meta property="og:image:width" content="600"><meta property="og:image:height" content="525"><base href="/"><link rel="stylesheet" href="/assets/css/app.css"><!-- Fonts.com Fonts --><link href="https://fast.fonts.net/cssapi/ac1b6324-e5f2-45d3-bed0-d1b21657b3fb.css" rel="stylesheet"><body><!----><div ui-view="" autoscroll="true"><!-- including standard navigation header --><navigation class="sticky-navigation"><!-- add spacing on mobile --><div class="hidden-md hidden-lg" style="position: relative; height: 106px; background-color: black; content: \'\'"></div><!-- Navigation Slide-Over --><div class="slider mobile-navigation open-"><div class="slider-container" style="width: 90%; margin: 0px auto"><div style="clear: both; width: 90%; margin: 0 auto; margin-top: 15px"><!-- logo --><img alt="Brand" src="https://s3.amazonaws.com/thebosco/angular-assets/images/logo-shadow.png" class="img-responsive" style="float: left; max-height: 45px"> <!-- close button --><i ng-click="open()" class="navbar-mobile-close fa fa-close fa-2x fa-lg pull-right" style="margin-top: 5px"></i></div><div style="clear: both; width: 90%; margin: 0 auto; padding-top: 15px"><ul class="list-unstyled" style="margin-bottom: 25px"><li class="mobile-nav-list-item"><div><a ui-sref="what-is-the-bosco" class="mobile-nav-list-item-link" href="/what-is-the-bosco"><h3>WHAT IS THE BOSCO?</h3></a></div></li><li class="mobile-nav-list-item"><div><a ui-sref="photos" class="mobile-nav-list-item-link" href="/photos"><h3>SEE YOUR PHOTOS</h3></a></div></li><li class="mobile-nav-list-item"><div><a ui-sref="get-the-bosco" class="mobile-nav-list-item-link" href="/get-the-bosco"><h3>GET THE BOSCO</h3></a></div></li><li class="mobile-nav-list-item"><div><a ui-sref="case-studies.list" class="mobile-nav-list-item-link" href="/case-studies"><h3>CASE STUDIES</h3></a></div></li><li class="mobile-nav-list-item"><div><a ui-sref="products" href="/products"><h3>PRODUCTS</h3></a></div></li><li class="mobile-nav-list-item"><div><a href="http://curfew.tv" class="mobile-nav-list-item-link"><h3>CURFEW</h3></a></div></li><li class="mobile-nav-list-item"><div><a ui-sref="team" class="mobile-nav-list-item-link" href="/team"><h3>TEAM</h3></a></div></li><li class="mobile-nav-list-item"><div><a ui-sref="jobs" class="mobile-nav-list-item-link" href="/jobs"><h3>JOB</h3></a></div></li><li><h3 class="bosco-gold">212 235 8800</h3></li><li><h3 class="bosco-gold">HELLO@THEBOSCO.COM</h3></li></ul><ul class="list-inline center-block text-center bosco-padding col-xs-12"><li><a class="socials-bar-button socials-bar-button-footer" href="https://twitter.com/thebosco" target="_blank"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/twitter-icon-no-outline.png"></a></li><li><a class="socials-bar-button socials-bar-button-footer" href="http://thebosco.tumblr.com/" target="_blank"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/tumblr-icon-no-outline.png"></a></li><li><a class="socials-bar-button socials-bar-button-footer" href="https://www.facebook.com/theboscobooth" target="_blank"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/facebook-icon-no-outline.png"></a></li><li><a class="socials-bar-button socials-bar-button-footer" href="https://www.instagram.com/thebosco/" target="_blank"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/instagram-icon-no-outline.png"></a></li></ul></div></div></div><!-- Navigation Header --><div class="navigation-layout bosco-margin-top is-sticky-" ng-init="isCollapsed = !isCollapsed"><nav class="navbar" role="navigation"><div class="container"><!-- Logo --> <a ui-sref="main" class="pull-left" href="/"><img alt="Brand" src="https://s3.amazonaws.com/thebosco/angular-assets/images/logo-shadow.png" class="img-responsive bosco-logo"></a></div></nav></div></navigation><!-- Page Content --><div class="container event-container page-404 trade-gothic-20 bosco-navigation-padding"><h1 class="text-center">I\'m sorry! The page you are attempting to access does not exist!</h1><h2 class="text-center">You may return to the gallery list <a ui-sref="photos" style="text-decoration: underline" href="/photos">here</a>.</h2></div><!-- including standard footer --><!----><ng-include src="\'footer.template.html\'"><div id="container"><div class="row navigation-footer"><!-- email signup --><form action="//thebos.us2.list-manage.com/subscribe/post?u=7d62db2ee840bcdfe20f278b2&amp;id=68baa77397" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="form-group form-inline center-block text-center bosco-padding col-xs-12 ng-pristine ng-valid" target="_blank"><input type="email" value="" name="EMAIL" class="form-control bosco-form navigation-footer-email-signup-input required email" placeholder="Email for a good time" id="mce-EMAIL"> <button type="submit" name="subscribe" id="mc-embedded-subscribe" class="btn btn-default bosco-button-highlight navigation-footer-email-signup-button">SUBMIT</button><!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--><div style="position: absolute; left: -5000px" aria-hidden="true"><input type="text" placeholder="email for newsletter" name="b_7d62db2ee840bcdfe20f278b2_68baa77397" tabindex="-1" value=""></div></form><!-- sharing icons desktop --><ul class="list-inline center-block text-center bosco-padding col-xs-12 hidden-xs hidden-sm"><li><a class="socials-bar-button socials-bar-button-footer" href="https://twitter.com/thebosco" target="_blank"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/twitter-icon-no-outline.png"></a></li><li><a class="socials-bar-button socials-bar-button-footer" href="http://thebosco.tumblr.com/" target="_blank"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/tumblr-icon-no-outline.png"></a></li><li><a class="socials-bar-button socials-bar-button-footer" href="https://www.facebook.com/theboscobooth" target="_blank"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/facebook-icon-no-outline.png"></a></li><li><a class="socials-bar-button socials-bar-button-footer" href="https://www.instagram.com/thebosco/" target="_blank"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/instagram-icon-no-outline.png"></a></li></ul><!-- contact info --><ul class="list-unstyled center-block text-center navigation-footer-contact bosco-padding col-xs-6 col-xs-push-6 col-md-push-0 col-md-12"><li class="hidden-md hidden-lg trade-gothic-20" style="color: white">CONTACT</li><li><h2 class="trade-gothic hidden-xs hidden-sm" style="word-spacing: 2px; color: white">#THEBOSCO</h2></li><li class="trade-gothic hidden-md hidden-lg" style="color: white">#THEBOSCO</li><li>hello@thebosco.com</li><li>212.235.8800</li></ul><!-- links --><ul class="list-inline center-block text-center navigation-footer-links bosco-padding trade-gothic-20 col-xs-6 col-xs-pull-6 col-md-push-0 col-md-12"><li><a href="/jobs">JOBS</a></li><li><a href="/team">TEAM</a></li><li><a href="/what-is-the-bosco">WHAT IS THE BOSCO?</a></li><li><a href="/terms">TERMS</a></li><li><a href="http://curfew.tv">CURFEW</a></li></ul><!-- Made in New York --><ul class="list-inline center-block text-center navigation-footer-links bosco-padding trade-gothic-20 col-xs-6 col-xs-pull-6 col-md-push-0 col-md-12 hidden-xs hidden-sm"><li><a href="http://nytm.org/made-in-nyc">MADE IN NEW YORK</a></li></ul><!-- sharing icons mobile --><ul class="list-inline center-block text-center bosco-padding col-xs-12 hidden-md hidden-lg"><li><a class="socials-bar-button socials-bar-button-footer" href="https://twitter.com/thebosco" target="_blank"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/twitter-icon-no-outline.png"></a></li><li><a class="socials-bar-button socials-bar-button-footer" href="http://thebosco.tumblr.com/" target="_blank"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/tumblr-icon-no-outline.png"></a></li><li><a class="socials-bar-button socials-bar-button-footer" href="https://www.facebook.com/theboscobooth" target="_blank"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/facebook-icon-no-outline.png"></a></li><li><a class="socials-bar-button socials-bar-button-footer" href="https://www.instagram.com/thebosco/" target="_blank"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/instagram-icon-no-outline.png"></a></li></ul><!-- copyright info --><ul class="list-unstyled center-block text-center navigation-footer-copyright bosco-padding col-xs-12"><li class="hidden-md hidden-lg trade-gothic-20">Â© 2015 THE BOSCO</li></ul></div></div></ng-include></div></body></html>'),
        $templateCache.put("case-studies.list.template.html", '<!-- Reformation --><div class="case-study case-study-ratio-2 reformation jumbotron bosco-jumbotron"><a href="/case-studies/reformation"><div class="content"><div class="bosco-jumbotron-text text-center"><div class="hidden-xs hidden-sm"><h1 class="header" style="margin-bottom: 0px">REFORMATION</h1></div><h1 class="header hidden-md hidden-lg">REFORMATION</h1><div class="bosco-button-row"><a href="/case-studies/reformation" class="bosco-button-cta"><button class="btn bosco-button-transparent"><h4>VIEW</h4></button></a></div></div></div></a></div><!-- Kong --><div class="case-study case-study-ratio-2 kong-skull-island jumbotron bosco-jumbotron"><a href="/case-studies/kong-skull-island"><div class="content"><div class="bosco-jumbotron-text text-center"><div class="hidden-xs hidden-sm"><h1 class="header" style="margin-bottom: 0px">KONG: SKULL ISLAND</h1></div><h1 class="header hidden-md hidden-lg">KONG: SKULL ISLAND</h1><div class="bosco-button-row"><a href="/case-studies/kong-skull-island" class="bosco-button-cta"><button class="btn bosco-button-transparent"><h4>VIEW</h4></button></a></div></div></div></a></div><!-- #TommyNow --><div class="case-study case-study-ratio-2 tommy-now jumbotron bosco-jumbotron"><a href="/case-studies/tommy-now"><div class="content"><div class="bosco-jumbotron-text text-center"><div class="hidden-xs hidden-sm"><h1 class="header" style="margin-bottom: 0px">#TOMMYNOW</h1></div><h1 class="header hidden-md hidden-lg">#TOMMYNOW</h1><div class="bosco-button-row"><a href="/case-studies/tommy-now" class="bosco-button-cta"><button class="btn bosco-button-transparent"><h4>VIEW</h4></button></a></div></div></div></a></div><!-- Target x Marimekko --><div class="case-study case-study-ratio-2 target-marimekko jumbotron bosco-jumbotron"><a href="/case-studies/target-marimekko"><div class="content"><div class="bosco-jumbotron-text text-center"><div class="hidden-xs hidden-sm"><h1 class="header" style="margin-bottom: 0px">TARGET</h1><h1 class="header" style="margin: 0">+</h1><h1 class="header" style="margin-top: 0px">MARIMEKKO</h1></div><h1 class="header hidden-md hidden-lg">TARGET + MARIMEKKO</h1><div class="bosco-button-row"><a href="/case-studies/target-marimekko" class="bosco-button-cta"><button class="btn bosco-button-transparent"><h4>VIEW</h4></button></a></div></div></div></a></div><!-- Paintbox --><div class="case-study case-study-ratio-2 paintbox jumbotron bosco-jumbotron"><a href="/case-studies/paintbox"><div class="content"><div class="bosco-jumbotron-text text-center"><div class="hidden-xs hidden-sm"><h1 class="header" style="margin-bottom: 0px">THE BOSCO</h1><h1 class="header" style="margin: 0">+</h1><h1 class="header" style="margin-top: 0px">PAINTBOX</h1></div><h1 class="header hidden-md hidden-lg">PAINTBOX + THE BOSCO</h1><div class="bosco-button-row"><a href="/case-studies/paintbox" class="bosco-button-cta"><button class="btn bosco-button-transparent"><h4>VIEW</h4></button></a></div></div></div></a></div><!-- The Bosco Facial Recognition --><div class="case-study case-study-ratio-2 the-bosco-facial-recognition jumbotron bosco-jumbotron"><a href="/case-studies/the-bosco-facial-recognition"><div class="content"><div class="bosco-jumbotron-text text-center"><div class="hidden-xs hidden-sm"><h1 class="header" style="margin-top: 0px">THE BOSCO + PANDORA FACIAL RECOGNITION</h1></div><h1 class="header hidden-md hidden-lg">THE BOSCO + PANDORA FACIAL RECOGNITION</h1><div class="bosco-button-row"><a href="/case-studies/the-bosco-facial-recognition" class="bosco-button-cta"><button class="btn bosco-button-transparent"><h4>VIEW</h4></button></a></div></div></div></a></div><!-- #INSTANTARTIST --><div class="case-study case-study-ratio-2 INSTANTARTIST jumbotron bosco-jumbotron"><a href="/case-studies/INSTANTARTIST"><div class="content"><div class="bosco-jumbotron-text text-center"><div class="hidden-xs hidden-sm"><h1 class="header" style="margin-top: 0px">#INSTANTARTIST</h1></div><h1 class="header hidden-md hidden-lg">#INSTANTARTIST</h1><div class="bosco-button-row"><a href="/case-studies/INSTANTARTIST" class="bosco-button-cta"><button class="btn bosco-button-transparent"><h4>VIEW</h4></button></a></div></div></div></a></div><!-- H&M --><div class="case-study hm jumbotron bosco-jumbotron"><a href="/case-studies/hm"><div class="content"><div class="bosco-jumbotron-text text-center"><div class="hidden-xs hidden-sm"><h1 class="header" style="margin-bottom: 0px">THE BOSCO</h1><h1 class="header" style="margin: 0">+</h1><h1 class="header" style="margin-top: 0px">H&M</h1></div><h1 class="header hidden-md hidden-lg">THE BOSCO + H&M</h1><div class="bosco-button-row"><a href="/case-studies/hm" class="bosco-button-cta"><button class="btn bosco-button-transparent"><h4>VIEW</h4></button></a></div></div></div></a></div><!-- Emusic x Mother --><div class="case-study case-study-ratio-2 emusic jumbotron bosco-jumbotron"><a href="/case-studies/emusic-mother"><div class="content"><div class="bosco-jumbotron-text text-center"><div class="hidden-xs hidden-sm"><h1 class="header" style="margin-bottom: 0px">THE BOSCO</h1><h1 class="header" style="margin: 0">+</h1><h1 class="header" style="margin-top: 0px">EMUSIC & MOTHER</h1></div><h1 class="header hidden-md hidden-lg">THE BOSCO + EMUSIC & MOTHER</h1><div class="bosco-button-row"><a href="/case-studies/emusic-mother" class="bosco-button-cta"><button class="btn bosco-button-transparent"><h4>VIEW</h4></button></a></div></div></div></a></div><!-- Row Hotels --><div class="case-study case-study-ratio-2 row-hotels jumbotron bosco-jumbotron"><a href="/case-studies/row-hotels"><div class="content"><div class="bosco-jumbotron-text text-center"><div class="hidden-xs hidden-sm"><h1 class="header" style="margin-bottom: 0px">THE BOSCO</h1><h1 class="header" style="margin: 0">+</h1><h1 class="header" style="margin-top: 0px">ROW HOTELS</h1></div><h1 class="header hidden-md hidden-lg">THE BOSCO + ROW HOTELS</h1><div class="bosco-button-row"><a href="/case-studies/row-hotels" class="bosco-button-cta"><button class="btn bosco-button-transparent"><h4>VIEW</h4></button></a></div></div></div></a></div><!-- Gatorade --><div class="case-study case-study-ratio-2 gatorade jumbotron bosco-jumbotron"><a href="/case-studies/gatorade"><div class="content"><div class="bosco-jumbotron-text text-center"><div class="hidden-xs hidden-sm"><h1 class="header" style="margin-bottom: 0px">THE BOSCO</h1><h1 class="header" style="margin: 0">+</h1><h1 class="header" style="margin-top: 0px">GATORADE</h1></div><h1 class="header hidden-md hidden-lg">THE BOSCO + GATORADE</h1><div class="bosco-button-row"><a href="/case-studies/gatorade" class="bosco-button-cta"><button class="btn bosco-button-transparent"><h4>VIEW</h4></button></a></div></div></div></a></div><!-- LEXUS & PANDORA --><div class="case-study case-study-ratio-2 lexus-pandora jumbotron bosco-jumbotron"><a href="/case-studies/lexus-pandora"><div class="content"><div class="bosco-jumbotron-text text-center"><div class="hidden-xs hidden-sm"><h1 class="header" style="margin-bottom: 0px">THE BOSCO</h1><h1 class="header" style="margin: 0">+</h1><h1 class="header" style="margin-top: 0px">LEXUS & PANDORA</h1></div><h1 class="header hidden-md hidden-lg">THE BOSCO + LEXUS & PANDORA</h1><div class="bosco-button-row"><a href="/case-studies/lexus-pandora" class="bosco-button-cta"><button class="btn bosco-button-transparent"><h4>VIEW</h4></button></a></div></div></div></a></div><!-- HENESSY --><div class="case-study case-study-ratio-2 henessy jumbotron bosco-jumbotron"><a href="/case-studies/hennessy"><div class="content"><div class="bosco-jumbotron-text text-center"><div class="hidden-xs hidden-sm"><h1 class="header" style="margin-bottom: 0px">THE BOSCO</h1><h1 class="header" style="margin: 0">+</h1><h1 class="header" style="margin-top: 0px">HENNESSY</h1></div><h1 class="header hidden-md hidden-lg">THE BOSCO + HENNESSY</h1><div class="bosco-button-row"><a href="/case-studies/hennessy" class="bosco-button-cta"><button class="btn bosco-button-transparent"><h4>VIEW</h4></button></a></div></div></div></a></div><!-- Animated Overlays --><div class="case-study animated-overlay jumbotron bosco-jumbotron"><a href="/case-studies/animated-overlays"><div class="content"><div class="bosco-jumbotron-text text-center"><h1 class="header" style="margin-bottom: 0px">THE BOSCO</h1><h1 class="header" style="margin: 0">ANIMATED OVERLAYS</h1><div class="bosco-button-row"><a href="/case-studies/animated-overlays" class="bosco-button-cta"><button class="btn bosco-button-transparent"><h4>VIEW</h4></button></a></div></div></div></a></div><!-- DKNY --><div class="case-study case-study-ratio-2 dkny jumbotron bosco-jumbotron"><a href="/case-studies/dkny"><div class="content"><div class="bosco-jumbotron-text text-center"><div class="hidden-xs hidden-sm"><h1 class="header" style="margin-bottom: 0px">THE BOSCO</h1><h1 class="header" style="margin: 0">+</h1><h1 class="header" style="margin-top: 0px">DKNY</h1></div><h1 class="header hidden-md hidden-lg">THE BOSCO + DKNY</h1><div class="bosco-button-row"><a href="/case-studies/dkny" class="bosco-button-cta"><button class="btn bosco-button-transparent"><h4>VIEW</h4></button></a></div></div></div></a></div><!-- Met Life --><div class="case-study case-study-ratio-2 met-life jumbotron bosco-jumbotron"><a href="/case-studies/met-life"><div class="content"><div class="bosco-jumbotron-text text-center"><div class="hidden-xs hidden-sm"><h1 class="header" style="margin-bottom: 0px">THE BOSCO</h1><h1 class="header" style="margin: 0">+</h1><h1 class="header" style="margin-top: 0px">MET LIFE</h1></div><h1 class="header hidden-md hidden-lg">THE BOSCO + MET LIFE</h1><div class="bosco-button-row"><a href="/case-studies/met-life" class="bosco-button-cta"><button class="btn bosco-button-transparent"><h4>VIEW</h4></button></a></div></div></div></a></div><!-- Olympus --><div class="case-study case-study-ratio-2 olympus jumbotron bosco-jumbotron"><a href="/case-studies/olympus"><div class="content"><div class="bosco-jumbotron-text text-center"><div class="hidden-xs hidden-sm"><h1 class="header" style="margin-bottom: 0px">THE BOSCO</h1><h1 class="header" style="margin: 0">+</h1><h1 class="header" style="margin-top: 0px">OLYMPUS</h1></div><h1 class="header hidden-md hidden-lg">THE BOSCO + OLYMPUS</h1><div class="bosco-button-row"><a href="/case-studies/olympus" class="bosco-button-cta"><button class="btn bosco-button-transparent"><h4>VIEW</h4></button></a></div></div></div></a></div><!-- The Wired Pop Up --><div class="case-study case-study-ratio-2 wired jumbotron bosco-jumbotron"><a href="/case-studies/wired"><div class="content"><div class="bosco-jumbotron-text text-center"><div class="hidden-xs hidden-sm"><h1 class="header" style="margin-bottom: 0px">THE BOSCO</h1><h1 class="header" style="margin: 0">+</h1><h1 class="header" style="margin-top: 0px">WIRED</h1></div><h1 class="header hidden-md hidden-lg">THE BOSCO + WIRED</h1><div class="bosco-button-row"><a href="/case-studies/wired" class="bosco-button-cta"><button class="btn bosco-button-transparent"><h4>VIEW</h4></button></a></div></div></div></a></div>'), $templateCache.put("case-studies.template.html", '<!-- including standard navigation header --><navigation></navigation><!-- Case Studies / Lookbook header --><section class="case-studies-header"><div class="jumbotron bosco-jumbotron"><div class="container-fluid event-header-container" style="position: relative"><div class="bosco-jumbotron-text text-center"><div ng-if="isCaseStudies"><h1 class="header looks-text">CASE STUDIES</h1><p class="plantin-mt">Check out some of our coolest collaborations.</p></div><div ng-if="!isCaseStudies"><h1 class="header looks-text"><span>LOOKBOOK</span></h1><p class="plantin-mt">Explore custom and trending looks.</p></div><h2>{{ is(\'case-studies.list\') }}</h2><div class="bosco-switcher"><a ui-sref="case-studies.list" ui-sref-active="active" class="switch-case">CASE STUDIES</a><switch ui-sref="look-book" ui-sref-active="checked" ng-click="switchLookbookView($event)"></switch><a ui-sref="look-book" ui-sref-active="active" class="switch-look">LOOKBOOK</a></div></div></div></div></section><div ui-view></div><!-- including standard footer --><ng-include src="\'footer.template.html\'"></ng-include>'), $templateCache.put("case-study.template.html", '<!-- including standard navigation header --><navigation></navigation><!-- Video player jumbotron --><section class="main"><div video-player video="project.video" class="jumbotron bosco-jumbotron product-main"><div class="video"><vimeo video="project.video"></vimeo><i class="fa fa-2x fa-times close-button"></i></div><div style="position: relative; height: 100%"><div class="bosco-jumbotron-background" style="background-image: url(\'{{ project.backgroundImage }}\')"></div><img ng-src="{{ project.backgroundImage }}" style="visibility: hidden; width: 100%; height: 100%"><div class="bosco-jumbotron-content-container"><div class="bosco-jumbotron-content text-center"><h1>{{ project.projectName }}</h1><img class="play-button" src="https://s3.amazonaws.com/thebosco/angular-assets/images/play-button.png"></div></div></div></div></section><!-- Additional Randomly Selected Projects --><!-- Project Description --><div class="container-liquid case-study-project-description" style="background-color: white; color: black"><div class="container"><div class="row" style="margin: 70px auto"><div class="col-xs-12 text-center"><h2 style="padding-bottom: 5px">{{ project.projectName }}</h2><h4 class="plantin-mt" style="padding-bottom: 15px">{{ project.location }}</h4><p style="font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; max-width: 60%; margin: 0 auto" ng-bind-html="project.goal"></p></div></div></div><!-- Other Projects --><div class="row no-gutter" style="background-color: black"><div class="col-xs-12 col-md-6" ng-repeat="otherProject in otherProjects track by $index"><div class="bosco-jumbotron-text text-center"><h1 style="color: white">{{ otherProject.projectName}}</h1><hr class="hr-bosco"><a href="/case-studies/{{ otherProject.url }}"><button type="submit" class="btn btn-default bosco-button-black"><h4>VIEW</h4></button></a></div><img ng-src="{{ otherProject.backgroundImage }}" class="img-responsive img-faded" style="min-width: 100%"></div></div></div><!-- including standard footer --><ng-include src="\'footer.template.html\'"></ng-include>'), $templateCache.put("look-book-post.show.template.html", '<div class="lookbook-modal"><a class="text-uppercase modal-close hidden-xs hidden-sm pull-right" ng-click="modalClose()"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/small-close-x.png"> </a><a class="modal-close visible-xs visible-sm ng-modal-close-mobile pull-right" ng-click="modalClose()"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/small-close-x.png"></a><div class="row"><!-- PICTURE CAROUSEL COLUMN --><div class="col-md-6"><div class="modal-pictures"><!-- BIG IMAGE --><video ng-if="post.video" ng-src="{{post.video.url}}" autoplay loop onloadedmetadata="this.muted = true"></video><img ng-if="!post.gallery" ng-src="{{post.image.main.url}}" class="img-responsive"><slick ng-if="post.gallery" id="{{mainSlickId}}" settings="mainSlickConfig" class="slider-preview"><div><img ng-src="{{post.image.main.url}}"></div><div ng-if="post.gallery" ng-repeat="galleryItem in post.gallery"><img ng-src="{{galleryItem.image.value.main.url}}"></div></slick><!-- DOWNLOAD AND COPY BUTTONS --><div class="modal-buttons-row trade-gothic"><a type="button" name="button" class="btn btn-modal btn-download" download="{{downloadSrc}}" href="{{downloadSrc}}"></a> <button clipboard text="modalLink" type="button" name="button" class="btn btn-modal btn-link" ng-click="triggerTooltip()" uib-tooltip="Copied!" tooltip-is-open="copyTooltipIsOpen" tooltip-trigger="onmousedown" tooltip-placement="bottom"></button></div><!-- THUMBNAILS FOR CAROUSEL --><div class="modal-thumbnails row"><div class="col-md-12"><slick ng-if="post.gallery" id="{{navSlickId}}" settings="navSlickConfig" class="slider-thumbnails"><div><img ng-src="{{post.image.main.url}}"></div><div ng-if="post.image" ng-repeat="galleryItem in post.gallery"><img ng-src="{{galleryItem.image.value.main.url}}"></div></slick></div></div></div></div><!-- INFO AND ACCORDION COLUMN --><div class="col-md-6"><div class="modal-text-content trade-gothic"><div class="modal-text-header"><h1 class="text-uppercase">{{post.title.text}}</h1><p class="long-description">{{post.long_description.text}}</p><label class="orange-look-text">Product:</label><p class="product-look-title">{{post.product.text}}</p></div><div ng-if="post.customizations" class="modal-text-body"><label class="orange-look-text">Customizations:</label><!-- ACCORDION --><v-accordion class="vAccordion--default multi-cam-vaccordion" style="color: white" control="accordion"><!-- Interactive Software Engineer --><v-pane ng-repeat="customizationItem in post.customizations"><v-pane-header class="multi-cam-vaccordion-header"><span class="text-uppercase">{{customizationItem.title.value[0].text}}</span><div style="float: right"><img class="header-icon" src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/multicam/technical-information-arrow.png"></div></v-pane-header><v-pane-content class="multi-cam-vaccordion-content"><p>{{customizationItem.description.value[0].text}}</p></v-pane-content></v-pane></v-accordion></div><div class="modal-text-links"><a href="https://www.thebosco.com/get-the-bosco"><button type="button" name="button" class="btn btn-default bosco-button-highlight">BOOK LOOK</button></a><div ng-show="post.related_case_studies.length > 0" class="related-case-wrapper"><label class="orange-look-text">Related Case Studies:</label><div class="row"><div class="col-md-6 col-sm-6 col-xs-6 case-studies-links" ng-repeat="caseStudy in post.related_case_studies"><a href="{{caseStudy.url.value.url}}"><div class="modal-link-wrapper" style="background-image:url(\'{{caseStudy.image.value.main.url}}\')"><div class="modal-link-hover"><h2 class="text-center text-uppercase">{{caseStudy.title.value[0].text}}</h2></div></div></a></div></div></div></div></div></div></div></div>'), $templateCache.put("look-book.template.html", '<section><div ui-view></div></section><section class="lookbook-filters"><span ng-show="showResetFilter" class="col-md-12 col-sm-12 col-xs-12"><button ng-click="resetFilter()" class="btn bosco-button-transparent reset-filter-btn pull-right"><span>RESET FILTER</span></button> </span><span uib-dropdown on-toggle="toggled(open)" class="col-md-2 col-sm-12 col-xs-12 look-book-dropdown"><a href id="simple-dropdown" uib-dropdown-toggle><span ng-show="!product">SELECT PRODUCT </span><span ng-show="product" class="text-uppercase active">{{product}} </span><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/multicam/technical-information-arrow.png" class="pull-right"></a><ul class="dropdown-menu" uib-dropdown-menu aria-labelledby="simple-dropdown"><li ng-repeat="choice in productFilters"><a ui-sref="look-book({product: choice.name})" ui-sref-active="active">{{choice.name}}</a></li></ul></span><span uib-dropdown on-toggle="toggled(open)" class="col-md-2 col-sm-12 col-xs-12 col-md-offset-1 look-book-dropdown"><a href id="simple-dropdown" uib-dropdown-toggle><span ng-show="!customization">CUSTOMIZATION </span><span ng-show="customization" class="text-uppercase active">{{customization}} </span><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/multicam/technical-information-arrow.png" class="pull-right"></a><ul class="dropdown-menu" uib-dropdown-menu aria-labelledby="simple-dropdown"><li ng-repeat="choice in customizationFilters"><a ui-sref="look-book({customization: choice.name})" ui-sref-active="active">{{choice.name}}</a></li></ul></span><span ng-show="additionOneFilters" uib-dropdown on-toggle="toggled(open)" class="col-md-2 col-sm-12 col-xs-12 col-md-offset-1 look-book-dropdown"><a href id="simple-dropdown" uib-dropdown-toggle><span ng-show="!additionOne">PLUS ONE </span><span ng-show="additionOne" class="text-uppercase active">{{additionOne}} </span><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/multicam/technical-information-arrow.png" class="pull-right"></a><ul class="dropdown-menu" uib-dropdown-menu aria-labelledby="simple-dropdown"><li ng-repeat="choice in additionOneFilters"><a ui-sref="look-book({additionOne: choice})" ui-sref-active="active">{{choice}}</a></li></ul></span><span ng-show="additionTwoFilters" uib-dropdown on-toggle="toggled(open)" class="col-md-2 col-sm-12 col-xs-12 col-md-offset-1 look-book-dropdown"><a href id="simple-dropdown" uib-dropdown-toggle><span ng-show="!additionTwo">PLUS ONE </span><span ng-show="additionTwo" class="text-uppercase active">{{additionTwo}} </span><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/multicam/technical-information-arrow.png" class="pull-right"></a><ul class="dropdown-menu" uib-dropdown-menu aria-labelledby="simple-dropdown"><li ng-repeat="choice in additionTwoFilters"><a ui-sref="look-book({additionTwo: choice})" ui-sref-active="active">{{choice}}</a></li></ul></span><div class="clearfix"></div></section><section ng-show="!noResultsFound"><div infinite-scroll="nextPage()" infinite-scroll-distance="1" infinite-scroll-disabled="shouldDisableNextPage()"><div class="image-row" bindonce="chunkedPosts" ng-repeat="eventRow in chunkedPosts" ng-class="{reverse: $index % 2 != 0}" ng-if="screenSize > 992"><image-row eventrow="eventRow"></image-row></div><div class="image-row" bindonce="chunkedMobilePosts" ng-repeat="eventMobileRow in chunkedMobilePosts" ng-if="screenSize <= 992"><image-row-mobile eventrowmobile="eventMobileRow"></image-row-mobile></div></div><div class="dark-overlay-gradient"></div></section><section ng-show="noResultsFound"><h1 class="header no-content-text">WE DON\'T HAVE ANYTHING FOR THIS JUST YET.</h1></section>'), $templateCache.put("city.template.html", '<!-- including standard navigation header --><navigation></navigation><!-- carousel --><city-carousel start="{{ cityName }}"><div class="jumbotron bosco-jumbotron city-jumbotron bosco-padding" style="margin-top: 0"><div style="position: relative"><div class="bosco-jumbotron-text text-center"><h4 class="plantin-mt">Opened: Fall 2011</h4><h1 class="bosco-gold">BROOKLYN, NY</h1><h3>1182 FLUSHING AVE.</h3><h3>212.235.8800</h3><ul class="list-unstyled list-inline text-center cities-navigation"><li class="plantin-mt cities-navigation-active"><h3>brooklyn</h3></li><li class="plantin-mt"><h3 ng-click="goTo(\'los-angeles\')" style="cursor: pointer">los angeles</h3></li><li class="plantin-mt" ng-click="goTo(\'san-francisco\')"><h3 style="cursor: pointer">san francisco</h3></li><li class="plantin-mt" ng-click="goTo(\'chicago\')"><h3 style="cursor: pointer">chicago</h3></li></ul><div><a href="/get-the-bosco"><i class="text-center fa fa-4x fa-angle-up hidden-xs hidden-sm" style="text-align: center; vertical-align: middle"></i><h4 class="trade-gothic-increased-spacing text-center">CONTACT US</h4></a></div></div><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/city/bk-gif.gif" class="img-responsive img-faded"></div><!-- map --><div class="container-fluid" style="padding-left: 0; padding-right: 0"><img alt="The Bosco Brooklyn Map Location" class="img-responsive center-block get-the-bosco-city-map" src="https://s3.amazonaws.com/thebosco/angular-assets/images/city/map-2/city-maps-bk.png"></div></div><div class="jumbotron bosco-jumbotron city-jumbotron bosco-padding" style="margin-top: 0"><div style="position: relative"><div class="bosco-jumbotron-text text-center"><h4 class="plantin-mt">Opened: Spring 2013</h4><h1 class="bosco-gold">LOS ANGELES, CA</h1><h3>229 W. 31ST ST.</h3><h3>323.686.8374</h3><ul class="list-unstyled list-inline text-center cities-navigation"><li class="plantin-mt" ng-click="goTo(\'brooklyn\')"><h3 style="cursor: pointer">brooklyn</h3></li><li class="plantin-mt cities-navigation-active"><h3>los angeles</h3></li><li class="plantin-mt" ng-click="goTo(\'san-francisco\')"><h3 style="cursor: pointer">san francisco</h3></li><li class="plantin-mt" ng-click="goTo(\'chicago\')"><h3 style="cursor: pointer">chicago</h3></li></ul><div><a href="/get-the-bosco"><i class="text-center fa fa-4x fa-angle-up hidden-xs hidden-sm" style="text-align: center; vertical-align: middle"></i><h4 class="trade-gothic-increased-spacing text-center">CONTACT US</h4></a></div></div><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/city/la-gif.gif" class="img-responsive img-faded"></div><!-- map --><div class="container-fluid" style="padding-left: 0; padding-right: 0"><img alt="Bosco Los Angeles Map Location" class="img-responsive center-block get-the-bosco-city-map" src="https://s3.amazonaws.com/thebosco/angular-assets/images/city/city-maps-la-new.png"></div></div><div class="jumbotron bosco-jumbotron city-jumbotron bosco-padding" style="margin-top: 0"><div style="position: relative"><div class="bosco-jumbotron-text text-center"><h4 class="plantin-mt">Opened: Summer 2015</h4><h1 class="bosco-gold">SAN FRANCISCO, CA</h1><h3>1067 MARKET STREET</h3><h3>415.991.1182</h3><ul class="list-unstyled list-inline text-center cities-navigation"><li class="plantin-mt" ng-click="goTo(\'brooklyn\')"><h3 style="cursor: pointer">brooklyn</h3></li><li class="plantin-mt" ng-click="goTo(\'los-angeles\')"><h3>los angeles</h3></li><li class="plantin-mt cities-navigation-active"><h3 style="cursor: pointer">san francisco</h3></li><li class="plantin-mt" ng-click="goTo(\'chicago\')"><h3 style="cursor: pointer">chicago</h3></li></ul><div><a href="/get-the-bosco"><i class="text-center fa fa-4x fa-angle-up hidden-xs hidden-sm" style="text-align: center; vertical-align: middle"></i><h4 class="trade-gothic-increased-spacing text-center">CONTACT US</h4></a></div></div><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/city/sf-gif.gif" class="img-responsive img-faded"></div><!-- map --><div class="container-fluid" style="padding-left: 0; padding-right: 0"><img alt="The Bosco San Francisco Map Location" class="img-responsive center-block get-the-bosco-city-map" src="https://s3.amazonaws.com/thebosco/angular-assets/images/city/map-2/city-maps-sf-1.png"></div></div><div class="jumbotron bosco-jumbotron city-jumbotron bosco-padding" style="margin-top: 0"><div style="position: relative"><div class="bosco-jumbotron-text text-center"><h4 class="plantin-mt">Opened: Summer 2016</h4><h1 class="bosco-gold">CHICAGO, IL</h1><h3>2950 W. CHICAGO AVE</h3><h3>212.235.8800</h3><ul class="list-unstyled list-inline text-center cities-navigation"><li class="plantin-mt" ng-click="goTo(\'brooklyn\')"><h3 style="cursor: pointer">brooklyn</h3></li><li class="plantin-mt" ng-click="goTo(\'los-angeles\')"><h3>los angeles</h3></li><li class="plantin-mt" ng-click="goTo(\'san-francisco\')"><h3 style="cursor: pointer">san francisco</h3></li><li class="plantin-mt cities-navigation-active"><h3 style="cursor: pointer">chicago</h3></li></ul><div><a href="/get-the-bosco"><i class="text-center fa fa-4x fa-angle-up hidden-xs hidden-sm" style="text-align: center; vertical-align: middle"></i><h4 class="trade-gothic-increased-spacing text-center">CONTACT US</h4></a></div></div><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/city/chi.gif" class="img-responsive img-faded"></div><div class="container-fluid" style="padding-left: 0; padding-right: 0"><img alt="The Bosco Chicago Map Location" class="img-responsive center-block get-the-bosco-city-map" src="https://s3.amazonaws.com/thebosco/angular-assets/images/city/city-maps-chi.png"></div></div></city-carousel><!-- including standard footer --><ng-include src="\'footer.template.html\'"></ng-include>'), $templateCache.put("event.template.html", '<!-- including standard navigation header --><navigation></navigation><!-- Page Content --><div infinite-scroll="nextPage()" infinite-scroll-distance="2" class="container-fluid" style="padding-right: 0; padding-left: 0"><!-- Title Jumbotron --><div class="jumbotron bosco-jumbotron" style="padding: 0; margin: 0"><div class="container-fluid event-header-container" style="position: relative; padding-left: 0; padding-right: 0"><div class="event-header-images"><img src="{{ ::singleEvent.cover_url }}" class="background-blur pull-left" style="z-index: -2; max-height: 100%"> <img src="{{ ::singleEvent.cover_url }}" class="background-blur" style="z-index: -2; right:0; max-height: 100%"> <img src="{{ ::singleEvent.cover_url }}" class="img-responsive center-block" style="z-index: -1; max-height: 600px"></div><div class="bosco-jumbotron-text text-center event-header-text" ng-class="{\'long-title\': longTitle}"><h2 ng-if="!multidayTitle">{{ ::singleEvent.date | date:\'longDate\' : singleEvent.utc_offset | uppercase }}</h2><h2 ng-if="multidayTitle">{{ ::singleEvent.date | date:\'longDate\' : singleEvent.utc_offset | uppercase }} - {{ singleEvent.end_date | date:\'longDate\' : singleEvent.utc_offset | uppercase }}</h2><h1>{{ ::singleEvent.title | uppercase }}</h1><h3 class="text-center plantin-mt hidden-xs" ng-bind-html="eventPost"></h3><h3 ng-if="singleEvent.hashtag" class="plantin-mt">{{ ::singleEvent.hashtag }}</h3></div></div></div><!-- Event Filtering --><div class="row" style="background-color: black"><div class="col-xs-12 pull-left trade-gothic-increased-spacing" style="background-color: black"><ul class="list-unstyled" style="margin-top: 15px; margin-bottom: 15px"><li ng-if="multiDayGallery && !multiDayEvent"><h3><a ui-sref="event({eventSlug: singleEvent.slug})"><i class="fa fa-angle-down fa-rotate-90"></i> BACK TO DATES</a></h3></li></ul></div></div><!-- Multi-Day View --><div ng-if="multiDayEvent" class="row no-gutter no-vertical-padding bosco-padding"><div class="col-xs-6 col-sm-6 col-md-3 event-container" bindonce ng-repeat="eventDay in ::eventDays"><div multi-day-event-cover event-day="eventDay" event="singleEvent"></div></div></div><!-- Assets --><div ng-if="!multiDayEvent" class="row no-gutter no-vertical-padding bosco-padding"><!-- Asset Repeater --><div class="col-xs-6 col-sm-6 col-md-3 event-container" bindonce ng-repeat="asset in eventAssets track by $index"><div event-image asset="asset" event="singleEvent" placeholder="placeholder"></div></div></div><!-- Private Gallery View --><div ng-if="privateEvent" class="container event-container private-gallery"><h2 class="text-center">I\'m sorry! You are attempting to access a private gallery!</h2><h3 class="text-center">You may return to the gallery list <a ui-sref="photos">here</a>.</h3></div></div><!-- including standard footer --><ng-include src="\'footer.template.html\'"></ng-include>'), $templateCache.put("private-gallery.template.html", '<!-- including standard navigation header --><navigation></navigation><!-- Page Content --><div class="container event-container private-gallery trade-gothic-20 bosco-navigation-padding"><h1 class="text-center">I\'m sorry! You are attempting to access a private gallery!<h2 class="text-center">You may return to the gallery list <a ui-sref="photos" style="text-decoration: underline">here</a>.</h2></h1></div><!-- including standard footer --><ng-include src="\'footer.template.html\'"></ng-include>'), $templateCache.put("events.template.html", '<!-- including standard navigation header --><navigation></navigation><!-- content container --><div class="container-fluid bosco-navigation-padding" style="padding-left: 0; padding-right: 0"><!-- search form --><!-- Video Header --><div class="row bosco-padding" style="margin-left: 0; margin-right: 0"><div class="text-center"><h1 class="trade-gothic-20 bosco-padding" style="font-size: 63px">EXPLORE OUR PROJECTS</h1><h4 class="plantin-mt bosco-padding">the search is on</h4><form ng-submit="searchEvents(searchTerm)" class="form-horizontal bosco-padding"><div class="form-group has-feedback" style="margin-left: 0; margin-right: 0"><label class="control-label sr-only">Search...</label><div class="input-group bosco-search-container col-xs-10 col-xs-offset-1 col-sm-offset-3 col-sm-6"><input type="text" ng-model="searchTerm" class="form-control bosco-search text-uppercase" style="text-transform:uppercase" placeholder="SEARCH"> <span ng-click="searchEvents(searchTerm)" class="input-group-addon bosco-search-icon" id="basic-addon2"><span class="glyphicon glyphicon-search"></span></span></div></div></form></div></div><!-- conditional search display --><div ng-if="events.length === 0 && searching"><h2 class="events-search-conditional">Searching...</h2></div><div ng-if="events.length === 0 && !searching"><h2 class="events-search-conditional">No events found...</h2></div><!-- events --><div class="row no-gutter no-vertical-padding bosco-padding" infinite-scroll="nextPage()" infinite-scroll-distance="2" style="margin-left: 0; margin-right: 0"><!-- Event Repeater --><div class="col-xs-6 col-sm-6 col-md-3 event-container" bindonce="events" ng-repeat="event in events track by event.id"><div event-cover event="event"></div></div></div><ul class="list-unstyled center-block text-center trade-gothic-20" style="cursor: pointer; letter-spacing: 2px" ng-click="moreEvents()"><li><h4>VIEW MORE</h4></li><li><i class="fa fa-3x fa-angle-down"></i></li></ul></div><!-- including standard footer --><ng-include src="\'footer.template.html\'"></ng-include>'),
        $templateCache.put("search.template.html", '<!-- including standard navigation header --><navigation solid="tru"></navigation><!-- content container --><div class="container-fluid bosco-navigation-padding"><!-- search form --><!-- Video Header --><div class="row bosco-padding" style="margin-left: 0; margin-right: 0"><div class="text-center"><h1 class="trade-gothic-20 bosco-padding" style="font-size: 63px">THE SEARCH IS ON</h1><h4 class="plantin-mt bosco-padding">explore all projects below</h4><form ng-submit="searchEvents(searchTerm)" class="form-horizontal bosco-padding"><div class="form-group has-feedback"><label class="control-label sr-only">Search...</label><div class="input-group bosco-search-container col-xs-10 col-xs-offset-1 col-sm-offset-3 col-sm-6"><input type="text" ng-model="searchTerm" class="form-control bosco-search text-uppercase" style="text-transform:uppercase" placeholder="{{ searchTerm }}"> <span ng-click="searchEvents(search.term)" class="input-group-addon bosco-search-icon" id="basic-addon2"><span class="glyphicon glyphicon-search"></span></span></div></div></form></div></div><!-- conditional search display --><div ng-if="events.length === 0 && searching"><h2 class="events-search-conditional">Searching...</h2></div><div ng-if="events.length === 0 && !searching"><h2 class="events-search-conditional">No events found...</h2></div><!-- events --><div class="row no-gutter no-vertical-padding bosco-padding" infinite-scroll="nextPage()" infinite-scroll-distance="2" style="margin-left: 0; margin-right: 0"><!-- Event Repeater --><div class="col-xs-6 col-sm-6 col-md-3 event-container" bindonce="events" ng-repeat="event in events track by event.id"><div event-cover-with-year event="event"></div></div></div></div><!-- including standard footer --><ng-include src="\'footer.template.html\'"></ng-include>'), $templateCache.put("gtb-date-input.template.html", '<div class="gtb-date-input"><div class="gtb-date-container"><div class="label-container"><label class="animated fadeInUp gtb-select-label" for="organization">{{ labelText }}</label></div><div class="gtb-date-selector" id="organization"><span class="animated fadeInUp form-control gtb-date-span gtb-custom-input" ng-click="close()"><img ng-class="closed ? \'down-arrow\' : \'up-arrow\'" src="https://s3.amazonaws.com/thebosco/angular-assets/images/charity/scroll_arrow.png"><span ng-if="ngModel" class="animated fadeIn">{{ ngModel | date: \'shortDate\' }}</span></span><span ng-if="skip" class="skip animated fadeInUp" ng-click="skipInput(); $parent.closed = true" ng-class="ngModel ? \'after_select\' : \'before_select\'">SKIP</span><div ng-show="!closed" class="dropdown-content"><uib-datepicker show-weeks="false" ng-model="ngModel" class="animated fadeInUp gtb-calendar" ng-change="closed = !closed"></uib-datepicker></div></div></div></div>'), $templateCache.put("gtb-input.template.html", '<div class="gtb-input"><div class="gtb-container"><div class="label-container"><label class="animated fadeInUp gtb-label" for="organization">{{ labelText }}</label></div><div class="gtb-input-text" id="organization"><input type="{{type}}" class="animated fadeInUp form-control text-uppercase gtb-custom-input" focus="autoFocus" ng-model-options="{ debounce: 500}" ng-attr-placeholder="{{placeholder}}" ng-model="ngModel"><span ng-if="skip" class="skip animated fadeInUp" ng-click="skipInput();">SKIP</span></div></div></div>'), $templateCache.put("gtb-select.template.html", '<div class="gtb-select"><div class="gtb-select-container"><div class="gtb-select-label-container"><label class="animated fadeInUp gtb-select-label" for="organization">{{ labelText }}</label><label ng-if="subLabelText" class="animated fadeInUp sub-label">{{ subLabelText }}</label></div><div class="gtb-select-dropdown-container" id="organization"><span class="animated fadeInUp form-control gtb-select-input gtb-custom-input" ng-click="close()"><img ng-class="closed ? \'down-arrow\' : \'up-arrow\'" src="https://s3.amazonaws.com/thebosco/angular-assets/images/charity/scroll_arrow.png"> <span ng-if="ngModel" class="animated fadeIn">{{ ngModel }}</span> </span><span ng-if="skip" class="skip animated fadeInUp" ng-click="skipInput(); $parent.closed = true" ng-class="ngModel ? \'after_select\' : \'before_select\'">SKIP</span><ul ng-show="!closed" class="dropdown-content"><li class="animated fadeInUp gtb-list-item" ng-click="select(option); $parent.closed = !$parent.closed" ng-mouseenter="highlight()" ng-repeat="option in options">{{option}}</li></ul></div></div></div>'), $templateCache.put("hoshi-date-input.template.html", '<span class="select select--hoshi animated fadeInUp" ng-class="{\'select--filled\' : ngModel, \'invalid-input\' : ngRequired && !ngModel && submitAttempt}"><span class="select__field select__field--hoshi" ng-click="close()"><img ng-class="closed ? \'down-arrow\' : \'up-arrow\'" src="https://s3.amazonaws.com/thebosco/angular-assets/images/charity/scroll_arrow.png"> <span ng-if="ngModel" class="animated fadeIn">{{ ngModel | date: \'shortDate\' }}</span></span><label class="select__label select__label--hoshi" data-content="{{ label }}"><span class="select__label-content select__label-content--hoshi" data-content="{{ label }}">{{ label }}</span></label><div ng-show="!closed" class="dropdown-content--hoshi"><uib-datepicker show-weeks="false" ng-model="ngModel" class="animated fadeInUp content-center hoshi-calendar" ng-change="closed = !closed"></uib-datepicker></div></span>'), $templateCache.put("hoshi-input.template.html", '<span class="input input--hoshi animated fadeInUp" ng-class="{\'input--filled\' : form[name].$dirty, \'invalid-input\' : !form[name].$valid && submitAttempt}"><input autocomplete="off" autocomplete="false" class="input__field input__field--hoshi" type="{{type}}" name="{{name}}" ng-minlength="ngMinlength" ng-maxlength="ngMaxlength" ng-required="ngRequired" ng-pattern="ngPattern" ng-change="ngChange()" ng-trim="ngTrim" ng-model="ngModel" ng-model-options="modelOptions"><label class="input__label input__label--hoshi input__label--hoshi-color" data-content="{{ label }}"><span class="input__label-content input__label-content--hoshi" data-content="{{ label }}">{{ label }}</span></label></span>'), $templateCache.put("hoshi-select.template.html", '<span class="select select--hoshi animated fadeInUp" ng-class="{\'select--filled\' : ngModel, \'invalid-input\' : !form[name].$valid && submitAttempt}"><span class="select__field select__field--hoshi" ng-click="close()"><img ng-class="closed ? \'down-arrow\' : \'up-arrow\'" src="https://s3.amazonaws.com/thebosco/angular-assets/images/charity/scroll_arrow.png"> <span ng-if="ngModel" class="animated fadeIn">{{ ngModel }}</span></span><label class="select__label select__label--hoshi" data-content="{{ label }}"><span ng-if="subLabel && !ngModel" id="dontworry" class="select__label-content select__label-content--hoshi">{{subLabel}}</span> <span class="select__label-content select__label-content--hoshi" data-content="{{ label }}">{{ label }}</span></label><ul ng-show="!closed" class="dropdown-content--hoshi"><li class="animated fadeInUp gtb-list-item" ng-click="select(option); $parent.closed = !$parent.closed" ng-mouseenter="highlight()" ng-repeat="option in options">{{option}}</li></ul></span>'), $templateCache.put("get-the-bosco-three.template.html", '<!-- including standard navigation header --><navigation color="\'light-nav\'"></navigation><div class="return-to-header" style="background-color: white">\'\'</div><!-- Jumbotron --><section class="get-the-bosco-header get-the-bosco-three" id="gtb3header"><div class="jumbotron bosco-jumbotron"><div class="container-fluid event-header-container"><div class="bosco-jumbotron-text text-center"><h2 class="animated fadeInUp header"><span>LET\'S COLLABORATE</span></h2><div class="mid-header-container plantin-mt"><h3>We work with cool companies and</h3><h3>people around the globe.</h3></div><div class="sub-header-container hide-mobile"><h3 class="animated fadeInUp trade-gothic-20 sub-header bosco-gold">HELLO@THEBOSCO.COM / 212.235.8800</h3></div><div class="sub-header-container show-mobile"><h3 class="animated fadeInUp trade-gothic-20 sub-header bosco-gold">HELLO@THEBOSCO.COM</h3><a href="tel:212-235-8800"><h3 class="animated fadeInUp trade-gothic-20 sub-header bosco-gold">212.235.8800</h3></a></div></div></div></div></section><!-- Inquiry Form --><section class="get-the-bosco-three" id="formContainer"><div class="content-center form-container hide-mobile"><div class="gtb-tabs text-center trade-gothic-20"><ul class="tabrow"><li ng-class="secondForm ? \'not-selected\' : \'selected\'" id="basic" ng-click="secondForm = false">1. BASICS</li><li ng-class="secondForm ? \'selected\' : \'not-selected\'" ng-click="progress(emailForm.$valid)">2. DETAILS</li></ul></div><!-- Forms --><div class="content-center"><form autocomplete="false" autocomplete="off" name="emailForm" id="emailForm" class="form-inline content-center" ng-hide="secondForm"><!--Name Input--><div><hoshi-input ng-model-options="{ debounce: 200}" submit-attempt="submitAttempt" ng-model="inquiry.name" ng-required="true" label="Name" name="name" form="emailForm" class="animated fadeInUp"></hoshi-input></div><!--Email Input--><div class="input-child"><hoshi-input ng-model-options="{ debounce: 200}" submit-attempt="submitAttempt" ng-model="inquiry.email" id="email" ng-required="true" type="email" name="email" label="Email" form="emailForm" class="animated fadeInUp"></hoshi-input><!-- Email Collection Checkbox --><div class="form-group content-center text-center email-collection"><input id="checkbox-1" class="checkbox-custom" ng-model="inquiry.emailToggle" type="checkbox" checked><label for="checkbox-1" class="checkbox-custom-label">I WOULD LIKE TO RECEIVE EMAILS FROM THE BOSCO</label></div></div><!--What Are You Input--><div style="margin-top: -10px"><hoshi-select submit-attempt="submitAttempt" previous="emailForm.email.$invalid" ng-required="true" name="type" form="emailForm" class="animated fadeInUp" label="What are you?" ng-change="clearOrganization(inquiry.type)" options="organizations" ng-model="inquiry.type"></hoshi-select></div><div id="letsbegin"><bosco-button id="submit" type="submit" ng-click="progress(emailForm.$valid)" primary="true" label="\'Let\\\'s Begin\'"></bosco-button></div></form><form autocomplete="false" autocomplete="off" name="newGetTheBosco" id="newGetTheBosco" class="form-inline content-center" ng-show="secondForm"><!--Organization Name Input--><div><hoshi-input ng-model-options="{ debounce: 200}" submit-attempt="submitAttempt" ng-if="inquiry.type == \'A BRAND OR AGENCY\'" ng-model="inquiry.organization" type="text" name="typeName" label="Name of Brand or Agency" form="newGetTheBosco" class="animated fadeInUp"></hoshi-input><hoshi-input ng-model-options="{ debounce: 200}" submit-attempt="submitAttempt" ng-if="inquiry.type == \'A NON-PROFIT\'" ng-model="inquiry.organization" type="text" name="typeName" label="Name of Non-Profit" form="newGetTheBosco" class="animated fadeInUp"></hoshi-input></div><!--Date Type Input--><div ng-if="inquiry.type != \'GETTING MARRIED\' && inquiry.type != \'NOT AN ORGANIZATION\'"><hoshi-select previous="inquiry.organization" submit-attempt="submitAttempt" class="gtb-sae animated fadeInUp" theme="hoshi" label="THIS PROJECT IS" ng-model="inquiry.dateType" ng-change="dateTypeSelect(inquiry.dateType)" name="dateType" form="newGetTheBosco" options="dateTypes"></hoshi-select></div><!-- Phone Number Input --><div><hoshi-input ng-model-options="{ debounce: 200}" submit-attempt="submitAttempt" ng-model="inquiry.phone" name="phone" label="Phone #" form="newGetTheBosco" class="animated fadeInUp"></hoshi-input></div><!-- Project Location Input --><div ng-if="inquiry.dateType != \'A TOUR\' && inquiry.dateType != \'NOT AN EVENT \\/ OTHER\'"><hoshi-select previous="inquiry.phone" submit-attempt="submitAttempt" class="gtb-sae animated fadeInUp" theme="hoshi" ng-model="inquiry.locationType" label="Where is your project?" sub-label="Don\'t worry. We Go Everywhere" options="locations" name="locations" form="newGetTheBosco"></hoshi-select></div><!-- Other Location Input --><div ng-if="inquiry.locationType == \'OTHER\'"><hoshi-input ng-model-options="{ debounce: 200}" submit-attempt="submitAttempt" ng-model="inquiry.otherLocation" name="location" label="Which city?" form="newGetTheBosco" class="animated fadeInUp"></hoshi-input></div><div ng-if="inquiry.dateType != \'NOT AN EVENT / OTHER\'"><hoshi-date-input previous="inquiry.locationType" submit-attempt="submitAttempt" ng-model="inquiry.date" form="newGetTheBosco" name="date" label="{{eventDateLabel}}"></hoshi-date-input></div><!-- Details --><div class="details-container"><div class="anything-else content-center"><div><textarea class="animated fadeInUp form-control gtb-textarea" ng-model="inquiry.notes" rows="3" placeholder="ANYTHING ELSE? LET US KNOW..."></textarea></div></div><bosco-button ng-disabled="loading" id="submit" ng-click="submitForm(inquiry, \'new-form\', newGetTheBosco.$invalid)" primary="true" label="\'Make Magic\'"></bosco-button></div></form></div></div><div class="content-center form-container show-mobile"><form autocomplete="false" autocomplete="off" name="mobileGTB" id="mobileGTB" class="form-inline content-center"><!--Name Input--><div><hoshi-input submit-attempt="submitAttempt" ng-model="mobileInquiry.name" ng-model-options="{ debounce: 0}" ng-required="true" label="Name" name="name" form="mobileGTB" class="animated fadeInUp"></hoshi-input></div><!--Email Input--><div class="input-child"><hoshi-input submit-attempt="submitAttempt" ng-model="mobileInquiry.email" id="email" ng-model-options="{ debounce: 200}" ng-required="true" type="email" name="email" label="Email" form="mobileGTB" class="animated fadeInUp"></hoshi-input><!-- Email Collection Checkbox --><div class="form-group content-center text-center email-collection"><input id="checkbox-2" class="checkbox-custom" ng-model="mobileInquiry.emailToggle" type="checkbox"><label for="checkbox-2" class="checkbox-custom-label">I WOULD LIKE TO RECEIVE EMAILS FROM THE BOSCO</label></div></div><!-- Phone Number Input --><div id="phoneMobile"><hoshi-input submit-attempt="submitAttempt" ng-model="mobileInquiry.phone" ng-model-options="{ debounce: 0}" name="phone" label="Phone #" form="mobileGTB" class="animated fadeInUp"></hoshi-input></div><!--Date Type Input--><div><hoshi-select previous="mobileGTB.email.$invalid" submit-attempt="submitAttempt" class="gtb-sae animated fadeInUp" ng-required="true" theme="hoshi" label="Type of Event" ng-model="mobileInquiry.dateType" ng-change="dateTypeSelect(mobileInquiry.dateType)" name="dateType" form="mobileGTB" options="mobileDateTypes"></hoshi-select></div><div class="anything-else content-center"><div><textarea class="animated fadeInUp form-control gtb-textarea" ng-model="mobileInquiry.notes" rows="3" placeholder="ANYTHING ELSE? LET US KNOW..."></textarea></div></div><bosco-button ng-disabled="loading" id="submit" ng-click="submitForm(mobileInquiry, \'new-form\', mobileGTB.$invalid)" primary="true" label="\'Make Magic\'"></bosco-button></form></div><div class="content-center" style="display: table"><ng-include src="\'offices.template.html\'"></ng-include></div></section><!-- including standard footer --><ng-include src="\'footer.template.html\'"></ng-include>'), $templateCache.put("get-the-bosco.template.html", '<!-- including standard navigation header --><navigation></navigation><div class="return-to-header" style="opacity: 0">\'\'</div><!-- Jumbotron --><section class="get-the-bosco-header"><div class="jumbotron bosco-jumbotron"><div class="container-fluid event-header-container" style="position: relative"><div class="bosco-jumbotron-text text-center"><h2 class="header" style="letter-spacing: 2px">LET\'S COLLABORATE</h2><h3 class="plantin-mt">we do projects across the globe</h3><h3 class="plantin-mt bosco-gold">212.235.8800 | hello@thebosco.com</h3></div></div></div></section><!-- Inquiry Form --><!-- <section class="container-liquid get-the-bosco" style="background-color: black;">\n    <div class="get-the-bosco-cities-container"> --><!-- locations --><!-- <div class="row" style="background-color: black; color: white;">\n            <a href="/city/brooklyn" style="text-decoration: none;">\n                <div class="col-xs-12 col-md-3 no-gutter" style="padding-left: 0; padding-right: 0; border-top: #fff 1px solid; border-right: #fff 1px solid">\n                    <div>\n                        <div class="text-center">\n                            <h2>BROOKLYN</h2>\n                            <h4 style="margin-bottom: 20px;">1182 FLUSHING AVE.</h4>\n                        </div>\n                    </div>\n                </div>\n            </a>\n            <a href="/city/los-angeles" style="text-decoration: none;">\n                <div class="col-xs-12 col-md-3 no-gutter" style="padding-left: 0; padding-right: 0;border-top: #fff 1px solid; border-right: #fff 1px solid">\n                    <div>\n                        <div class="text-center">\n                            <h2>LOS ANGELES</h2>\n                            <h4 style="margin-bottom: 20px;">724 SOUTH SPRING ST.</h4>\n                        </div>\n                    </div>\n                </div>\n            </a>\n            <a href="/city/san-francisco" style="text-decoration: none;">\n                <div class="col-xs-12 col-md-3 no-gutter" style="padding-left: 0; padding-right: 0; border-top: #fff 1px solid; border-right: #fff 1px solid">\n                    <div>\n                        <div class="text-center">\n                            <h2>SAN FRANCISCO</h2>\n                            <h4 style="margin-bottom: 20px;">1067 MARKET ST.</h4>\n                        </div>\n                    </div>\n                </div>\n            </a>\n            <a href="/city/chicago" style="text-decoration: none;">\n                <div class="col-xs-12 col-md-3" style="padding-left: 0; padding-right: 0; border-top: #fff 1px solid;">\n                    <div>\n                        <div class="text-center">\n                            <h2>CHICAGO</h2>\n                            <h4 style="margin-bottom: 20px;">2950 W. CHICAGO AVE.</h4>\n                        </div>\n                    </div>\n                </div>\n            </a>\n        </div>\n    </div>\n</section> --><section class="container-liquid get-the-bosco" style="background-color: white" ng-controller="GetTheBoscoController"><div class="get-the-bosco-form-container"><!-- form --><form class="bosco-padding get-the-bosco-form" id="getTheBoscoForm" name="getTheBoscoForm" ng-submit="submitForm(inquiry, \'original\')"><!-- Name --><div class="form-group"><label style="width: 100%"><p class="form-control" style="width: 100%; color: #000; border: none">NAME</p></label><input type="text" class="form-control" ng-model="inquiry.name" required></div><!-- What Are You? --><div class="form-group"><label style="width: 100%"><p class="form-control" style="width: 100%; color: #000; border: none">WHO ARE YOU?</p></label><ul class="list-unstyled" style="color:#949494"><li class="get-the-bosco-form-list-item" ng-repeat="item in type" ng-click="setOrganization(item, type)" ng-class="{active: item.active}" style="letter-spacing: 2px"><label><input type="radio" ng-model="inquiry.type" ng-checked="( item.active == true )" value="{{ item.option }}" ng-change="organization(item.option, true)"> <span>{{ item.option }}</span></label></li></ul></div><div class="form-group" ng-show="displayOrganizationToggle"><input type="text" ng-model="inquiry.organization" class="form-control" ng-disabled="noOrganizationToggle" placeholder="{{ inquiry.organizationPlaceholder }}"></div><!-- Email --><div class="form-group"><label style="width: 100%"><p class="form-control" style="width: 100%; color: #000; border: none">EMAIL ADDRESS</p></label><input type="email" class="form-control" ng-model="inquiry.email" id="exampleInputEmail1" required></div><!-- Email Collection Checkbox --><div class="form-group"><input id="checkbox-1" class="checkbox-custom" ng-model="inquiry.emailToggle" type="checkbox" checked><label for="checkbox-1" class="checkbox-custom-label" style="color: #000">I WOULD LIKE TO RECEIVE EMAILS FROM THE BOSCO</label></div><!-- Phone --><div class="form-group"><label style="width: 100%"><p class="form-control" style="width: 100%; color: #000; border: none">PHONE NUMBER</p></label><input type="tel" ng-model="inquiry.phone" class="form-control" placeholder="(   )   - "></div><!-- Date Type Selection --><div class="form-group"><label style="width: 100%"><p class="form-control" style="width: 100%; color: #000; border: none">WHAT KIND OF PROJECT IS THIS?</p></label><ul class="list-unstyled" style="color:#949494"><li class="get-the-bosco-form-list-item" ng-repeat="item in dateType" ng-click="setDateToggle(item, dateType)" ng-class="{active: item.active}" style="letter-spacing: 2px"><label><input type="radio" ng-model="inquiry.dateType" ng-checked="( item.active == true )" value="{{ item.option }}"> <span>{{ item.option }}</span></label></li></ul></div><!-- Do You Have a Date? --><div class="form-group" ng-show="dateTypeToggle"><label style="width: 100%"><p class="form-control" style="width: 100%; color: #000; border: none">{{ dateTypeLabel }}</p></label><ul class="list-unstyled" style="color:#949494"><li class="get-the-bosco-form-list-item" ng-repeat="item in hasDateType" ng-click="hasDateToggle(item, hasDateType)" ng-class="{active: item.active}" style="letter-spacing: 2px"><label><input type="radio" ng-model="inquiry.hasDateType" ng-checked="( item.active == true )" value="{{ item.option }}"> <span>{{ item.option }}</span></label></li></ul></div><!-- Date Picker --><div class="form-group" ng-show="noDateToggle"><div style="display:inline-block; min-height:290px"><uib-datepicker ng-model="dt" class="well well-sm"></uib-datepicker></div><pre class="trade-gothic" style="text-transform: uppercase"><p style="font-size: 1.5em; margin-bottom: 0">Selected date is: <em>{{dt | date:\'fullDate\' }}</em></p></pre></div><!-- Location of Event --><div class="form-group" ng-show="locationToggle"><label style="width: 100%"><p class="form-control" style="width: 100%; color: #000; border: none">LOCATION</p><p class="form-control" style="width: 100%; color: #000; border: none; font-size: 16px">(WE GO EVERYWHERE)</p></label><ul class="list-unstyled" style="color:#949494"><li class="get-the-bosco-form-list-item" ng-repeat="item in locationType" ng-click="setLocationType(item, locationType)" ng-class="{active: item.active}" style="letter-spacing: 2px"><label><input type="radio" ng-model="inquiry.locationType" value="{{ item.option }}" ng-checked="( item.active == true )"> <span>{{ item.option }}</span></label></li></ul><div class="form-group" ng-show="otherLocationToggle"><input class="form-control" ng-model="inquiry.otherLocation" rows="1" placeholder="WHERE?"></div></div><!-- Reference Type Selection --><div class="form-group"><label style="width: 100%"><p class="form-control" style="width: 100%; color: #000; border: none">HAVE YOU WORKED WITH THE BOSCO BEFORE?</p></label><ul class="list-unstyled" style="color:#949494"><li class="get-the-bosco-form-list-item" ng-repeat="item in referenceType" ng-click="setReference(item, referenceType)" ng-class="{active: item.active}" style="letter-spacing: 2px"><label><input type="radio" ng-model="inquiry.pastEventToggle" value="{{ item.option }}" ng-checked="( item.active == true )"> <span>{{ item.option }}</span></label></li></ul></div><!-- Past Event Input Field --><div class="form-group" style="border: none" ng-show="pastEventReferenceToggle"><label style="width: 100%"><p class="form-control" style="width: 100%; color: #000; border: none">WHICH EVENT?</p></label><input class="form-control" ng-model="inquiry.pastEvent" rows="1" placeholder="WHICH EVENT?"></div><!-- Details --><div class="form-group" style="border: none"><label style="width: 100%"><p class="form-control" style="width: 100%; color: #000; border: none">ANYTHING ELSE?</p></label><textarea class="form-control" ng-model="inquiry.notes" rows="3" placeholder="LET US KNOW..."></textarea></div><!-- Submit Button --><div class="text-center" style="margin-top: 40px"><button type="submit" class="btn btn-default bosco-button-transparent" style="margin: 0 auto; color: black; border-color: black"><h4 style="padding-left: 40px; padding-right: 40px; margin: 5px auto">HIT US UP!</h4></button></div></form></div></section><div style="background-color: white; padding: 20px"><div class="text-center get-the-bosco" style="margin-bottom: 20px"><h1 class="plantin-mt" style="background-color: white; color: black; letter-spacing: 1.5px">check out our offices</h1><hr class="hr-bosco" style="margin-top:2px; width: 300px"></div><section class="container-liquid get-the-bosco" style="background-color: white"><div class="get-the-bosco-cities-container"><!-- locations --><div class="row" style="background-color: white; color: black"><a href="/city/brooklyn" style="text-decoration: none"><div class="col-xs-12 col-md-3 no-gutter" style="padding-left: 0; padding-right: 0; border-right: black 1px solid"><div><div class="text-center" style="color: black"><h3>BROOKLYN</h3><h4 style="margin-bottom: 20px">1182 FLUSHING AVE.</h4></div></div></div></a><a href="/city/los-angeles" style="text-decoration: none"><div class="col-xs-12 col-md-3 no-gutter" style="padding-left: 0; padding-right: 0; border-right: black 1px solid"><div><div class="text-center" style="color: black"><h3>LOS ANGELES</h3><h4 style="margin-bottom: 20px">229 W. 31ST ST.</h4></div></div></div></a><a href="/city/san-francisco" style="text-decoration: none"><div class="col-xs-12 col-md-3 no-gutter" style="padding-left: 0; padding-right: 0; border-right: black 1px solid"><div><div class="text-center" style="color: black"><h3>SAN FRANCISCO</h3><h4 style="margin-bottom: 20px">1067 MARKET ST.</h4></div></div></div></a><a href="/city/chicago" style="text-decoration: none"><div class="col-xs-12 col-md-3" style="padding-left: 0; padding-right: 0"><div><div class="text-center" style="color: black"><h3>CHICAGO</h3><h4 style="margin-bottom: 20px">2950 W. CHICAGO AVE.</h4></div></div></div></a></div></div></section></div><!-- including standard footer --><ng-include src="\'footer.template.html\'"></ng-include>'), $templateCache.put("inquiry-thanks.template.html", '<!-- including standard navigation header --><navigation></navigation><!-- Container --><section class="container-liquid get-the-bosco get-the-bosco-thanks" style="background-color: white"><div style="padding: 5px 30px; padding-bottom: 30px"><!-- Thank You Message --><div class="container text-center" style="color: black; padding-top: 60px; padding-bottom: 60px"><img class="img-responsive" src="https://s3.amazonaws.com/thebosco/angular-assets/images/get-the-bosco/inquiry-thankyou.gif"><h1 class="bosco-gold">THANK YOU FOR YOUR INTEREST IN THE BOSCO!</h1><h3>Your message has been received, and an account manager will reach out to you soon.</h3><h3>You will be redirected in {{ redirectTiming }} seconds, or you may return to the gallery list <a ui-sref="photos" class="bosco-gold" style="text-decoration: none">here</a>.</h3></div></div></section><!-- including standard footer --><ng-include src="\'footer.template.html\'"></ng-include>'), $templateCache.put("new-get-the-bosco.template.html", '<!-- including standard navigation header --><navigation color="\'light-nav\'"></navigation><div class="return-to-header" style="background-color: white">\'\'</div><!-- Jumbotron --><section class="get-the-bosco-header new-get-the-bosco"><div class="jumbotron bosco-jumbotron"><div class="container-fluid event-header-container"><div class="bosco-jumbotron-text text-center"><h2 class="animated fadeInUp header"><span>LET\'S</span><span class="bosco-gold"> COLLABORATE!</span></h2><h3 class="animated fadeInUp plantin-mt">we do projects across the globe</h3><h3 class="animated fadeInUp plantin-mt bosco-gold">212.235.8800 | hello@thebosco.com</h3></div></div></div></section><!-- Inquiry Form --><section class="container-fluid new-get-the-bosco"><div class="get-the-bosco-form-container content-center"><!-- Form --><form name="emailForm" id="emailForm" ng-submit="progress(emailForm.email.$valid)" class="form-inline content-center" ng-hide="secondForm"><div id="emailInput" class="form-group content-center"><label for="email" class="animated fadeInUp text-center">MY EMAIL IS</label><input id="email" name="email" placeholder="JOHN@SMITH.COM" ng-model-options="{ debounce: 200}" type="email" ng-init="input_focus = true" focus="input_focus" class="animated fadeInUp form-control" ng-model="inquiry.email" required><bosco-button id="begin" ng-disabled="emailForm.email.$invalid" ng-click="progress(emailForm.email.$valid)" primary="true" label="\'Let\\\'s Begin\'"></bosco-button></div><br><!-- Email Collection Checkbox --><div class="form-group content-center text-center email-collection"><input id="checkbox-1" class="checkbox-custom" ng-model="inquiry.emailToggle" type="checkbox" checked><label for="checkbox-1" class="animated fadeInUp checkbox-custom-label">I WOULD LIKE TO RECEIVE EMAILS FROM THE BOSCO</label></div></form><form name="newGetTheBosco" id="newGetTheBosco" class="form-inline content-center" ng-show="secondForm"><!-- Organization Type --><div class="form-group"><gtb-select label-text="\'I AM \'" ng-model="inquiry.type" options="organizations" ng-change="organizationSelect(inquiry.type)"></gtb-select></div><!-- Agency / Brand Name --><div ng-if="non_profit_selected || brand_selected" class="form-group"><gtb-input ng-if="brand_selected" label-text="\'THE AGENCY NAME IS \'" auto-focus="true" ng-model="inquiry.organization"></gtb-input><gtb-input ng-if="non_profit_selected" label-text="\'THE NON-PROFIT NAME IS \'" auto-focus="true" ng-model="inquiry.organization"></gtb-input></div><!-- Type of Event --><div ng-if="show_event_type || inquiry.organization" class="form-group"><gtb-select label-text="\'THIS PROJECT IS \'" ng-model="inquiry.dateType" options="dateTypes"></gtb-select></div><!-- Inquirer Name --><div ng-if="show_name || inquiry.dateType || inquiry.name" class="form-group"><gtb-input label-text="\'MY NAME IS\'" auto-focus="true" ng-model="inquiry.name"></gtb-input></div><!-- Phone Number --><div ng-if="inquiry.name || inquiry.phone" class="form-group"><gtb-input label-text="\'AND MY PHONE # IS\'" ng-model="inquiry.phone" skip="true" skip-function="showNext(\'date_field\')"></gtb-input></div><!-- Event Date --><div ng-if="inquiry.phone || date_field || inquiry.date" class="form-group"><gtb-date-input label-text="\'DATE OF MY EVENT IS \'" skip="true" skip-function="showNext(\'location_field\')" ng-model="inquiry.date"></gtb-date-input></div><!-- Location --><div ng-if="inquiry.date || location_field || inquiry.locationType" class="form-group"><gtb-select label-text="\'MY PROJECT IS IN \'" sub-label-text="\'(DON\\\'T WORRY. WE GO AROUND THE WORLD.)\'" ng-model="inquiry.locationType" options="locations" skip="true" ng-change="locationInput(inquiry.locationType)" skip-function="showNext(\'anything_else_field\')"></gtb-select></div><!-- Location Specification --><div ng-if="otherLocationInput" class="form-group"><gtb-input label-text="\'THE CITY IS \'" auto-focus="true" ng-model="inquiry.otherLocation"></gtb-input></div><!-- Details --><div class="form-group content-center text-center" ng-if="inquiry.otherLocation || anything_else_field || inquiry.notes"><div class="anything-else content-center"><div><label><p class="animated fadeInUp form-control label-text">ANYTHING ELSE?</p></label><textarea class="animated fadeInUp form-control gtb-textarea" ng-model="inquiry.notes" rows="3" placeholder="LET US KNOW..."></textarea></div></div><bosco-button id="submit" ng-click="submitForm(inquiry, \'new-form\')" primary="true" label="\'Let\\\'s Make Magic\'"></bosco-button></div></form></div><!-- including locations --><ng-include src="\'offices.template.html\'"></ng-include></section><!-- including standard footer --><ng-include src="\'footer.template.html\'"></ng-include>'),
        $templateCache.put("new-inquiry-thanks.template.html", '<!-- including standard navigation header --><navigation color="\'light-nav\'"></navigation><div class="return-to-header" style="background-color: white">\'\'</div><!-- Success Message --><section class="container-fluid new-get-the-bosco new-get-the-bosco-thanks"><div style="padding: 5px 30px; padding-bottom: 30px"><!-- Thank You Message --><div class="container text-center thank-you-message"><h1 class="bosco-gold">THANK YOU</h1><h3>FOR INTEREST IN THE BOSCO!</h3><h3 id="redirect">Your message has been received, and an account manager will reach out to you soon. You will be redirected in {{ redirectTiming }} seconds, or you may return to view our Case Studies <a ui-sref="case-studies" class="bosco-gold" style="text-decoration: none">here</a>.</h3></div></div></section><!-- including standard footer --><ng-include src="\'footer.template.html\'"></ng-include>'), $templateCache.put("job-listing.template.html", '<v-pane id="{{ job.titleDashed }}"><v-pane-header><div class="container-fluid"><div class="row jobs-header col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2"><span class="jobs-header-title">{{ job.title }}</span><img class="jobs-header-icon" src="https://s3.amazonaws.com/thebosco/angular-assets/images/jobs/desktop-down-arrow.png"></div></div></v-pane-header><v-pane-content><div class="container-fluid jobs-content-container"><div class="row col-xs-10 col-xs-offset-1" style="padding-left: 0; padding-right: 0"><div class="col-xs-12 col-sm-10 col-sm-offset-1 jobs-content" a-href="#"><hr class="hidden-xs hidden-sm"><h4 class="plantin-mt jobs-content-location">{{ job.location }}</h4><div ng-bind-html="job.description"></div><div class="text-center" style="margin-top: 30px"><a href="{{ job.link }}"><button type="submit" class="btn btn-default bosco-button-black">APPLY NOW</button> </a><button class="btn btn-default bosco-button-black" uib-popover="thebosco.com/jobs#{{ job.titleDashed }}" popover-trigger="outsideClick">SHARE</button></div></div></div></div></v-pane-content></v-pane>'), $templateCache.put("jobs.template.html", '<!-- including standard navigation header --><navigation></navigation><div class="return-to-header" style="opacity: 0">\'\'</div><!-- Jumbotron --><section class="main slim-jumbotron"><div video-player video="whatIsTheBoscoVideo" class="jumbotron bosco-jumbotron" style="margin-top: 0"><div class="video"><vimeo video="whatIsTheBoscoVideo"></vimeo><i class="fa fa-2x fa-times close-button"></i></div><div class="jumbotron bosco-jumbotron"><div class="bosco-jumbotron-content-wrapper"><div class="bosco-jumbotron-content-container"><div class="bosco-jumbotron-content text-center"><h1>WHAT\'S IT LIKE TO WORK AT THE BOSCO?</h1><div class="jobs-header-subtext"><p class="plantin-mt">Leading the way in <a href="/case-studies" style="color: #e7ab18">creative photo and video experiences.</a></p><p class="plantin-mt">Work with some of the <a href="/what-is-the-bosco" style="color: #e7ab18">world\'s biggest brands.</a></p><p class="plantin-mt">A place where <a href="/team" style="color: #e7ab18">talent, innovation, collaboration, and fun</a> come together.</p></div><div class="bosco-button-row" style="margin-top: 30px"><button class="btn bosco-button-highlight play-button" style="margin: 0 auto"><h4>WATCH VIDEO</h4></button></div></div></div></div></div></div></section><!-- No Positions Listed --><div ng-show="!jobs.length" class="row jobs-content" style="background-color: #fff; width: 100%; margin: 0; padding: 0"><div class="col-xs-12 col-sm-10 col-sm-offset-1" style="background-color: white; text-align: center; margin-top: 45px; margin-bottom: 45px"><h2>We donâ€™t currently have any listings advertised, but are always interested in hearing from exceptional candidates. If thatâ€™s you, drop us a line at <a href="mailto:jobs@thebosco.com?subject=Jobs Inquiry" class="bosco-gold" style="text-decoration: none">jobs@thebosco.com</a>!</h2></div></div><!-- Positions --><v-accordion class="vAccordion--default" style="background-color: white; margin-top: 30px" id="jobs-accordion" control="accordion"><!-- JOBS --><div ng-repeat="job in jobs track by $index"><div job-listing job="job"></div></div></v-accordion><!-- including standard footer --><ng-include src="\'footer.template.html\'"></ng-include>'), $templateCache.put("do-something.template.html", '<div id="do-something" style="overflow: hidden"><div class="full-screen-background-wrapper-full"><img class="full-screen-background-full" src="https://s3.amazonaws.com/thebosco/angular-assets/images/charity/grouped_background.png"></div><!-- Logo --><div class="do-something-logo" class="pointer"><a href="http://www.thebosco.com"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/charity/bosco_logo.png"></a></div><!-- Social Icons --><ul ng-if="slideIndex != 2" class="list-inline col-xs-12" id="do-something-social-icons-container"><li><a class="do-something-social-icons" href="https://www.instagram.com/thebosco/" target="_blank"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/charity/instagram-icon-no-outline-black.png"></a></li><li><a class="do-something-social-icons" href="https://www.facebook.com/theboscobooth" target="_blank"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/charity/facebook-icon-no-outline-black.png"></a></li><li><a class="do-something-social-icons" href="https://twitter.com/thebosco" target="_blank"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/charity/twitter-icon-no-outline-black.png"></a></li><li><a class="do-something-social-icons" href="http://thebosco.tumblr.com/" target="_blank"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/charity/tumblr-icon-no-outline-black.png"></a></li></ul><!-- Social Icons --><ul ng-if="slideIndex == 2" class="list-inline col-xs-12" id="do-something-social-icons-container"><li><a class="do-something-social-icons" href="https://www.instagram.com/thebosco/" target="_blank"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/instagram-icon-no-outline.png"></a></li><li><a class="do-something-social-icons" href="https://www.facebook.com/theboscobooth" target="_blank"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/facebook-icon-no-outline.png"></a></li><li><a class="do-something-social-icons" href="https://twitter.com/thebosco" target="_blank"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/twitter-icon-no-outline.png"></a></li><li><a class="do-something-social-icons" href="http://thebosco.tumblr.com/" target="_blank"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/tumblr-icon-no-outline.png"></a></li></ul><div id="do-something-header" class="section angular-section"><div class="content-container xs-top-margin xs-full-height" style="z-index: 2; letter-spacing: 1px"><!-- Content --><div class="content content-center content-center-mobile"><img id="do-something-icons" src="https://s3.amazonaws.com/thebosco/angular-assets/images/charity/section_1_body.png"></div><!-- Scroll --> <a href="#"><div class="hidden-xs" style="position: absolute; bottom: 0; margin-bottom: 50px; left: 50%; opacity: 0.7; -webkit-transform: translate(0, -50%); -ms-transform: translate(0, -50%); transform: translate(0, -50%)" ng-click="moveTo(1)"><img width="33px;" src="https://s3.amazonaws.com/thebosco/angular-assets/images/charity/scroll_arrow.png"></div></a></div></div><div id="do-something-description" class="section angular-section"><div class="content-container content-center xs-top-margin xs-full-height" style="z-index: 2; letter-spacing: 1px"><!-- Content --><div style="z-index: 2; text-align: center; letter-spacing: 1px"><div class="content content-center content-center-mobile"><div class="do-something-header-container content-center"><h3><span class="do-something-header">WE\'VE PARTNERED WITH DOSOMETHING.ORG</span></h3></div><div class="do-something-header-container"><h3><span class="do-something-header">AND WE\'RE MAKING A SMALL DONATION FOR</span></h3></div><div class="do-something-header-container"><h3><span class="do-something-header">EVERY GIF WE TAKE</span></h3></div><div class="do-something-paragraph-container"><p class="do-something-paragraph">DoSomething.org is a global movement for good. They\'re activating 5.5 million young people (in every US zip code and in 131 countries!) to make positive change both online and off.</p></div></div></div><!-- Scroll --> <a href="#"><div class="hidden-xs" style="position: absolute; bottom: 0; margin-bottom: 50px; left: 50%; opacity: 0.7; -webkit-transform: translate(0, -50%); -ms-transform: translate(0, -50%); transform: translate(0, -50%)" ng-click="moveTo(2)"><img width="33px;" src="https://s3.amazonaws.com/thebosco/angular-assets/images/charity/scroll_arrow.png"></div></a></div></div><div id="do-something-content" class="section angular-section"><div class="content-container content-center xs-top-margin xs-full-height" style="z-index: 2; letter-spacing: 1px"><!-- Content --><div style="z-index: 2; text-align: center; letter-spacing: 1px"><div class="content content-center content-center-mobile"><div class="do-something-results"><div class="do-something-header-container"><h3><span class="do-something-result-text">IMAGES TAKEN</span></h3></div><div class="do-something-header-container"><h3><span class="do-something-result-numbers">{{asset_count | number}}</span></h3></div><div class="do-something-header-container"><h3><span class="do-something-result-text">SO FAR...</span></h3></div></div><div class="pointer" style="margin-top: 2em"><a href="https://www.dosomething.org/us" target="_blank"><span class="do-something-learn-more">LEARN MORE ABOUT DOSOMETHING.ORG</span></a></div><img id="do-something-icons-small" src="https://s3.amazonaws.com/thebosco/angular-assets/images/charity/do_something_logo_white.png"></div></div></div></div><!-- Hamburger --><full-screen-navigation></div>'), $templateCache.put("year-in-review-2.template.html", '<!-- including standard navigation header --><ng-include src="\'navigation.template.html\'"></ng-include><!-- page --><div class="container-fluid" style="background-color: black"><!-- video --><div class="row videoWrapper"><!-- content from vimeo --><iframe src="https://player.vimeo.com/video/151607351?title=0&byline=0&portrait=0&autoplay=1" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div><!-- desktop footer --><div class="row year-in-review-footer-top-row hidden-xs"><div class="col-sm-3 align-left"><h4 style="color: #fff; margin-top: 1.4em">FOLLOW US</h4></div><div class="col-sm-3 col-sm-offset-6"><h3 style="color: #fff">SHARE VIDEO</h3></div></div><div class="row year-in-review-footer hidden-xs" style="margin-bottom: 70px"><!-- social icons --><div class="col-sm-3 year-in-review-buttons"><ul class="list-inline" style="margin-bottom: 0"><li><a href="https://twitter.com/thebosco"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/twitter-icon.png" style="max-height: 30px; margin-top: 5px"></a></li><li><a href="http://thebosco.tumblr.com/"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/tumblr-icon.png" style="max-height: 30px; margin-top: 5px"></a></li><li><a href="https://www.facebook.com/theboscobooth/"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/facebook-icon.png" style="max-height: 30px; margin-top: 5px"></a></li><li><a href="https://www.instagram.com/thebosco/"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/instagram-icon-yir.png" style="max-height: 30px; margin-top: 5px"></a></li></ul></div><!-- buttons --><div class="col-sm-6 year-in-review-buttons"><a href="/photos"><div class="year-in-review-button pull-left"><h3>VIEW MORE GIFS</h3></div></a><a href="/get-the-bosco"><div class="year-in-review-button pull-right"><h3>GET IN TOUCH</h3></div></a></div><!-- sharing --><div class="col-sm-3"><ul class="list-inline" style="max-height: 100%"><li><a href="http://www.facebook.com/sharer.php?u=http://thebosco.com/landing-page/year-in-review"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/facebook-icon.png" style="max-height: 35px"></a></li><li><a href="https://twitter.com/intent/tweet?url=http://thebosco.com/landing-page/year-in-review&text=The%20Bosco%20Year%20in%20Review"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/twitter-icon.png" style="max-height: 35px"></a></li></ul></div></div><!-- mobile footer --><div class="row year-in-review-footer-top-row hidden-sm hidden-md hidden-lg" style="margin-bottom: 35px"><!-- buttons --><div class="col-xs-12 year-in-review-buttons"><a href="/photos"><div class="year-in-review-button pull-left"><h3>VIEW MORE GIFS</h3></div></a><a href="/get-the-bosco"><div class="year-in-review-button pull-right"><h3>GET IN TOUCH</h3></div></a></div><!-- sharing --><div class="col-xs-12"><h3 style="color: #fff">SHARE VIDEO</h3><ul class="list-inline" style="max-height: 100%"><li><a href="http://www.facebook.com/sharer.php?u=http://thebosco.com/landing-page/year-in-review"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/facebook-icon.png" style="max-height: 35px"></a></li><li><a href="https://twitter.com/intent/tweet?url=http://thebosco.com/landing-page/year-in-review&text=The%20Bosco%20Year%20in%20Review"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/twitter-icon.png" style="max-height: 35px"></a></li></ul></div><!-- social icons --><div class="col-xs-12 year-in-review-buttons"><h3 style="color: #fff">FOLLOW US</h3><ul class="list-inline" style="margin-bottom: 0"><li><a href="https://twitter.com/thebosco"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/twitter-icon.png" style="max-height: 30px; margin-top: 5px"></a></li><li><a href="http://thebosco.tumblr.com/"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/tumblr-icon.png" style="max-height: 30px; margin-top: 5px"></a></li><li><a href="https://www.facebook.com/theboscobooth/"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/facebook-icon.png" style="max-height: 30px; margin-top: 5px"></a></li><li><a href="https://www.instagram.com/thebosco/"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/instagram-icon-yir.png" style="max-height: 30px; margin-top: 5px"></a></li></ul></div></div></div>'), $templateCache.put("year-in-review.template.html", '<!-- including standard navigation header --><ng-include src="\'navigation.template.html\'"></ng-include><!-- page --><div class="container-fluid" style="background-color: black"><!-- video --><div class="row videoWrapper"><!-- content from vimeo --><iframe src="https://player.vimeo.com/video/151416796?title=0&byline=0&portrait=0&autoplay=1" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div><!-- desktop footer --><div class="row year-in-review-footer-top-row hidden-xs"><div class="col-sm-3 align-left"><h4 style="color: #fff; margin-top: 1.4em">FOLLOW US</h4></div><div class="col-sm-3 col-sm-offset-6"><h3 style="color: #fff">SHARE VIDEO</h3></div></div><div class="row year-in-review-footer hidden-xs" style="margin-bottom: 70px"><!-- social icons --><div class="col-sm-3 year-in-review-buttons"><ul class="list-inline" style="margin-bottom: 0"><li><a href="https://twitter.com/thebosco"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/twitter-icon.png" style="max-height: 30px; margin-top: 5px"></a></li><li><a href="http://thebosco.tumblr.com/"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/tumblr-icon.png" style="max-height: 30px; margin-top: 5px"></a></li><li><a href="https://www.facebook.com/theboscobooth/"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/facebook-icon.png" style="max-height: 30px; margin-top: 5px"></a></li><li><a href="https://www.instagram.com/thebosco/"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/instagram-icon-yir.png" style="max-height: 30px; margin-top: 5px"></a></li></ul></div><!-- buttons --><div class="col-sm-6 year-in-review-buttons"><a href="/photos"><div class="year-in-review-button pull-left"><h3>VIEW MORE GIFS</h3></div></a><a href="/get-the-bosco"><div class="year-in-review-button pull-right"><h3>GET IN TOUCH</h3></div></a></div><!-- sharing --><div class="col-sm-3"><ul class="list-inline" style="max-height: 100%"><li><a href="http://www.facebook.com/sharer.php?u=http://thebosco.com/landing-page/year-in-review"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/facebook-icon.png" style="max-height: 35px"></a></li><li><a href="https://twitter.com/intent/tweet?url=http://thebosco.com/landing-page/year-in-review&text=The%20Bosco%20Year%20in%20Review"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/twitter-icon.png" style="max-height: 35px"></a></li></ul></div></div><!-- mobile footer --><div class="row year-in-review-footer-top-row hidden-sm hidden-md hidden-lg" style="margin-bottom: 35px"><!-- buttons --><div class="col-xs-12 year-in-review-buttons"><a href="/photos"><div class="year-in-review-button pull-left"><h3>VIEW MORE GIFS</h3></div></a><a href="/get-the-bosco"><div class="year-in-review-button pull-right"><h3>GET IN TOUCH</h3></div></a></div><!-- sharing --><div class="col-xs-12"><h3 style="color: #fff">SHARE VIDEO</h3><ul class="list-inline" style="max-height: 100%"><li><a href="http://www.facebook.com/sharer.php?u=http://thebosco.com/landing-page/year-in-review"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/facebook-icon.png" style="max-height: 35px"></a></li><li><a href="https://twitter.com/intent/tweet?url=http://thebosco.com/landing-page/year-in-review&text=The%20Bosco%20Year%20in%20Review"><img src="/assets/images/twitter-icon.png" style="max-height: 35px"></a></li></ul></div><!-- social icons --><div class="col-xs-12 year-in-review-buttons"><h3 style="color: #fff">FOLLOW US</h3><ul class="list-inline" style="margin-bottom: 0"><li><a href="https://twitter.com/thebosco"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/twitter-icon.png" style="max-height: 30px; margin-top: 5px"></a></li><li><a href="http://thebosco.tumblr.com/"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/tumblr-icon.png" style="max-height: 30px; margin-top: 5px"></a></li><li><a href="https://www.facebook.com/theboscobooth/"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/facebook-icon.png" style="max-height: 30px; margin-top: 5px"></a></li><li><a href="https://www.instagram.com/thebosco/"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/instagram-icon-yir.png" style="max-height: 30px; margin-top: 5px"></a></li></ul></div></div></div>'), $templateCache.put("layout.template.html", '<!DOCTYPE html><html lang="en" ng-app="webApp"><head><title ng-bind="($title || \'The Bosco | New York City photo booth and video booth rentals\')"></title><link rel="icon" type="image/x-icon" href="https://s3.amazonaws.com/thebosco/angular-assets/images/favicon.ico"><link rel="canonical" href="http://www.thebosco.com{{ canonical}}"><meta name="description" content="{{ metaDescription }}"><meta charset="UTF-8"><meta name="fragment" content="!"><meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no"><meta property="fb:app_id" content="805819946215780"><meta property="og:title" content="{{ eventTitle }}"><meta property="og:type" content="company"><meta property="og:url" content="{{$baseUrl}}{{ $currentURL }}"><meta property="og:description" content="{{ eventShortTitle }}"><meta property="og:site_name" content="The Bosco"><meta property="og:image" content="{{ shareImage }}"><meta property="og:image:type" content="{{ contentType }}"><meta property="og:image:width" content="{{ contentWidth }}"><meta property="og:image:height" content="{{ contentHeight }}"><base href="/"><script type="application/ld+json">{\n            "@context" : "http://schema.org",\n            "@type" : "Organization",\n            "name" : "The Bosco",\n            "url" : "http://www.thebosco.com",\n            "sameAs" : [ "https://twitter.com/thebosco", "http://thebosco.tumblr.com/tagged/lookbook", "https://www.facebook.com/theboscobooth", "https://www.instagram.com/thebosco"]\n        }</script><!-- build:css /assets/css/app.css --><link href="../node_modules/ng-input/dist/css/ng-input.css" rel="stylesheet"><link href="../node_modules/angular-material/modules/js/gridList/gridList.min.css" rel="stylesheet"><link href="../node_modules/ng-table/dist/ng-table.css" rel="stylesheet"><link href="../node_modules/bootstrap/dist/css/bootstrap.css" rel="stylesheet"><script src="../node_modules/angular-ui-switch/angular-ui-switch.min.css"></script><link href="../node_modules/v-accordion/dist/v-accordion.css" rel="stylesheet"><link href="../node_modules/slick-carousel/slick/slick.css" rel="stylesheet"><link href="../node_modules/slick-carousel/slick/slick-theme.css" rel="stylesheet"><link href="../node_modules/angular-loading-bar/build/loading-bar.css" rel="stylesheet"><link href="../node_modules/animate.css/animate.min.css" rel="stylesheet"><link href="../lib/css/owl.carousel.css" rel="stylesheet"><link rel="stylesheet" type="text/css" href="../webapp/less/app.css"><!-- endbuild --><!-- Fonts.com Fonts --><link href="https://fast.fonts.net/cssapi/ac1b6324-e5f2-45d3-bed0-d1b21657b3fb.css" rel="stylesheet"></head><body ng-class="{ \'full-height\' : isFullHeight }"><div ui-view autoscroll="false" ng-class="{ \'full-height\' : isFullHeight }"></div><script src="https://connect.facebook.net/en_US/all.js"></script><!-- build:js /assets/js/vendorApp.js --><script src="../node_modules/jquery/dist/jquery.js"></script><script src="../node_modules/moment/min/moment.min.js"></script><script src="../node_modules/lodash/dist/lodash.min.js"></script><script src="../node_modules/vimeo-froogaloop2/javascript/froogaloop.js"></script><script src="../node_modules/fullpage.js/dist/jquery.fullpage.js"></script><script src="../node_modules/jquery-scrollify/jquery.scrollify.js"></script><script src="../node_modules/slick-carousel/slick/slick.js"></script><script src="../lib/js/owl.carousel.min.js"></script><script src="../node_modules/mixpanel-browser/mixpanel-jslib-snippet.min.js"></script><!-- load angular and angular dependencies --><script src="../node_modules/angular/angular.js"></script><script src="../node_modules/ng-table/dist/ng-table.js"></script><script src="../node_modules/angular-touch/angular-touch.js"></script><script src="../node_modules/angular-bindonce/bindonce.min.js"></script><script src="../node_modules/angular-aria/angular-aria.min.js"></script><script src="../node_modules/angular-animate/angular-animate.js"></script><script src="../node_modules/v-accordion/dist/v-accordion.min.js"></script><script src="../node_modules/angular-scroll/angular-scroll.min.js"></script><script src="../node_modules/angular-loading-bar/build/loading-bar.js"></script><script src="../node_modules/angular-update-meta/dist/update-meta.min.js"></script><script src="../node_modules/angular-fullpage.js/angular-fullpage.js"></script><script src="../node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js"></script><script src="../node_modules/angular-ui-switch/angular-ui-switch.min.js"></script><script src="../node_modules/angular-ui-router/release/angular-ui-router.js"></script><script src="../node_modules/ng-infinite-scroll/build/ng-infinite-scroll.js"></script><script src="../node_modules/angular-slick-carousel/dist/angular-slick.min.js"></script><script src="../node_modules/angular-environment/dist/angular-environment.min.js"></script><script src="../node_modules/angular-ui-router-title/src/angular-ui-router-title.js"></script><script src="../node_modules/angular-lazy-img-master/release/angular-lazy-img.min.js"></script><script src="../node_modules/angular-material/angular-material.js"></script><script src="../node_modules/angulartics/dist/angulartics.min.js"></script><script src="../node_modules/angular-cookies/angular-cookies.js"></script><script src="../node_modules/ng-input/dist/ng-input.js"></script><script src="../node_modules/angular-clipboard/angular-clipboard.js"></script><!-- endbuild --><script src="/assets/js/app.js"></script><!-- Asynchronous Google Tracking --><script type="text/javascript" src="https://www.googleadservices.com/pagead/conversion_async.js" charset="utf-8"></script><script type="text/javascript">adroll_adv_id = "BS3GA66JG5CWZGOXKI3RR4";\n        adroll_pix_id = "4H7L7M32HFDQHMF37TOGP3";\n        /* OPTIONAL: provide email to improve user identification */\n        /* adroll_email = "username@example.com"; */\n        (function () {\n            var _onload = function(){\n                if (document.readyState && !/loaded|complete/.test(document.readyState)){setTimeout(_onload, 10);return}\n                if (!window.__adroll_loaded){__adroll_loaded=true;setTimeout(_onload, 50);return}\n                var scr = document.createElement("script");\n                var host = (("https:" == document.location.protocol) ? "https://s.adroll.com" : "http://a.adroll.com");\n                scr.setAttribute(\'async\', \'true\');\n                scr.type = "text/javascript";\n                scr.src = host + "/j/roundtrip.js";\n                ((document.getElementsByTagName(\'head\') || [null])[0] ||\n                    document.getElementsByTagName(\'script\')[0].parentNode).appendChild(scr);\n            };\n            if (window.addEventListener) {window.addEventListener(\'load\', _onload, false);}\n            else {window.attachEvent(\'onload\', _onload)}\n        }());</script></body></html>'), $templateCache.put("main.template.html", '<!-- including main page navigation header --><navigation></navigation><!-- Video player jumbotron --><section class="main" style="overflow: hidden"><div class="jumbotron bosco-jumbotron"><div class="bosco-jumbotron-content-wrapper"><div class="bosco-jumbotron-content-container"><div class="bosco-jumbotron-content text-center"><h1>WE CREATE STATE OF THE ART PHOTO INSTALLATIONS AND UNIQUE BRAND EXPERIENCES</h1><div class="bosco-button-row" style="margin-top: 30px"><a href="/get-the-bosco" style="margin: 0 auto"><button class="btn bosco-button-highlight"><h4>BOOK NOW</h4></button></a></div></div></div><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/main/home-page-video-mp4-replacement.gif" class="img-responsive main-page-movie hidden-md hidden-lg" style="opacity: 0.2"><video src="https://s3.amazonaws.com/thebosco/angular-assets/images/main/HomePage.mp4" class="img-responsive main-page-movie hidden-xs hidden-sm" style="opacity: 0.5" autoplay loop></video></div></div></section><!-- Featured Events --><div class="container-fluid" style="margin-top: 30px; padding-left: 0; padding-right: 0"><div class="row no-gutter no-vertical-padding bosco-padding" style="margin-left: 0; margin-right: 0"><!-- Event Repeater --><div class="col-xs-6 col-sm-6 col-md-3 event-container" bindonce ng-repeat="event in events track by event.id"><div event-cover event="event"></div></div></div><!-- \'More Events\' Button --><div class="row" style="margin-left: 0; margin-right: 0"><ul class="list-unstyled center-block main-page-more-events text-center trade-gothic-20" style="cursor: pointer; letter-spacing: 2px" ng-click="moreEvents()"><li class="main-show-more-text"><h4>{{ moreEventsText }}</h4></li><li class="hidden-xs"><i class="fa fa-3x fa-angle-down"></i></li></ul></div></div><!-- Gif Booth Product Feature --><div class="jumbotron bosco-jumbotron main-page-products"><div class="container" style="position: relative"><div class="bosco-jumbotron-text text-center"><h1>ORIGINATORS OF THE GIF BOOTH</h1><a href="/products"><button type="submit" class="btn btn-default bosco-button-transparent"><h4>EXPLORE OUR PRODUCTS</h4></button></a></div><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/main/home-products.png" class="img-responsive tween-zoom img-faded"></div></div><!-- including standard footer --><ng-include src="\'footer.template.html\'"></ng-include>'), $templateCache.put("footer.template.html", '<div id="container" ng-controller="FooterController"><div class="row navigation-footer" style="margin-left: 0; margin-right: 0"><!-- email signup response --><div ng-if="subscribedSuccess" class="content-center text-center bosco-padding subscription-message"><p class="trade-gothic-20" ng-if="newSubscriber">THANK YOU FOR SUBSCRIBING TO OUR NEWSLETTER!</p><p class="trade-gothic-20" ng-if="!newSubscriber">YOU ARE ALREADY SUBSCRIBED!</p></div><!-- email signup form --><form ng-if="!subscribedSuccess" submit="addSubscriber(subscriber)" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="form-group form-inline center-block text-center col-xs-12" target="_blank"><div class="input-group content-center email-collection"><input type="email" value="" name="Email Address" ng-model="subscriber.email" class="form-control bosco-form navigation-footer-email-signup-input required email" placeholder="EMAIL FOR A GOOD TIME" id="mce-EMAIL"> <span class="input-group-btn"><button type="submit" name="subscribe" ng-click="addSubscriber(subscriber)" id="mc-embedded-subscribe" class="btn btn-default navigation-footer-email-signup-button"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/arrows/email_subscription_arrow.png" id="embedded-subscribe-arrow"></button></span></div><!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--><div style="position: absolute; left: -5000px" aria-hidden="true"><input type="text" placeholder="email for newsletter" name="b_7d62db2ee840bcdfe20f278b2_68baa77397" tabindex="-1" value=""></div></form><!-- contact info --><div class="text-center center-block navigation-footer-contact"><span id="contact-email">HELLO@THEBOSCO.COM</span><span id="contact-spacer" class="hidden-sm hidden-xs">|</span><span id="contact-phone">212.235.8800</span></div><!-- sharing icons desktop --><ul class="list-inline center-block text-center bosco-padding col-xs-12 social-icon-container"><li><a class="socials-bar-button socials-bar-button-footer" href="https://www.instagram.com/thebosco/" target="_blank"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/instagram-icon-no-outline.png"></a></li><li><a class="socials-bar-button socials-bar-button-footer" href="https://www.facebook.com/theboscobooth" target="_blank"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/facebook-icon-no-outline.png"></a></li><li><a class="socials-bar-button socials-bar-button-footer" href="https://twitter.com/thebosco" target="_blank"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/twitter-icon-no-outline.png"></a></li><li><a class="socials-bar-button socials-bar-button-footer" href="http://thebosco.tumblr.com/" target="_blank"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/tumblr-icon-no-outline.png"></a></li><li><a class="socials-bar-button socials-bar-button-footer" href="https://vimeo.com/thebosco" target="_blank"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/vimeo-icon-no-outline.png"></a></li></ul><!-- Hashtag --><div class="text-center navigation-footer-links trade-gothic-20"><p class="navigation-footer-hashtag">#THEBOSCO</p></div><!-- links desktop --><div class="bosco-padding footer-link-container hidden-xs"><ul class="list-inline center-block text-center navigation-footer-links trade-gothic-20 col-xs-6 col-xs-pull-6 col-sm-push-0 col-sm-12" style="padding-right: 0"><li><a href="/jobs">JOBS</a></li><li><a href="/team">TEAM</a></li><li><a href="/what-is-the-bosco">WHAT IS THE BOSCO?</a></li><li class="hidden-xs"><a href="/get-the-bosco">CONTACT</a></li><li><a href="/sitemap">SITEMAP</a></li><li><a href="/terms">TERMS</a></li></ul><ul class="list-inline center-block text-center navigation-footer-links trade-gothic-20 col-xs-6 col-xs-pull-6 col-sm-push-0 col-sm-12" style="padding-right: 0"><li><a href="http://magazine.thebos.co" target="_blank">MAGAZINE</a></li><li><a href="http://curfew.tv" target="_blank">CURFEW</a></li><li><a href="http://www.bobbyredd.com/" target="_blank">BOBBY REDD</a></li></ul></div><!-- links mobile --><div class="bosco-padding footer-link-container visible-xs"><ul class="center-block text-center navigation-footer-links trade-gothic-20 col-xs-6 col-sm-6" style="padding-right: 0"><li><a href="/jobs">JOBS</a></li><li><a href="/what-is-the-bosco">WHAT IS THE BOSCO?</a></li><li class="hidden-xs"><a href="/get-the-bosco">CONTACT</a></li><li><a href="/sitemap">SITEMAP</a></li><li><a href="/terms">TERMS</a></li></ul><ul class="center-block text-center navigation-footer-links trade-gothic-20 col-xs-6 col-sm-6" style="padding-right: 0"><li><a href="http://magazine.thebos.co" target="_blank">MAGAZINE</a></li><li><a href="http://curfew.tv" target="_blank">CURFEW</a></li><li><a href="http://www.bobbyredd.com/" target="_blank">BOBBY REDD</a></li><li><a href="/team">TEAM</a></li></ul></div><!-- copyright info --><ul class="list-inline center-block text-center navigation-footer-copyright bosco-padding col-xs-12"><li style="cursor: pointer" class="trade-gothic-20 hidden-sm hidden-xs">Â© {{copyrightDate | date:\'yyyy\'}} THE BOSCO</li><li class="trade-gothic-20">MADE IN NEW YORK</li><li style="cursor: pointer" class="trade-gothic-20" id="bosco-gives-back"><a ui-sref="do-something">THE BOSCO GIVES BACK</a></li><li style="cursor: pointer" id="mobile-copyright" class="trade-gothic-20 visible-sm visible-xs">Â© {{copyrightDate | date:\'yyyy\'}} THE BOSCO</li></ul></div></div>'),
        $templateCache.put("full-screen-navigation.template.html", '<!-- add spacing on mobile --><div class="hidden-md hidden-lg {{ color }}" style="position: relative; height: 106px; content: \'\'" ng-if="!transparent"></div><!-- Navigation Slide-Over --><div class="slider mobile-navigation open-{{ isOpen }} {{ color }}"><div class="slider-container" style="width: 90%; margin: 0px auto"><div style="clear: both; width: 100%; margin: 0 auto; margin-top: 15px"><!-- logo --> <img alt="Brand" src="https://s3.amazonaws.com/thebosco/angular-assets/images/white-logo.png" class="img-responsive" style="float: left; max-height: 45px"><!-- close button --> <i ng-click="open()" class="navbar-mobile-close fa fa-close fa-2x fa-lg pull-right" style="margin-top: 5px"></i></div><div style="clear: both; width: 90%; margin: 0 auto; padding-top: 15px" class="mobile-navigation-full-screen-links"><ul class="list-unstyled text-center mobile-nav-list" style="margin-bottom: 10px"><li class="mobile-nav-list-item"><div><a ui-sref="what-is-the-bosco" class="mobile-nav-list-item-link"><h3>WHAT IS THE BOSCO?</h3></a></div></li><li class="mobile-nav-list-item"><div><a ui-sref="case-studies.list" class="mobile-nav-list-item-link"><h3>CASE STUDIES</h3></a></div></li><li class="mobile-nav-list-item"><div><a ui-sref="photos" class="mobile-nav-list-item-link"><h3>SEE YOUR PHOTOS</h3></a></div></li><li class="mobile-nav-list-item" class="mobile-nav-list-item-link"><div><a ui-sref="products"><h3>PRODUCTS</h3></a></div></li><li class="mobile-nav-list-item"><div><a ui-sref="get-the-bosco" class="mobile-nav-list-item-link"><h3>GET THE BOSCO</h3></a></div></li><li class="mobile-nav-list-item"><div><a href="http://thebosco.tumblr.com/tagged/lookbook" class="mobile-nav-list-item-link"><h3>LOOKBOOK</h3></a></div></li><li class="mobile-nav-list-item"><div><p>&mdash;</p></div></li></ul><ul class="partner-container list-inline center-block text-center bosco-padding col-xs-12"><li><a class="socials-bar-button-full-screen" href="http://magazine.thebos.co" target="_blank"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/navigation/bosco-magazine-white.png"></a></li><li><a class="socials-bar-button-full-screen" href="http://curfew.tv/" target="_blank"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/navigation/curfew-white.png"></a></li><li><a class="socials-bar-button-full-screen" href="http://www.bobbyredd.com/" target="_blank"><img id="bobby-red-white" src="https://s3.amazonaws.com/thebosco/angular-assets/images/navigation/bobby-redd-white.png"></a></li><li><a class="socials-bar-button-full-screen" ui-sref="do-something"><img id="do-something-white" src="https://s3.amazonaws.com/thebosco/angular-assets/images/navigation/do-something-white.png"></a></li></ul><ul class="list-inline center-block text-center about-links"><li><a ui-sref="team">TEAM</a></li><li><a ui-sref="jobs">JOBS</a></li><li><a ui-sref="terms">TERMS</a></li></ul><div class="text-center center-block navigation-full-screen-contact"><span id="contact-email">HELLO@THEBOSCO.COM</span><span id="contact-spacer">|</span><span id="contact-phone">212.235.8800</span></div><!-- sharing icons desktop --><ul class="list-inline center-block text-center bosco-padding col-xs-12 social-icon-container"><li class="social-list-item"><a class="socials-bar-button" href="https://www.instagram.com/thebosco/" target="_blank"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/instagram-icon-no-outline.png"></a></li><li class="social-list-item"><a class="socials-bar-button" href="https://www.facebook.com/theboscobooth" target="_blank"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/facebook-icon-no-outline.png"></a></li><li class="social-list-item"><a class="socials-bar-button" href="https://twitter.com/thebosco" target="_blank"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/twitter-icon-no-outline.png"></a></li><li class="social-list-item"><a class="socials-bar-button" href="http://thebosco.tumblr.com/" target="_blank"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/tumblr-icon-no-outline.png"></a></li><li class="social-list-item"><a class="socials-bar-button" href="https://vimeo.com/thebosco" target="_blank"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/vimeo-icon-no-outline.png"></a></li></ul></div></div></div><!-- Navigation Header --><div class="hamburger-only"><a ng-click="open()" class="do-something-nav"><img src="https://s3.amazonaws.com/thebosco/angular-assets/splash-pages/assets/images/hamberger-icon.png"></a></div>'), $templateCache.put("navigation.template.html", '<!-- add spacing on mobile --><div class="hidden-md hidden-lg {{ color }}" style="position: relative; height: 106px; content: \'\'" ng-if="!transparent"></div><!-- Navigation Slide-Over --><div class="slider mobile-navigation open-{{ isOpen }} {{ color }}"><div class="slider-container" style="width: 90%; margin: 0px auto"><div style="clear: both; width: 100%; margin: 0 auto; margin-top: 15px"><!-- logo --> <img alt="Brand" src="https://s3.amazonaws.com/thebosco/angular-assets/images/white-logo.png" class="img-responsive" style="float: left; max-height: 45px"><!-- close button --> <i ng-click="open()" class="navbar-mobile-close fa fa-close fa-2x fa-lg pull-right" style="margin-top: 5px"></i></div><div style="clear: both; width: 90%; margin: 0 auto; padding-top: 15px" class="mobile-navigation-full-screen-links"><ul class="list-unstyled text-center mobile-nav-list" style="margin-bottom: 10px"><li class="mobile-nav-list-item"><div><a ui-sref="what-is-the-bosco" class="mobile-nav-list-item-link"><h3>WHAT IS THE BOSCO?</h3></a></div></li><li class="mobile-nav-list-item"><div><a ui-sref="case-studies.list" class="mobile-nav-list-item-link"><h3>CASE STUDIES</h3></a></div></li><li class="mobile-nav-list-item"><div><a ui-sref="photos" class="mobile-nav-list-item-link"><h3>SEE YOUR PHOTOS</h3></a></div></li><li class="mobile-nav-list-item" class="mobile-nav-list-item-link"><div><a ui-sref="products"><h3>PRODUCTS</h3></a></div></li><li class="mobile-nav-list-item"><div><a ui-sref="get-the-bosco" class="mobile-nav-list-item-link"><h3>GET THE BOSCO</h3></a></div></li><li class="mobile-nav-list-item"><div><p>&mdash;</p></div></li></ul><ul class="partner-container list-inline center-block text-center bosco-padding col-xs-12"><li><a class="socials-bar-button-full-screen" href="http://magazine.thebos.co" target="_blank"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/navigation/bosco-magazine-white.png"></a></li><li><a class="socials-bar-button-full-screen" href="http://curfew.tv/" target="_blank"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/navigation/curfew-white.png"></a></li><li><a class="socials-bar-button-full-screen" href="http://www.bobbyredd.com/" target="_blank"><img id="bobby-red-white" src="https://s3.amazonaws.com/thebosco/angular-assets/images/navigation/bobby-redd-white.png"></a></li><li><a class="socials-bar-button-full-screen" ui-sref="do-something"><img id="do-something-white" src="https://s3.amazonaws.com/thebosco/angular-assets/images/navigation/do-something-white.png"></a></li></ul><ul class="list-inline center-block text-center about-links"><li><a ui-sref="team">TEAM</a></li><li><a ui-sref="jobs">JOBS</a></li><li><a ui-sref="terms">TERMS</a></li></ul><div class="text-center center-block navigation-full-screen-contact"><span id="contact-email">HELLO@THEBOSCO.COM</span><span id="contact-spacer">|</span><span id="contact-phone">212.235.8800</span></div><!-- sharing icons desktop --><ul class="list-inline center-block text-center bosco-padding col-xs-12 social-icon-container"><li class="social-list-item"><a class="socials-bar-button" href="https://www.instagram.com/thebosco/" target="_blank"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/instagram-icon-no-outline.png"></a></li><li class="social-list-item"><a class="socials-bar-button" href="https://www.facebook.com/theboscobooth" target="_blank"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/facebook-icon-no-outline.png"></a></li><li class="social-list-item"><a class="socials-bar-button" href="https://twitter.com/thebosco" target="_blank"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/twitter-icon-no-outline.png"></a></li><li class="social-list-item"><a class="socials-bar-button" href="http://thebosco.tumblr.com/" target="_blank"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/tumblr-icon-no-outline.png"></a></li><li class="social-list-item"><a class="socials-bar-button" href="https://vimeo.com/thebosco" target="_blank"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/vimeo-icon-no-outline.png"></a></li></ul></div></div></div><!-- Navigation Header --><div class="navigation-layout bosco-margin-top {{ isSolid }} is-sticky-{{ isScrolled }} {{ color }}" ng-init="isCollapsed = !isCollapsed"><nav class="navbar" role="navigation"><div class="container"><!-- Logo --> <a ui-sref="main" class="pull-left" style="min-height: 50px; width: 150px"><div ng-if="color != \'light-nav\'" alt="Brand" class="img-responsive bosco-logo" style="background-image: url(https://s3.amazonaws.com/thebosco/angular-assets/images/white-logo.png); background-size:contain; width: 150px; height: 50px; background-repeat: no-repeat"></div><div ng-if="color == \'light-nav\'" alt="Brand" class="img-responsive bosco-logo" style="background-image: url(https://s3.amazonaws.com/thebosco/angular-assets/images/black-logo.png); background-size:contain; width: 150px; height: 50px; background-repeat: no-repeat"></div></a><!-- Full-width Navbar Content --><ul class="nav navbar-nav navbar-right navbar-desktop hidden-xs hidden-sm"><li><a ui-sref="what-is-the-bosco" class="navbar-desktop-item">WHAT IS THE BOSCO?</a></li><li><a ui-sref="case-studies.list" class="navbar-desktop-item">CASE STUDIES</a></li><li><a ui-sref="photos" class="navbar-desktop-item">SEE YOUR PHOTOS</a></li><li><a ui-sref="products" class="navbar-desktop-item pointer">PRODUCTS</a></li><li><a ng-click="open()" style="cursor: pointer" class="navbar-desktop-item">MORE...</a></li><li><a ui-sref="get-the-bosco" class="navbar-desktop-get-the-bosco">GET THE BOSCO</a></li></ul><!-- Collapsed \'Hamburger\' Toggle --><div ng-click="open()" class="pull-right hidden-md hidden-lg"><span><img ng-if="color != \'light-nav\'" id="nav-hamburger" src="https://s3.amazonaws.com/thebosco/angular-assets/images/navigation/hamburger.png"> <img ng-if="color == \'light-nav\'" id="nav-hamburger" src="https://s3.amazonaws.com/thebosco/angular-assets/images/navigation/hamburger-black.png"></span></div></div></nav></div>'), $templateCache.put("offices.template.html", '<!-- Holds Link to Offices --><div class="offices-container"><ul><li><a href="/city/brooklyn" style="text-decoration: none"><div style="padding-left: 0; padding-right: 0"><div><div class="text-center" style="color: black"><h3 id="offices">Offices:</h3></div></div></div></a></li><li><a href="/city/brooklyn" style="text-decoration: none"><div style="padding-left: 0; padding-right: 0"><div><div class="text-center full-office" style="color: black"><h3>BROOKLYN</h3></div><div class="text-center abbreviated-office" style="color: black"><h3>BK</h3></div></div></div></a></li><li><a href="/city/los-angeles" style="text-decoration: none"><div style="padding-left: 0; padding-right: 0"><div><div class="text-center full-office" style="color: black"><h3>LOS ANGELES</h3></div><div class="text-center abbreviated-office" style="color: black"><h3>LA</h3></div></div></div></a></li><li><a href="/city/san-francisco" style="text-decoration: none"><div style="padding-left: 0; padding-right: 0"><div><div class="text-center full-office" style="color: black"><h3>SAN FRANCISCO</h3></div><div class="text-center abbreviated-office" style="color: black"><h3>SF</h3></div></div></div></a></li><li><a href="/city/chicago" style="text-decoration: none"><div style="padding-left: 0; padding-right: 0"><div><div class="text-center full-office" style="color: black"><h3>CHICAGO</h3></div><div class="text-center abbreviated-office" style="color: black"><h3>CHI</h3></div></div></div></a></li><!-- <li>\n      <a href="/city/london" style="text-decoration: none;">\n        <div style="padding-left: 0; padding-right: 0;">\n            <div>\n                <div class="text-center full-office" style="color: black;">\n                    <h3>LONDON</h3>\n                </div>\n                <div class="text-center abbreviated-office" style="color: black;">\n                    <h3>LON</h3>\n                </div>\n            </div>\n        </div>\n      </a>\n    </li> --></ul></div>'), $templateCache.put("explore-our-products.template.html", '<div class="explore-our-products"><div class="text-overlay"><span class="originators">ORIGINATORS OF THE<br>GIF BOOTH</span><div class="bosco-button-row"><a href="/products" class="bosco-button-cta"><button class="btn bosco-button-transparent"><h4>EXPLORE OUR PRODUCTS</h4></button></a></div></div></div>'), $templateCache.put("inactive-photo.template.html", '<!-- including standard navigation header --><navigation solid="true"></navigation><div class="container trade-gothic-20" style="margin-top: 150px"><h1 class="text-center">We\'re sorry, this photo has been set to inactive.</h1><h2 class="text-center">Please <a href="/photos" style="text-decoration: underline">click here</a> to return to the galleries.</h2></div><!-- including standard footer --><ng-include src="\'footer.template.html\'"></ng-include>'), $templateCache.put("event-info.template.html", '<header class="event-info"><h3 class="event-info-date">{{ ::singleEvent.date | date:\'MMMM d, yyyy\' : singleEvent.utc_offset | uppercase }}</h3><h2 class="event-info-name">{{ ::eventTitle | uppercase }}</h2><h5 ng-if="singleEvent.hashtag" class="plantin-mt event-info-hashtag">{{ ::singleEvent.hashtag }}</h5></header>'), $templateCache.put("format-toggle.template.html", '<div ng-if="photo.hasPrint == true && photo.hasGif == true" class="format-toggle"><span class="format-toggle-button" ng-if="photo.hasPrint == true" ng-click="setFormat(\'print\')" ng-class="{ \'is-active\': format === \'print\' }">PRINT</span> <span class="format-toggle-button" ng-if="photo.hasGif == true" ng-click="setFormat(\'gif\')" ng-class="{ \'is-active\': format === \'gif\' }">GIF</span> <span class="format-toggle-button" ng-if="photo.hasVideo == true" ng-click="setFormat(\'video\')" ng-class="{ \'is-active\': format === \'gif\' }">GIF</span></div>'), $templateCache.put("photo-viewer-header.template.html", '<div class="photo-viewer-header"><a ng-href="{{ ::event.galleryLink }}" class="photo-view-gallery"><i class="fa fa-2x fa-angle-left"></i> VIEW GALLERY</a><format-toggle></format-toggle></div>'), $templateCache.put("main-photo.template.html", '<div class="main-photo main-photo-{{ format }}-container main-photo-{{ ::event.orientation }}"><!-- Instagram overlay --><div class="mobile-instagram-overlay" ng-class="{ \'instagram-overlay-visible\' : isEmailShareOpen() }"><p ng-click="toggleEmailShare()" style="position: absolute; top: 10px; right: 10px; cursor: pointer">CLOSE</p><div class="text-center" style="width: 90%;margin: 0 auto; padding-top: 15px"><img ng-src="{{ photo.emailShareIcon }}" style="max-height: 30px"><h3 class="visible-xs" style="margin-top: 15px">{{ photo.emailShareText }}</h3><form class="get-the-bosco-form" name="shareEmailForm" ng-submit="shareEmail(user)"><!-- Email --><div class="form-group"><input style="font-size: 18px; text-transform: uppercase" type="email" class="form-control" ng-model="user.email" placeholder="EMAIL" required></div><!-- Email Collection Checkbox --><div class="form-group" style="margin-bottom: 12px"><input id="checkbox-2" class="css-checkbox" ng-model="user.opt_in" type="checkbox" checked style="float: left"><label for="checkbox-2" class="css-label" style="font-size: 9px">Yes, I would like to receive emails from The Bosco.</label></div><!-- Submit Button --><div class="text-center"><button type="submit" class="btn btn-default bosco-button-transparent" ng-disabled="shareEmailForm.$invalid" style="margin: 0 auto; padding-top: 0; padding-bottom: 0; background-color: transparent"><h5 style="margin-top: 6px; margin-bottom: 6px">SUBMIT</h5></button></div></form></div></div><div ng-if="photo.is_loaded || format == \'video\'"><!-- GIF format --> <img class="main-photo-gif img-responsive" ng-if="format === \'gif\'" ng-src="{{ photo.gif.filename }}"><!-- Print format --> <img class="main-photo-print img-responsive" ng-if="format === \'print\'" ng-src="{{ photo.print.filename }}"><video class="main-photo-gif img-responsive" ng-class="{\'nerve-junket\' : true}" ng-if="format === \'video\'" poster="{{ ::photo.print.filename }}" controls playsinline muted autoplay loop><source ng-src="https://s3.amazonaws.com/thebosco/{{ photo.defaultFilename }}" type="video/mp4"></video></div><div ng-if="!photo.is_loaded && format != \'video\'"><img class="main-photo-gif img-responsive" ng-class="{\'nerve-junket\' : isNerveJunket}" ng-src="{{placeholder}}"></div></div>'), $templateCache.put("photo-carousel-nav.template.html", '<div ng-if="!isPrivate"><i class="nav-prev fa fa-angle-left"></i> <i class="nav-next fa fa-angle-right"></i></div>'), $templateCache.put("photo-carousel.template.html", '<div class="photo-carousel-slides-container" style="margin-top: 30px"><div photo-carousel-slide ng-repeat="eventPhoto in eventPhotos track by $index" ng-class="{ \'center\': isCenterIndex($index), \'print\': isPrint() , \'active\' : isActive($index)}" ng-click="goTo($index)"><div class="main-photo"><!-- TODO: Instagram overlay --><div class="main-photo-instagram-overlay" ng-if="isCenterIndex($index)" ng-class="{ \'main-photo-instagram-overlay-visible\' : isEmailShareOpen() }"><p ng-click="toggleEmailShare()" style="position: absolute; top: 10px; right: 10px; letter-spacing: 2px; cursor: pointer">CLOSE</p><div class="main-photo-instagram-overlay-content"><img ng-src="{{ photo.emailShareIcon }}" class="logo"><h4 class="hidden-lg hidden-md share-header" style="margin-bottom: 0px; margin-top: 0; letter-spacing: 1px">{{ photo.emailShareText }}</h4><h3 class="hidden-sm" style="margin-bottom: 15px; margin-top: 20px; letter-spacing: 1px">{{ photo.emailShareText }}</h3><form class="get-the-bosco-form" name="shareEmailForm" ng-submit="shareEmail(user)"><!-- Email --><div class="form-group" style="margin-bottom: 30px"><input type="email" class="form-control" style="letter-spacing: 1px" ng-model="user.email" placeholder="EMAIL" required></div><!-- Email Collection Checkbox --><div class="form-group" style="margin-bottom: 20px"><input id="checkbox-1" class="css-checkbox" ng-model="user.opt_in" type="checkbox" checked style="float: left"><label for="checkbox-1" class="css-label">Yes, I would like to receive emails from The Bosco.</label></div><!-- Submit Button --><div class="text-center"><button type="submit" class="btn btn-default bosco-button-transparent" ng-disabled="shareEmailForm.$invalid" style="margin: 0 auto; padding-top: 0; padding-bottom: 0; background-color: transparent"><h4 style="margin-top: 5px; margin-bottom: 5px">SUBMIT</h4></button></div></form><!-- <h2 ng-click="toggleEmailShare()" style="cursor: pointer;">EXIT</h2> --></div></div><div ng-show="isActive($index)" ng-attr-id="{{::eventPhoto.code}}"><div ng-if="eventPhoto.is_loaded"><!-- GIF format --> <img class="main-photo-gif img-responsive" ng-class="{\'nerve-junket\' : isNerveJunket}" ng-if="format === \'gif\'" ng-src="{{::eventPhoto.gif.filename}}"><!-- Print format --> <img class="main-photo-print img-responsive" ng-if="format === \'print\'" ng-src="{{::eventPhoto.print.filename}}"></div><div ng-if="!eventPhoto.is_loaded && format != \'video\'"><img class="main-photo-gif img-responsive" ng-class="{\'nerve-junket\' : isNerveJunket}" ng-src="{{::placeholder}}"></div><!-- Video format--><video ng-if="(isActive($index) || eventPhoto.is_loaded) && format === \'video\'" class="main-photo-gif img-responsive" ng-class="{\'nerve-junket\' : true}" muted autoplay loop ng-init="eventPhoto.is_loaded = true" poster="{{ ::eventPhoto.print.filename }}"><source ng-src="https://s3.amazonaws.com/thebosco/{{ ::eventPhoto.defaultFilename }}" type="video/mp4"></video></div></div></div></div><div ng-if="!isPrivate"><i ng-click="prev()" class="nav-prev fa fa-angle-left"></i> <i ng-click="next()" class="nav-next fa fa-angle-right"></i></div>'), $templateCache.put("photo-viewer.template.html", '<!-- Mobile photo viewer: single photo --><section class="photo-viewer-single visible-xs"><!-- View Gallery button, timestamp, and format toggle above the photo --><photo-viewer-header event="event" photo="photo" format="format"></photo-viewer-header><!-- Photo --><div main-photo class="mobile" photo="photo" format="format" event="event" email-share-open="emailShareOpen"></div><!-- Socials bar and What Is The Bosco button --><div class="button-row" style="padding-bottom: 2px"><ng-include src="\'socials-bar.template.html\'"></ng-include></div><div style="background-color: white; margin-bottom: 10px" uib-collapse="commentsCollapsed"><div class="fb-comments" data-href="http://www.thebos.co/p/{{ photo.code }}" data-width="100%" data-numposts="5"></div></div><div style="margin: 8px; margin-top: 0px"><a href="/what-is-the-bosco" class="what-button"><button class="btn btn-default bosco-button-highlight">WHAT IS THE BOSCO?</button></a></div></section><!-- Tablet+ photo viewer: carousel --><section class="photo-viewer-multiple hidden-xs"><!-- Carousel --> <a ui-sref="event({eventSlug: event.slug, \'#\': photo.code})"><div class="photo-back-button"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/small-close-x.png"></div></a><photo-carousel is-private="isPrivate" photo="photo" event-photos="eventPhotos" photo-index="photoIndex" format="format" event="event" email-share-open="emailShareOpen"></photo-carousel><!-- Socials bar, format toggle, and What Is The Bosco button --><div class="center-slide-controls"><div class="button-row"><ng-include src="\'socials-bar.template.html\'"></ng-include><format-toggle></format-toggle></div><div style="background-color: white; margin-bottom: 10px" uib-collapse="commentsCollapsed"><div class="fb-comments" data-href="http://www.thebos.co/p/{{ photo.code }}" data-width="100%" data-numposts="5"></div></div></div></section>'), $templateCache.put("facebook-like-button.template.html", '<div class="fb-like" data-href="http://www.thebos.co/p/{{ photo.code }}" data-layout="button" data-action="like" data-show-faces="true" data-share="false" style="min-width: 50px"></div>'), $templateCache.put("socials-bar.template.html", '<!-- Related to photo-viewer.directive --><div class="socials-bar"><span class="socials-bar-button" ng-click="toggleEmailShare(\'instagram\')"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/instagram-icon-no-outline.png"></span><a class="socials-bar-button" ng-click="facebookFeedShare()"><span><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/facebook-icon-no-outline.png"></span></a><span class="socials-bar-button" ng-click="toggleEmailShare(\'snapchat\')"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/snapchat-new-icon-144.png"></span><a class="socials-bar-button" ng-click="twitterShare()"><span><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/twitter-icon-no-outline.png"></span></a><a class="socials-bar-button" ng-click="tumblrShare()"><span><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/icons/tumblr-icon-no-outline.png"></span></a><span class="socials-bar-button" uib-popover="http://www.thebos.co/p/{{ photo.code }}" popover-trigger="outsideClick"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/link-icon.png"></span><a class="socials-bar-button" ng-click="trackDownload()" ng-href="{{ downloadUrl() }}" download="{{ downloadUrl() }}"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/download-icon.png"></a></div>'), $templateCache.put("photo.template.html", '<!-- including standard navigation header --><navigation></navigation><!-- Photo page layout --><section class="photo" style="overflow: hidden"><!-- Event info header --><ng-include src="\'event-info.template.html\'"></ng-include><!-- Photo viewer --><photo-viewer class="photo-viewer" event="singleEvent" photo="photo" format="format" is-private="isPrivate" event-photos="eventPhotos" comments-collapsed="commentsCollapsed" email-share-open="emailShareOpen" photo-index="photoIndex"></photo-viewer><!-- Mobile: See More GIFs and Explore Our Products sections --><div class="visible-xs"><see-more-gifs ng-if="!isPrivate"></see-more-gifs><ng-include src="\'explore-our-products.template.html\'"></ng-include></div></section><!-- including standard footer --><ng-include src="\'footer.template.html\'"></ng-include>'), $templateCache.put("see-more-gifs.template.html", '<a ng-href="{{ ::singleEvent.galleryLink }}" class="see-more-gifs"><div ng-repeat="photo in moreGifs track by $index"><div class="main-photo main-photo-{{ seeMoreGifsFormat }}-container main-photo-{{ ::singleEvent.orientation }}"><!-- GIF format --> <img class="main-photo-gif img-responsive" ng-if="seeMoreGifsFormat === \'gif\'" ng-src="https://s3.amazonaws.com/thebosco/{{ photo.gif.filename }}"><!-- Print format --> <img class="main-photo-print img-responsive" ng-if="seeMoreGifsFormat === \'print\'" ng-src="https://s3.amazonaws.com/thebosco/{{ photo.print.filename }}"></div></div><div class="text-overlay"><span ng-if="photo.defaultFormat === \'gif\'">SEE MORE GIFS</span> <span ng-if="photo.defaultFormat === \'jpg\'">SEE MORE PRINTS</span></div></a>'), $templateCache.put("new-rotator.template.html", '<div class="new-rotator-wrapper" ng-mousemove="updateFrame($event)" ng-mouseleave="reset()"><div ng-transclude></div></div>'), $templateCache.put("gif-booth.template.html", '<!-- including standard navigation header --><navigation></navigation><!-- Video player jumbotron --><section class="main main-product"><div video-player video="gifVideo" class="jumbotron bosco-jumbotron" style="margin-top: 0"><div class="video"><vimeo video="gifVideo"></vimeo><i class="fa fa-2x fa-times close-button"></i></div><div class="bosco-jumbotron-content-wrapper"><div class="bosco-jumbotron-content-container"><div class="bosco-jumbotron-content bosco-jumbotron-text text-center"><h1 class="header">GIF BOOTH</h1><img class="play-button" src="https://s3.amazonaws.com/thebosco/angular-assets/images/play-button.png"><div class="bosco-button-row"><a href="/get-the-bosco" class="bosco-button-cta"><button class="btn bosco-button-highlight"><h4>BOOK NOW</h4></button></a></div></div></div><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/mp4-replacement-gif.gif" class="img-responsive hidden-md hidden-lg" style="position: absolute; min-width: 100%; opacity: 0.5"><video src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/GIFB.mp4" class="img-responsive hidden-xs hidden-sm" style="position: absolute; min-width: 100%; opacity: 0.5" autoplay loop></video></div></div></section><!-- Video Header --><section class="product"><!-- Product details --><div class="bosco-accordion bosco-accordion-product"><!-- Design --><div id="design"><div class="rotator-container"><rotator class="owl-carousel hidden-xs"><img frame src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/design/gif-booth-rotator-1.jpg"> <img frame src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/design/gif-booth-rotator-2.jpg"> <img frame src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/design/gif-booth-rotator-3.jpg"> <img frame src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/design/gif-booth-rotator-4.jpg"> <img frame src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/design/gif-booth-rotator-5.jpg"> <img frame src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/design/gif-booth-rotator-6.jpg"> <img frame src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/design/gif-booth-rotator-7.jpg"> <img frame src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/design/gif-booth-rotator-8.jpg"> <img frame src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/design/gif-booth-rotator-9.jpg"> <img frame src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/design/gif-booth-rotator-10.jpg"> <img frame src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/design/gif-booth-rotator-11.jpg"></rotator><img class="visible-xs rotator-gif" src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/design/gif-booth-rotator.gif"></div></div></div><!-- GIFs Examples --><div class="gifs-examples"><gifs-examples class="owl-carousel"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/gifs-examples/1oak.gif"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/gifs-examples/astronaut.gif"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/gifs-examples/barkbox.gif"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/gifs-examples/bet-hennessy.gif"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/gifs-examples/bounce.gif"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/gifs-examples/darkskyparadise.gif"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/gifs-examples/heineken.gif"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/gifs-examples/juul.gif"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/gifs-examples/maybelline.gif"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/gifs-examples/opening-ceremony.gif"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/gifs-examples/reformation.gif"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/gifs-examples/soho-grand-hotel.gif"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/gifs-examples/sundance.gif"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/gifs-examples/takeflightchi.gif"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/gifs-examples/tie-dye.gif"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/gifs-examples/west.gif"></gifs-examples></div><!-- Customization --><div id="customization"><!-- Video player jumbotron --><div video-player video="customizationVideo" class="jumbotron bosco-jumbotron product-customization" style="margin-top: 0; margin-bottom: 0"><div class="video"><vimeo video="customizationVideo"></vimeo><i class="fa fa-2x fa-times close-button"></i></div><div class="bosco-jumbotron-background" style="background-image: url(\'https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/customization.jpg\'); background-color: white; opacity: 0.2"></div><div class="bosco-jumbotron-content-container"><div class="bosco-jumbotron-content text-center"><h1>CUSTOMIZE ALL ASPECTS OF THE BOSCO EXPERIENCE</h1><h3>FROM THE <span class="bosco-gold">VINYL WRAP</span>, TO THE <span class="bosco-gold">BACKDROP</span>. FROM THE <span class="bosco-gold">TOUCH SCREEN</span>, TO THE <span class="bosco-gold">SOCIAL COPY</span>, THE <span class="bosco-gold">PRINT</span>, AND OF COURSE THE <span class="bosco-gold">GIF</span>.</h3><img class="play-button hidden-xs hidden-sm" src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/play-button-black.png"><br class="hidden-xs hidden-sm"><a href="/case-studies"><button type="submit" class="btn btn-default bosco-button-transparent" style="color: black; border-color: black; margin-top: 15px"><h4>SUPER CUSTOM PROJECTS</h4></button></a></div></div></div></div><!-- UX --><div id="ux" class="text-center"><!-- Video player jumbotron --><div video-player video="uxVideo" class="jumbotron bosco-jumbotron product-ux" style="margin-top: 0; margin-bottom: 0"><div class="video"><vimeo video="uxVideo"></vimeo><i class="fa fa-2x fa-times close-button"></i></div><div class="bosco-jumbotron-content-container"><div class="bosco-jumbotron-content text-center"><h1>OUR USER EXPERIENCE IS<br>INTUITIVE AND SIMPLE.</h1><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/ux/ux.png" class="img-responsive hidden-xs" style="max-width: 95%"><ux-steps class="owl-carousel visible-xs"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/ux/ux-1.png" class="img-responsive"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/ux/ux-2.png" class="img-responsive"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/ux/ux-3.png" class="img-responsive"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/ux/ux-4.png" class="img-responsive"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/ux/ux-5.png" class="img-responsive"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/ux/ux-6.png" class="img-responsive"></ux-steps><img class="play-button hidden-xs hidden-sm" src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/play-button-black.png"></div></div></div></div><!-- Tech specs --><div id="tech-specs"><gif-booth-tech-specs><div><h1 class="bosco-gold trade-gothic-20 tech-specs-title">SEATED<br>SETUP</h1><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/GIF-seated-techspecs-hires-01-cropped.png" class="img-responsive" style="min-width: 100%"><div class="trade-gothic text-center" style="text-align: center; width: 100%; color: white"><h3 style="margin-bottom: 0">POWER: 2 15 AMP OUTLETS</h3><h3 style="margin-top: 5px">INTERNET: 10 MBPS UP/DOWN</h3><h4>FUNCTIONAL WITHOUT INTERNET</h4></div></div><div><h1 class="bosco-gold trade-gothic-20" style="text-align: center; width: 100%; font-size: 63px">STANDING<br>SETUP</h1><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/GIF-Standing-techspecs-hires-01-cropped.png" class="img-responsive" style="min-width: 100%"><div class="trade-gothic text-center" style="text-align: center; width: 100%; color: white"><h3 style="margin-bottom: 0">POWER: 2 15 AMP OUTLETS</h3><h3 style="margin-top: 5px">INTERNET: 10 MBPS UP/DOWN</h3><h4>FUNCTIONAL WITHOUT INTERNET</h4></div></div></gif-booth-tech-specs></div><!-- Metrics --><div id="metrics" class="text-center"><!-- Video player jumbotron --><div video-player video="metricsVideo" class="jumbotron bosco-jumbotron product-metrics" style="margin-top: 0; margin-bottom: 0"><div class="video"><vimeo video="metricsVideo"></vimeo><i class="fa fa-2x fa-times close-button"></i></div><div class="bosco-jumbotron-content-container"><div class="bosco-jumbotron-content text-center"><h2>IN-DEPTH METRICS<br>FOR EVERY PROJECT.</h2><div class="metrics-infographic"><div class="gifs-created"><span class="info-number">212</span> <span class="info-label bosco-gold">GIFs<br>created</span></div><div class="dotted-lines">- - - - - -</div><div class="impressions"><span class="info-number">24,200</span> <span class="info-label">social media<br>impressions</span></div></div><h3>CONTEXTUALIZING HOW WE HELP DELIVER OVER 24,000<br>SOCIAL MEDIA IMPRESSIONS AT AN AVERAGE EVENT.</h3><img class="play-button hidden-xs hidden-sm" style="margin-top: 15px" src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/play-button-black.png"><br></div></div></div></div><!-- Case Studies --><div class="text-center" style="margin-bottom: 20px"><h1 class="trade-gothic" style="color: white"><a href="/case-studies" style="text-decoration: none">CASE STUDIES</a></h1><hr class="hr-bosco"></div><div class="row no-gutter" style="background-color: black"><a href="/case-studies/row-hotels"><div class="col-xs-12 col-md-6"><div class="bosco-jumbotron-text text-center case-studies"><h1 style="color: white">THE BOSCO + ROW HOTELS</h1><hr class="hr-bosco"><button type="submit" class="btn btn-default bosco-button-black"><h4>VIEW</h4></button></div><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/case-studies/the-bosco-row-hotels.gif" class="img-responsive img-faded" style="min-width: 100%"></div></a><a href="/case-studies/dkny"><div class="col-xs-12 col-md-6"><div class="bosco-jumbotron-text text-center case-studies"><h1 style="color: white">THE BOSCO + DKNY</h1><hr class="hr-bosco"><button type="submit" class="btn btn-default bosco-button-black"><h4>VIEW</h4></button></div><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/case-studies/the-bosco-dkny.gif" class="img-responsive img-faded" style="min-width: 100%"></div></a></div></section><!-- including standard footer --><ng-include src="\'footer.template.html\'"></ng-include>'),
        $templateCache.put("multicam.template.html", '<!-- including standard navigation header --><navigation transparent="true"></navigation><!-- Fixed Navigation --><ul style="pointer-events: auto" class="products-fixed-navigation hidden-xs"><li><a href="" id="menu-option-0" ng-click="moveTo(0)" ng-class="{\'active\' : slideIndex == 0}"></a></li><li><a href="" id="menu-option-1" ng-click="moveTo(1)" ng-class="{\'active\' : slideIndex == 1}"></a></li><li><a href="" id="menu-option-2" ng-click="moveTo(2)" ng-class="{\'active\' : slideIndex == 2}"></a></li></ul><!-- Navigation Panels --><div id="multi-cam" style="overflow: hidden"><div id="multi-cam-header" video-player video="multiCamVideo" class="section angular-section"><!-- Modal Video Player --><div class="video"><vimeo video="multiCamVideo"></vimeo><i class="fa fa-2x fa-times close-button"></i></div><!-- Full-Screen Background --><div class="full-screen-video-wrapper"><video class="full-screen-video hidden-xs" autoplay loop><source src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/multicam/header-promo-video.mp4" type="video/mp4"></video><img class="visible-xs full-screen-video" src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/multicam/IMG_9038_4-smaller-loop.gif"></div><!--  --><div class="content-container xs-top-margin xs-full-height" style="z-index: 2; text-align: center; letter-spacing: 1px"><div class="content content-center content-center-mobile"><h3 class="plantin-mt bosco-gold xs-no-margins">it\'s finally here!?</h3><h1 class="header xs-no-margins">MULTICAM</h1><h1 class="header xs-no-margins">HAS ARRIVED</h1><div class="bosco-button-row" style="padding-top: 15px"><a href="#" class="bosco-button-cta play-button"><button class="btn bosco-button-transparent" style="padding-top: 0;padding-bottom: 0"><h5>WATCH VIDEO</h5></button> </a><a ui-sref="get-the-bosco" class="bosco-button-cta"><button class="btn bosco-button-highlight" style="padding-top: 0;padding-bottom: 0"><h5>BOOK NOW</h5></button></a></div></div><!-- Scroll --> <a href="#"><div class="hidden-xs" style="position: absolute; bottom: 0; margin-botom: 30px; left: 50%; opacity: 0.7; -webkit-transform: translate(0, -50%); -ms-transform: translate(0, -50%); transform: translate(0, -50%)" ng-click="moveTo(1)"><h4 style="font-style: italic; letter-spacing: 1px" a-href="">SCROLL</h4><i class="fa fa-3x fa-angle-down"></i></div></a></div></div><div id="multicam-description" class="section angular-section"><div class="content-container" style="height: 100%"><!-- Product Description --><div class="col-xs-12 col-sm-4 col-sm-offset-2 product-description xs-vertically-center"><div class="col-xs-12" style="z-index: 2"><p style="text-align: center; font-style: italic; margin: 0" class="plantin-mt visible-xs xs-no-margins">the</p><h1 class="bosco-gold xs-center-text xs-no-margins">MULTICAM</h1><!-- promo image --> <img class="visible-xs" style="max-width: 100%; max-height: 30vh; margin: 0 auto" src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/multicam/product-shot.jpg"><p class="hidden-xs">-</p><p class="trade-gothic-light" style="letter-spacing: 1px">Introducing the Bosco MultiCam, eight cameras capture a moment simultaneously, Images are instantly branded and uploaded to the web. Creating magical GIFs that can be shared instantly on every social network.</p><v-accordion class="vAccordion--default multi-cam-vaccordion" style="color: white" control="accordion"><!-- Interactive Software Engineer --><v-pane><v-pane-header class="multi-cam-vaccordion-header"><span>STANDARD SET UP</span><div style="float: right"><img class="header-icon" src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/multicam/technical-information-arrow.png"></div></v-pane-header><v-pane-content class="multi-cam-vaccordion-content"><ul class="list-unstyled"><li>8-Camera MultiCam Booth</li><li>Seamless White Backdrop</li><li>Custom Designed GIF</li><li>Sharing Station: Email, Text, Twitter</li><li>On Site Technician(s)</li><li>Images Hosted on TheBosco.com</li><li>Social Media Recap</li></ul></v-pane-content></v-pane><v-pane><v-pane-header class="multi-cam-vaccordion-header"><span>TECH SPECS</span><div style="float: right"><img class="header-icon" src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/multicam/technical-information-arrow.png"></div></v-pane-header><v-pane-content class="multi-cam-vaccordion-content"><ul class="list-unstyled"><li class="bosco-gold">Footprint:</li><li>12\'W X 15\'L X 10\'H</li></ul><ul class="list-unstyled"><li class="bosco-gold">Power:</li><li>Two 15 AMP Outlets</li></ul><ul class="list-unstyled"><li class="bosco-gold">Internet:</li><li>10 MBPS Up/Down (funtional without internet)</li></ul></v-pane-content></v-pane></v-accordion></div></div><!-- product image --><div style="width: 100%; position: absolute; top: 50%; transform: translateY(-50%)"><div class="hidden-xs col-sm-6 col-sm-offset-6" new-rotator><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/multicam/product-rotator/1.jpg"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/multicam/product-rotator/2.jpg"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/multicam/product-rotator/3.jpg"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/multicam/product-rotator/4.jpg"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/multicam/product-rotator/5.jpg"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/multicam/product-rotator/6.jpg"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/multicam/product-rotator/7.jpg"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/multicam/product-rotator/8.jpg"> <img class="active" src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/multicam/product-rotator/9.jpg"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/multicam/product-rotator/10.jpg"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/multicam/product-rotator/11.jpg"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/multicam/product-rotator/12.jpg"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/multicam/product-rotator/13.jpg"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/multicam/product-rotator/14.jpg"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/multicam/product-rotator/15.jpg"></div></div></div></div><div id="multicam-content" class="section angular-section"><div id="multicam-content-container" class="content-container"><div><slick id="examples-slider" class="products-slick slick-slider col-xs-12" settings="slickConfig" style=""><div><img class="" src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/multicam/examples/1.gif"><div class="subtitle hidden-xs"><p class="subtitle-header">CUSTOMIZATIONS:</p><div class="subtitle-content"><p>Animated Green screen</p></div></div></div><div><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/multicam/examples/2.gif"><div class="subtitle hidden-xs"><p class="subtitle-header">CUSTOMIZATIONS:</p><div class="subtitle-content"><p>Custom Backdrop</p></div></div></div><div><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/multicam/examples/3.gif"><div class="subtitle hidden-xs"><p class="subtitle-header">CUSTOMIZATIONS:</p><div class="subtitle-content"><p>Green screen</p></div></div></div><div><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/multicam/examples/4.gif"><div class="subtitle hidden-xs"><p class="subtitle-header">CUSTOMIZATIONS:</p><div class="subtitle-content"><p>Custom Backdrop</p></div></div></div><div><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/multicam/examples/5.gif"><div class="subtitle hidden-xs"><p class="subtitle-header">CUSTOMIZATIONS:</p><div class="subtitle-content"><p>Custom Backdrop</p></div></div></div><div><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/multicam/examples/6.gif"><div class="subtitle hidden-xs"><p class="subtitle-header">CUSTOMIZATIONS:</p><div class="subtitle-content"><p>Animated Greenscreen</p></div></div></div><div><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/multicam/examples/7.gif"><div class="subtitle hidden-xs"><p class="subtitle-header">CUSTOMIZATIONS:</p><div class="subtitle-content"><p>Green screen, Animated Overlay</p></div></div></div><div><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/multicam/examples/8.gif"><div class="subtitle hidden-xs"><p class="subtitle-header">CUSTOMIZATIONS:</p><div class="subtitle-content"><p>Green screen, Animated Overlay</p></div></div></div><div><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/multicam/examples/9.gif"><div class="subtitle hidden-xs"><p class="subtitle-header">CUSTOMIZATIONS:</p><div class="subtitle-content"><p>16 Cameras, Animated Overlay</p></div></div></div></slick><!-- Book Now Mobile --><div class="visible-xs"><a ui-sref="get-the-bosco" class="bosco-button-cta"><button class="btn bosco-button-highlight" style="margin-top: 30px; margin-bottom: 30px; display: block; width: 60%; margin: 0 auto"><h4>BOOK NOW!</h4></button></a></div></div></div></div><div id="multicam-footer" class="section angular-section multi-cam-footer-container"><div class="multi-cam-footer"><!-- including standard footer --><ng-include src="\'footer.template.html\'"></ng-include></div></div></div>'), $templateCache.put("print-station.template.html", '<!-- including standard navigation header --><navigation></navigation><!-- Video Header --><section class="main main-product"><div video-player video="printStationVideo" class="jumbotron bosco-jumbotron" style="margin-top: 0"><div class="video"><vimeo video="printStationVideo"></vimeo><i class="fa fa-2x fa-times close-button"></i></div><div class="bosco-jumbotron-content-wrapper"><div class="bosco-jumbotron-content-container"><div class="bosco-jumbotron-content bosco-jumbotron-text text-center"><h1 class="header">#PRINT</h1><img class="play-button" src="https://s3.amazonaws.com/thebosco/angular-assets/images/play-button.png"><div class="bosco-button-row"><a href="/get-the-bosco" class="bosco-button-cta"><button class="btn bosco-button-highlight"><h4>BOOK NOW</h4></button></a></div></div></div><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/print/video4.gif" class="img-responsive hidden-md hidden-lg" style="position: absolute; min-width: 100%; opacity: 0.5"><video src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/print/%23PRINT.mp4" class="img-responsive hidden-xs hidden-sm" style="position: absolute; min-width: 100%; opacity: 0.5" autoplay loop></video></div></div></section><!-- Product Info --><section class="product"><!-- Design --><div id="design"><div class="rotator-container" style="max-height: 600px; padding: 30px 0"><rotator class="owl-carousel hidden-xs"><img frame src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/print/physical-product.png"></rotator><img class="visible-xs rotator-gif print-product-rotator-gif" src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/print/physical-product.png"></div></div><!-- GIFs Examples --><div class="gifs-examples"><gifs-examples class="owl-carousel"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/print/examples/xoJane.jpg"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/print/examples/rmVp2.jpeg"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/print/examples/Revolve2.jpg"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/print/examples/Pandora.jpg"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/print/examples/Madewell.jpg"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/print/examples/joyfest.jpg"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/print/examples/groundfloordjscrubs.jpg"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/print/examples/charmed.jpg"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/print/examples/ASOS10.jpg"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/print/examples/0621-0GRZM1.jpg"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/print/examples/0270-ZCW40N.jpg"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/print/examples/0246-OLR3KI.jpg"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/print/examples/0081-GFTH7J.jpg"></gifs-examples></div><!-- Product details --><div class="bosco-accordion bosco-accordion-product"><!-- UX --><div id="ux" class="text-center"><!-- Video player jumbotron --><div class="jumbotron bosco-jumbotron product-ux" style="margin-top: 0"><div class="bosco-jumbotron-content-container"><div class="bosco-jumbotron-content text-center"><h1>OUR USER EXPERIENCE IS<br>INTUITIVE AND SIMPLE.</h1><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/print/print-station-ui.png" class="img-responsive hidden-xs" style="max-width: 95%"><ux-steps class="owl-carousel visible-xs"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/print/ux-icons/product-tabs-icons-final-single-18.png" class="img-responsive"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/print/ux-icons/product-tabs-icons-final-single-19.png" class="img-responsive"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/print/ux-icons/product-tabs-icons-final-single-20.png" class="img-responsive"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/print/ux-icons/product-tabs-icons-final-single-21.png" class="img-responsive"></ux-steps></div></div></div></div></div><!-- Tech specs --><div id="tech-specs" style="margin-bottom: 45px"><div><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/print/print-techspecs-hires-05.png" class="img-responsive" style="min-width: 80%; margin: 0 auto"><div class="trade-gothic text-center" style="text-align: center; width: 100%; z-index: 3; color: white"><h3 style="margin-bottom: 0; margin-top: 0">POWER: 2 15 AMP OUTLETS</h3><h3 style="margin-top: 5px">INTERNET: 10 MBPS UP/DOWN</h3></div></div></div><!-- Case Studies --><div class="text-center" style="margin-bottom: 20px"><h1 class="trade-gothic" style="color: white"><a href="/case-studies" style="text-decoration: none">CASE STUDIES</a></h1><hr class="hr-bosco"></div><div class="row no-gutter" style="background-color: black"><a href="/case-studies/row-hotels"><div class="col-xs-12 col-md-6"><div class="bosco-jumbotron-text text-center case-studies"><h1 style="color: white">THE BOSCO + ROW HOTELS</h1><hr class="hr-bosco"><button type="submit" class="btn btn-default bosco-button-black"><h4>VIEW</h4></button></div><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/case-studies/the-bosco-row-hotels.gif" class="img-responsive img-faded" style="min-width: 100%"></div></a><a href="/case-studies/dkny"><div class="col-xs-12 col-md-6"><div class="bosco-jumbotron-text text-center case-studies"><h1 style="color: white">THE BOSCO + DKNY</h1><hr class="hr-bosco"><button type="submit" class="btn btn-default bosco-button-black"><h4>VIEW</h4></button></div><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/case-studies/the-bosco-dkny.gif" class="img-responsive img-faded" style="min-width: 100%"></div></a></div></section><!-- including standard footer --><ng-include src="\'footer.template.html\'"></ng-include>'), $templateCache.put("products.template.html", '<!-- including standard navigation header --><navigation></navigation><div class="container-liquid products"><!-- Multicam --><div class="jumbotron bosco-jumbotron" style="margin-top: 0px; margin-bottom: 0"><div class="container-liquid" style="position: relative; overflow: hidden"><div class="bosco-jumbotron-text text-center"><h1 class="header">MULTICAM</h1><div class="col-xs-12 col-sm-10 col-sm-offset-1 bosco-padding"><p class="plantin-mt" style="margin: 0 auto">Our newest product uses 8 cameras or more to capture magical GIFs.</p></div><div class="bosco-button-row"><a href="/products/multicam" class="bosco-button-cta"><button class="btn bosco-button-transparent"><h4>LEARN MORE</h4></button> </a><a href="/get-the-bosco" class="bosco-button-cta"><button class="btn bosco-button-highlight"><h4>BOOK NOW</h4></button></a></div></div><div class="text-center" style="width: 100%; margin 0; margin-top: 55px; height: 100%; overflow: hidden"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/multicam/product-shot.jpg" class="img-faded tween-pan"></div></div></div><!-- Gif Booth Product Feature --><div class="jumbotron bosco-jumbotron bosco-jumbotron-white-background" style="background-color: white; margin-top: 0; margin-bottom: 0"><div class="container-liquid" style="position: relative"><div class="white-background-product-jumbotron"></div><div class="bosco-jumbotron-text text-center"><h1 class="header">GIF BOOTH</h1><div class="col-xs-12 col-sm-10 col-sm-offset-1 bosco-padding"><p class="plantin-mt" style="margin: 0 auto">We helped bring GIFs back into the social media age by introducing the first ever animated GIF booth.</p></div><div class="bosco-button-row"><a href="/products/gif-booth" class="bosco-button-cta"><button class="btn bosco-button-transparent"><h4>LEARN MORE</h4></button> </a><a href="/get-the-bosco" class="bosco-button-cta"><button class="btn bosco-button-highlight"><h4>BOOK NOW</h4></button></a></div></div><div class="text-center" style="width: 100%; margin 0; height: 100%; overflow: hidden"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth-white.png" class="img-faded tween-pan"></div></div></div><!-- Bosco Lite --><div class="jumbotron bosco-jumbotron" style="margin-top: 0; margin-bottom: 0"><div class="container-liquid" style="position: relative; overflow: hidden"><div class="bosco-jumbotron-text text-center"><h1 class="header">THE BOSCO LITE</h1><div class="col-xs-12 col-sm-10 col-sm-offset-1 bosco-padding"><p class="plantin-mt" style="margin: 0 auto">With a 2ft x 2ft footprint, our iOS product is the non-printing, super portable GIF Booth.</p></div><div class="bosco-button-row"><a href="/products/the-bosco-lite" class="bosco-button-cta"><button class="btn bosco-button-transparent"><h4>LEARN MORE</h4></button> </a><a href="/get-the-bosco" class="bosco-button-cta"><button class="btn bosco-button-highlight"><h4>BOOK NOW</h4></button></a></div></div><div class="text-center" style="width: 100%; margin 0; height: 100%; overflow: hidden"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/product-ios-black.png" class="img-faded tween-pan"></div></div></div><!-- #Video Confessional --><div class="jumbotron bosco-jumbotron" style="margin-top: 0; margin-bottom: 0"><div class="container-liquid" style="position: relative"><div class="bosco-jumbotron-text text-center"><h1 class="header">VIDEO BOOTH</h1><div class="col-xs-12 col-sm-10 col-sm-offset-1 bosco-padding"><p class="plantin-mt" style="margin: 0 auto">Inspired by the video confessional format made famous by reality TV and documentary film, The Bosco\'s Video Booth lets you tell your story.</p></div><div class="bosco-button-row"><a href="/products/video-booth" class="bosco-button-cta"><button class="btn bosco-button-transparent"><h4>LEARN MORE</h4></button> </a><a href="/get-the-bosco" class="bosco-button-cta"><button class="btn bosco-button-highlight"><h4>BOOK NOW</h4></button></a></div></div><div class="text-center" style="width: 100%; margin 0; height: 100%; overflow: hidden"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/video-confessional-black.png" class="img-faded tween-pan"></div></div></div><!-- #Print Product Feature --><div class="jumbotron bosco-jumbotron bosco-jumbotron-white-background" style="background-color: white; margin-top: 0; margin-bottom: 0"><div class="container-liquid" style="position: relative"><div class="white-background-product-jumbotron"></div><div class="bosco-jumbotron-text text-center"><h1 class="header">#PRINT</h1><div class="col-xs-12 col-sm-10 col-sm-offset-1 bosco-padding"><p class="plantin-mt" style="margin: 0 auto">When users tag photos with your custom hashtag on Twitter or Instagram, the Bosco #print aggregates them & prints a branded copy.</p></div><div class="bosco-button-row"><a href="/products/print-station" class="bosco-button-cta"><button class="btn bosco-button-transparent"><h4>LEARN MORE</h4></button> </a><a href="/get-the-bosco" class="bosco-button-cta"><button class="btn bosco-button-highlight"><h4>BOOK NOW</h4></button></a></div></div><div class="text-center" style="width: 100%; margin 0; height: 100%; overflow: hidden"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/print/print-station-white.png" class="img-faded tween-pan" style="margin: 0 auto"></div></div></div><!-- Case Studies --><div class="jumbotron bosco-jumbotron" style="margin-top: 0; margin-bottom: 0; height: auto"><a href="/case-studies" class="bosco-button-cta hide-xs"><div class="container-liquid" style="position: relative; height: auto"><div class="bosco-jumbotron-text text-center"><h1 class="header">CASE STUDIES</h1><div class="bosco-button-row hidden-xs"><button class="btn bosco-button-transparent"><h4>VIEW ALL</h4></button></div></div><div class="text-center hidden-xs hidden-sm" style="width: 100%; margin 0; height: 100%"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/productpage-image-revised-foreverloop.gif" class="img-responsive img-faded" style="min-width: 100%; height: auto"></div><div class="text-center hidden-md hidden-lg" style="width: 100%; margin 0; height: 100%"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/case-studies/mobilcasestudy-2columns-2.gif" class="img-responsive img-faded-darker" style="min-width: 100%"></div></div></a></div></div><!-- including standard footer --><ng-include src="\'footer.template.html\'"></ng-include>'), $templateCache.put("the-bosco-lite.template.html", '<!-- including standard navigation header --><navigation></navigation><!-- Video Header --><section class="main main-product"><div video-player video="boscoLiteVideo" class="jumbotron bosco-jumbotron" style="margin-top: 0"><div class="video"><vimeo video="boscoLiteVideo"></vimeo><i class="fa fa-2x fa-times close-button"></i></div><div class="bosco-jumbotron-content-wrapper"><div class="bosco-jumbotron-content-container"><div class="bosco-jumbotron-content bosco-jumbotron-text text-center"><h1 class="header">THE BOSCO LITE</h1><img class="play-button" src="https://s3.amazonaws.com/thebosco/angular-assets/images/play-button.png"><div class="bosco-button-row"><a href="/get-the-bosco" class="bosco-button-cta"><button class="btn bosco-button-highlight"><h4>BOOK NOW</h4></button></a></div></div></div><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/video3.gif" class="img-responsive hidden-md hidden-lg" style="position: absolute; min-width: 100%; opacity: 0.5"><video src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/TheBoscoLite.mp4" class="img-responsive hidden-xs hidden-sm" style="position: absolute; min-width: 100%; opacity: 0.5" autoplay loop></video></div></div></section><!-- Product Info --><section class="product"><!-- Design --><div id="design"><div class="rotator-container"><rotator class="owl-carousel hidden-xs"><img frame src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/details/design/bosco-lite-rotator/bosco-lite-rotator-1.jpg"> <img frame src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/details/design/bosco-lite-rotator/bosco-lite-rotator-2.jpg"> <img frame src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/details/design/bosco-lite-rotator/bosco-lite-rotator-3.jpg"> <img frame src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/details/design/bosco-lite-rotator/bosco-lite-rotator-4.jpg"> <img frame src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/details/design/bosco-lite-rotator/bosco-lite-rotator-5.jpg"> <img frame src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/details/design/bosco-lite-rotator/bosco-lite-rotator-6.jpg"> <img frame src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/details/design/bosco-lite-rotator/bosco-lite-rotator-7.jpg"> <img frame src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/details/design/bosco-lite-rotator/bosco-lite-rotator-8.jpg"> <img frame src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/details/design/bosco-lite-rotator/bosco-lite-rotator-9.jpg"> <img frame src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/details/design/bosco-lite-rotator/bosco-lite-rotator-10.jpg"> <img frame src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/details/design/bosco-lite-rotator/bosco-lite-rotator-11.jpg"> <img frame src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/details/design/bosco-lite-rotator/bosco-lite-rotator-12.jpg"> <img frame src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/details/design/bosco-lite-rotator/bosco-lite-rotator-13.jpg"> <img frame src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/details/design/bosco-lite-rotator/bosco-lite-rotator-14.jpg"> <img frame src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/details/design/bosco-lite-rotator/bosco-lite-rotator-15.jpg"></rotator><img class="visible-xs rotator-gif" src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/bosco-lite-rotating.gif"></div></div><!-- GIFs Examples --><div class="gifs-examples"><gifs-examples class="owl-carousel"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/gifs-examples/soho-house.gif"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/gifs-examples/soulcycle.gif"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/gifs-examples/akt.gif"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/gifs-examples/texture-on-the-runway.gif"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/gifs-examples/clubbin-love.gif"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/gifs-examples/fader.gif"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/gifs-examples/farfetch.gif"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/gifs-examples/gwen-stefani.gif"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/gifs-examples/halloween-on-mars.gif"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/gifs-examples/hot-girls-eating-pizza.gif"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/gifs-examples/in-the-city.gif"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/gifs-examples/juice-generation.gif"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/gifs-examples/julie-and-jordan.gif"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/gifs-examples/maderas.gif"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/gifs-examples/moma.gif"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/gifs-examples/opening-ceremony.gif"></gifs-examples></div><!-- Customization --><div id="customization"><!-- Video player jumbotron --><div class="jumbotron bosco-jumbotron product-customization" style="margin-top: 0; margin-bottom: 0"><div class="bosco-jumbotron-background" style="background-image: url(\'https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/bosco-lite-customization-backgorund.png\'); background-color: white; opacity: 0.2"></div><div class="bosco-jumbotron-content-container"><div class="bosco-jumbotron-content text-center"><h1>CUSTOMIZE ALL ASPECTS OF THE BOSCO EXPERIENCE</h1><h3 style="margin-top: 30px">FROM THE <span class="bosco-gold">TOUCH SCREEN</span>, TO THE <span class="bosco-gold">SOCIAL COPY</span>.<br>AND OF COURSE THE <span class="bosco-gold">GIF</span>.</h3><a href="/case-studies"><button type="submit" class="btn btn-default bosco-button-transparent" style="color: black; border-color: black; margin-top: 30px"><h4>SUPER CUSTOM PROJECTS</h4></button></a></div></div></div></div><!-- Product details --><div class="bosco-accordion bosco-accordion-product"><!-- UX --><div id="ux" class="text-center"><!-- Video player jumbotron --><div video-player video="uxVideo" class="jumbotron bosco-jumbotron product-ux" style="margin-top: 0"><div class="video"><vimeo video="uxVideo"></vimeo><i class="fa fa-2x fa-times close-button"></i></div><div class="bosco-jumbotron-content-container"><div class="bosco-jumbotron-content text-center"><h1>OUR USER EXPERIENCE IS<br>INTUITIVE AND SIMPLE.</h1><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/icons/lite-ux-fullsize.png" class="img-responsive hidden-xs" style="max-width: 95%"><ux-steps class="owl-carousel visible-xs"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/icons/Lite-ux-icons-01-07.png" class="img-responsive"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/icons/Lite-ux-icons-01-08.png" class="img-responsive"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/icons/Lite-ux-icons-01-09.png" class="img-responsive"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/icons/Lite-ux-icons-01-10.png" class="img-responsive"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/icons/Lite-ux-icons-01-11.png" class="img-responsive"></ux-steps><img class="play-button hidden-xs hidden-sm" src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/play-button-black.png"></div></div></div></div></div><!-- Tech specs --><div id="tech-specs" style="margin-bottom: 45px"><div><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/the-bosco-lite/LIte+techspecs-hires-05.png" class="img-responsive" style="min-width: 80%; margin: 0 auto"><div class="trade-gothic text-center" style="text-align: center; width: 100%; z-index: 3; color: white"><h3 style="margin-bottom: 0; margin-top: 0">POWER: 2 15 AMP OUTLETS</h3><h3 style="margin-top: 5px">INTERNET: 10 MBPS UP/DOWN</h3><h4>FUNCTIONAL WITHOUT INTERNET</h4></div></div></div><!-- Metrics --><div id="metrics" class="text-center"><div video-player class="jumbotron bosco-jumbotron product-metrics" style="margin-top: 0; margin-bottom: 0"><div class="video"><vimeo video-id="153974780" id="ux-video"></vimeo><i class="fa fa-2x fa-times close-button"></i></div><div class="bosco-jumbotron-content-container"><div class="bosco-jumbotron-content text-center"><h2>IN-DEPTH METRICS<br>FOR EVERY PROJECT</h2><div class="metrics-infographic"><div class="gifs-created"><span class="info-number">236</span> <span class="info-label bosco-gold">GIFs<br>created</span></div><div class="dotted-lines">- - - - - -</div><div class="impressions"><span class="info-number">24,200</span> <span class="info-label">social media<br>impressions</span></div></div><h3>CONTEXTUALIZING HOW WE HELP DELIVER OVER 24,000 SOCIAL<br>MEDIA IMPRESSIONS AT AN AVERAGE EVENT.</h3></div></div></div></div><!-- Case Studies --><div class="text-center" style="margin-bottom: 20px"><h1 class="trade-gothic" style="color: white"><a href="/case-studies" style="text-decoration: none">CASE STUDIES</a></h1><hr class="hr-bosco"></div><div class="row no-gutter" style="background-color: black"><a href="/case-studies/row-hotels"><div class="col-xs-12 col-md-6"><div class="bosco-jumbotron-text text-center case-studies"><h1 style="color: white">THE BOSCO + ROW HOTELS</h1><hr class="hr-bosco"><button type="submit" class="btn btn-default bosco-button-black"><h4>VIEW</h4></button></div><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/case-studies/the-bosco-row-hotels.gif" class="img-responsive img-faded" style="min-width: 100%"></div></a><a href="/case-studies/dkny"><div class="col-xs-12 col-md-6"><div class="bosco-jumbotron-text text-center case-studies"><h1 style="color: white">THE BOSCO + DKNY</h1><hr class="hr-bosco"><button type="submit" class="btn btn-default bosco-button-black"><h4>VIEW</h4></button></div><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/case-studies/the-bosco-dkny.gif" class="img-responsive img-faded" style="min-width: 100%"></div></a></div></section><!-- including standard footer --><ng-include src="\'footer.template.html\'"></ng-include>'),
        $templateCache.put("video-booth.template.html", '<!-- including standard navigation header --><navigation></navigation><!-- Video player jumbotron --><section class="main main-product"><div video-player video="videoBoothVideo" class="jumbotron bosco-jumbotron" style="margin-top: 0"><div class="video"><vimeo video="videoBoothVideo"></vimeo><i class="fa fa-2x fa-times close-button"></i></div><div class="bosco-jumbotron-content-wrapper"><div class="bosco-jumbotron-content-container"><div class="bosco-jumbotron-content bosco-jumbotron-text text-center"><h1 class="header">VIDEO BOOTH</h1><img class="play-button" src="https://s3.amazonaws.com/thebosco/angular-assets/images/play-button.png"><div class="bosco-button-row"><a href="/get-the-bosco" class="bosco-button-cta"><button class="btn bosco-button-highlight"><h4>BOOK NOW</h4></button></a></div></div></div><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/video-booth/video5.gif" class="img-responsive hidden-md hidden-lg" style="position: absolute; min-width: 100%; opacity: 0.5"><video src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/video-booth/VideoBooth.mp4" class="img-responsive hidden-sm hidden-xs" style="position: absolute; min-width: 100%; opacity: 0.5" autoplay loop></video></div></div></section><!-- Video Header --><section class="product"><!-- Product details --><div class="bosco-accordion bosco-accordion-product"><!-- Design --><div id="design"><div class="rotator-container"><rotator class="owl-carousel hidden-xs"><img frame src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/design/gif-booth-rotator-1.jpg"> <img frame src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/design/gif-booth-rotator-2.jpg"> <img frame src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/design/gif-booth-rotator-3.jpg"> <img frame src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/design/gif-booth-rotator-4.jpg"> <img frame src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/design/gif-booth-rotator-5.jpg"> <img frame src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/design/gif-booth-rotator-6.jpg"> <img frame src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/design/gif-booth-rotator-7.jpg"> <img frame src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/design/gif-booth-rotator-8.jpg"> <img frame src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/design/gif-booth-rotator-9.jpg"> <img frame src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/design/gif-booth-rotator-10.jpg"> <img frame src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/design/gif-booth-rotator-11.jpg"></rotator><img class="visible-xs rotator-gif" src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/design/gif-booth-rotator.gif"></div></div><!-- Video Booth Examples --><!-- <div class="container-liquid" style="margin-top: 0; margin-bottom: 0; background-color: white;">\n            <div style="text-align: center;">\n                <iframe src="https://player.vimeo.com/video/160641113?autoplay=1&loop=1&title=0&byline=0&portrait=0" width="1168" height="644" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n            </div>\n        </div> --><!-- Customization --><div id="customization"><!-- Video player jumbotron --><div video-player video="customizationVideo" class="jumbotron bosco-jumbotron product-customization" style="margin-top: 0; margin-bottom: 0"><div class="video"><vimeo video="customizationVideo"></vimeo><i class="fa fa-2x fa-times close-button"></i></div><div class="bosco-jumbotron-background" style="background-image: url(\'https://s3.amazonaws.com/thebosco/angular-assets/images/products/gif-booth/details/customization.jpg\'); background-color: white; opacity: 0.2"></div><div class="bosco-jumbotron-content-container"><div class="bosco-jumbotron-content text-center"><h1>CUSTOMIZE ALL ASPECTS OF THE BOSCO EXPERIENCE</h1><h3 style="margin-top: 30px">FROM THE <span class="bosco-gold">VINYL WRAP</span>, TO THE <span class="bosco-gold">BACKDROP</span>. FROM THE <span class="bosco-gold">TOUCH SCREEN</span>, TO THE <span class="bosco-gold">SOCIAL COPY</span>, THE <span class="bosco-gold">PRINT</span>, AND OF COURSE THE <span class="bosco-gold">VIDEO</span>.</h3><a href="/case-studies"><button type="submit" class="btn btn-default bosco-button-transparent" style="color: black; border-color: black; margin-top: 30px"><h4>SUPER CUSTOM PROJECTS</h4></button></a></div></div></div></div><!-- UX --><div id="ux" class="text-center" style="padding-top: 15px; padding-bottom: 15px"><!-- Video player jumbotron --><div video-player video="uxVideo" class="jumbotron bosco-jumbotron product-ux" style="margin-top: 0"><div class="video"><vimeo video="uxVideo"></vimeo><i class="fa fa-2x fa-times close-button"></i></div><div class="bosco-jumbotron-content-container"><div class="bosco-jumbotron-content text-center"><h1>OUR USER EXPERIENCE IS<br>INTUITIVE AND SIMPLE.</h1><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/video-booth/product-tabs-icons-video.png" class="img-responsive hidden-xs" style="max-width: 95%"><ux-steps class="owl-carousel visible-xs"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/video-booth/ux-icon-1.png" class="img-responsive"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/video-booth/ux-icon-2.png" class="img-responsive"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/video-booth/ux-icon-3.png" class="img-responsive"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/video-booth/ux-icon-4.png" class="img-responsive"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/video-booth/ux-icon-5.png" class="img-responsive"> <img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/video-booth/ux-icon-6.png" class="img-responsive"></ux-steps><img class="play-button hidden-xs hidden-sm" src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/play-button-black.png"></div></div></div></div><!-- Tech specs --><div id="tech-specs"><gif-booth-tech-specs><div><h1 class="bosco-gold trade-gothic-20 tech-specs-title">SEATED<br>SETUP</h1><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/video-booth/Video%2BSeated%2Btechspecs-hires-smaller-2-cropped.png" class="img-responsive" style="min-width: 100%"><div class="trade-gothic text-center" style="text-align: center; width: 100%;color: white"><h3 style="margin-bottom: 0">POWER: 2 15 AMP OUTLETS</h3><h3 style="margin-top: 5px">INTERNET: 10 MBPS UP/DOWN</h3><h4>FUNCTIONAL WITHOUT INTERNET</h4></div></div><div><h1 class="bosco-gold trade-gothic-20" style="text-align: center; width: 100%; font-size: 63px">STANDING<br>SETUP</h1><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/products/video-booth/Video%2BStanding%2Btechspecs-hires-smaller-2-cropped.png" class="img-responsive" style="min-width: 100%"><div class="trade-gothic text-center" style="text-align: center; width: 100%;color: white"><h3 style="margin-bottom: 0">POWER: 2 15 AMP OUTLETS</h3><h3 style="margin-top: 5px">INTERNET: 10 MBPS UP/DOWN</h3><h4>FUNCTIONAL WITHOUT INTERNET</h4></div></div></gif-booth-tech-specs><!-- Metrics --><div id="metrics" class="text-center"><div class="jumbotron bosco-jumbotron product-metrics" style="margin-top: 0; margin-bottom: 0"><div class="bosco-jumbotron-content-container"><div class="bosco-jumbotron-content text-center"><h2>IN-DEPTH METRICS<br>FOR EVERY PROJECT.</h2><div class="metrics-infographic"><div class="gifs-created"><span class="info-number">198</span> <span class="info-label bosco-gold">videos<br>created</span></div><div class="dotted-lines">- - - - - -</div><div class="impressions"><span class="info-number">22,700</span> <span class="info-label">social media<br>impressions</span></div></div><h3>CONTEXTUALIZING HOW WE HELP DELIVER OVER 22,000 SOCIAL<br>MEDIA IMPRESSIONS AT AN AVERAGE EVENT.</h3></div></div></div></div></div></div><!-- Case Studies --><div class="text-center" style="margin-bottom: 20px"><h1 class="trade-gothic" style="color: white"><a href="/case-studies" style="text-decoration: none">CASE STUDIES</a></h1><hr class="hr-bosco"></div><div class="row no-gutter" style="background-color: black"><a href="/case-studies/row-hotels"><div class="col-xs-12 col-md-6"><div class="bosco-jumbotron-text text-center case-studies"><h1 style="color: white">THE BOSCO + ROW HOTELS</h1><hr class="hr-bosco"><button type="submit" class="btn btn-default bosco-button-black"><h4>VIEW</h4></button></div><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/case-studies/the-bosco-row-hotels.gif" class="img-responsive img-faded" style="min-width: 100%"></div></a><a href="/case-studies/dkny"><div class="col-xs-12 col-md-6"><div class="bosco-jumbotron-text text-center case-studies"><h1 style="color: white">THE BOSCO + DKNY</h1><hr class="hr-bosco"><button type="submit" class="btn btn-default bosco-button-black"><h4>VIEW</h4></button></div><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/case-studies/the-bosco-dkny.gif" class="img-responsive img-faded" style="min-width: 100%"></div></a></div></section><!-- including standard footer --><ng-include src="\'footer.template.html\'"></ng-include>'), $templateCache.put("sitemap.template.html", '<!-- including standard navigation header --><navigation></navigation><!-- Jumbotron --><div class="jumbotron bosco-jumbotron-no-background"><div class="" style="position: relative"><div class="text-center"><h1>THE BOSCO SITE INDEX</h1><!-- <div>\n                <p class="plantin-mt">All the stuff in one place.</p>\n            </div> --></div></div></div><!-- templates content --><div class="container-liquid sitemap" style="font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; line-height: 2em; color: black; background-color: white; padding-top: 60px; padding-bottom: 60px"><div class="container trade-gothic"><!-- Sitemap --><div class="col-xs-12 col-sm-4"><ul class="list-unstyled"><li><a href="/photos"><h2>PHOTOS</h2></a></li><li><a href="/what-is-the-bosco"><h2>WHAT IS THE BOSCO?</h2></a></li><li><a href="/get-the-bosco"><h2>GET THE BOSCO</h2></a></li><li><a href="/jobs"><h2>JOBS</h2></a></li><li><a href="/team"><h2>TEAM</h2></a></li><li><a href="/terms"><h2>TERMS</h2></a></li></ul></div><div class="col-xs-12 col-sm-4"><ul class="list-unstyled"><li><a href="/products"><h2>PRODUCTS</h2></a></li><ul class="list-unstyled"><li><a href="/products/gif-booth"><h3>GIF BOOTH</h3></a></li><li><a href="/products/the-bosco-lite"><h3>THE BOSCO LITE</h3></a></li><li><a href="/products/video-booth"><h3>VIDEO BOOTH</h3></a></li><li><a href="/products/print-station"><h3>#PRINT</h3></a></li></ul></ul></div><div class="col-xs-12 col-sm-4"><ul class="list-unstyled"><li><a href="/case-studies"><h2>CASE STUDIES</h2></a></li><ul class="list-unstyled"><li><a href="/case-studies/hm"><h3>H&M</h3></a></li><li><a href="/case-studies/emusic-mother"><h3>EMUSIC & MOTHER</h3></a></li><li><a href="/case-studies/row-hotels"><h3>ROW HOTELS</h3></a></li><li><a href="/case-studies/gatorade"><h3>GATORADE</h3></a></li><li><a href="/case-studies/lexus-pandora"><h3>LEXUS & PANDORA</h3></a></li><li><a href="/case-studies/hennessy"><h3>HENNESSY</h3></a></li><li><a href="/case-studies/animated-overlays"><h3>ANIMATED OVERLAYS</h3></a></li><li><a href="/case-studies/dkny"><h3>DKNY</h3></a></li><li><a href="/case-studies/met-life"><h3>MET LIFE</h3></a></li><li><a href="/case-studies/olympus"><h3>OLYMPUS</h3></a></li><li><a href="/case-studies/wired"><h3>WIRED</h3></a></li></ul></ul></div></div></div><!-- including standard footer --><ng-include src="\'footer.template.html\'"></ng-include>'), $templateCache.put("slideshow-1.template.html", '<div class="row" style="height: 100%"><div class="col-xs-4 col-xs-offset-4" style="margin-top: 50px" ng-class="{\'full-height-container\': isFullHeight}"><img class="img-responsive center-block" ng-src="https://s3.amazonaws.com/thebosco/{{ currentImageURL || \'placeholder\'}}" ng-class="{\'full-height-slideshow-image\': isFullHeight}"></div></div>'), $templateCache.put("slideshow-2-mp4.template.html", '<!-- Slideshow Container --><div class="slideshow-2-mp4-container"><div ng-repeat="asset in pageAssets track by $index"><video ng-class="{transition: asset.fade}" loop autoplay ng-src="{{ asset.url }}"></video></div></div>'), $templateCache.put("slideshow-2.template.html", '<div class="slideshow-2-image-container"><div class="row no-gutter no-vertical-padding" style="margin-left: 0; margin-right: 0"><div class="col-xs-6 col-sm-6 col-md-3 event-container" bindonce="events" ng-repeat="asset in pageAssets track by $index"><img class="img-responsive" ng-class="{transition: asset.fade}" ng-src="https://s3.amazonaws.com/thebosco/{{ asset.filename || \'placeholder\'}}"></div></div></div>'), $templateCache.put("slideshow-beauty-con.template.html", '<div id="slideshow-beauty-con-container" style="opacity: 0"><img ng-src="{{ pageAssets[0].url }}" class="a"> <img ng-src="{{ pageAssets[1].url }}" class="b"></div>'), $templateCache.put("slideshow-cadillac-house.template.html", '<div class="slideshow-cadillac-house-container"><div class="outer"><div class="inner"><img ng-src="{{ assets.a.asset.url }}" style="bottom: 0; opacity: 0" class="a" ng-class="assets.a.asset.active ? \'active\' : \'inactive\'"></div></div><div class="outer bottom"><div class="inner bottom"><img ng-src="{{ assets.b.asset.url }}" style="opacity: 0" class="b" ng-class="assets.a.asset.active ? \'active\' : \'inactive\'"></div></div></div>'), $templateCache.put("slideshow-grid.template.html", "<div class=\"slideshow-grid-container\"><div ng-class=\"{'slideshow-grid-vertical-center': (verticallyCenter() === 'vertical'), 'slideshow-grid-horizontal-center': (verticallyCenter() === 'horizontal')}\"><img ng-repeat=\"asset in pageAssets track by $index\" ng-style=\"{ 'width' : imageWidth }\" ng-class=\"{'slideshow-grid-horizontal-asset': (verticallyCenter() === 'horizontal')}\" ng-src=\"https://s3.amazonaws.com/thebosco/{{ asset.filename || 'placeholder'}}\"></div></div>"), $templateCache.put("slideshow-juice-generation-horizontal.template.html", '<div id="juice-generation-horizontal-container" ng-click="toggleFullScreen($event)"><div id="content"><meta name="viewport" content="width=device-width,initial-scale=1"><img id="background" src="https://s3.amazonaws.com/thebosco-public/slideshow/juice-generation/juice-generation-horizontal-transparent.png" alt="" style="width: 1920px; position: absolute; top: 0px; left: 0; z-index: 102" width="1920"><div id="image" class="image1"></div><div style="width: 100%" id="slideshow-div"><img ng-src="{{ slideshowImages[0].url }}" id="0" style="width: 657px; z-index: 100; position: absolute; top: 90px; left: 170px; -webkit-transform: rotate(11.2deg); transform: rotate(11.2deg); zoom: 1.16"> <img ng-src="{{ slideshowImages[1].url }}" id="1" style="width: 689px; z-index: 101; position: absolute; top: 92px; left: 855px; -webkit-transform: rotate(-7deg); transform: rotate(-7deg); zoom: 1.16"></div></div></div>'), $templateCache.put("slideshow-juice-generation-vertical.template.html", '<div id="juice-generation-vertical-container" ng-click="toggleFullScreen($event)"><div id="content"><meta name="viewport" content="width=device-width,initial-scale=1"><img id="background" src="https://s3.amazonaws.com/thebosco-public/slideshow/juice-generation/juice-generation-vertical-transparent.png" alt="" style="width: 1080px; position: absolute; top: 0px; left: 0; z-index: 101" width="1080"><div id="image" class="image1"></div><div style="width: 100%" id="slideshow-div"><img ng-src="{{ slideshowImages[0].url }}" id="0" style="width: 657px; z-index: 100; position: absolute; top: 74px; left: 113px; -webkit-transform: rotate(11.2deg); transform: rotate(11.5deg); zoom: 1.16"> <img ng-src="{{ slideshowImages[1].url }}" id="1" style="width: 689px; z-index: 100; position: absolute; top: 828px; left: 128px; -webkit-transform: rotate(-7deg); transform: rotate(-7.2deg); zoom: 1.16"></div></div></div>'), $templateCache.put("slideshow-mp4-vertical.template.html", '<!-- page content --><div class="mp4-slideshow-vertical-container"><!-- mp4 --><video id="mp4-slideshow-video-top" class="mp4-slideshow-vertical-video" loop autoplay ng-src="{{ imageURLTop }}" type="video/mp4" preload="auto" style="position: absolute; top: 0; width: {{ videoWidth }}px; left: {{ letterbox }}px; opacity: {{ opacity }}; z-index: 5"></video><video id="mp4-slideshow-video-bottom" class="mp4-slideshow-vertical-video" loop autoplay ng-src="{{ imageURLBottom }}" type="video/mp4" preload="auto" style="position: absolute; top: 0; width: {{ videoWidth }}px; left: {{ letterbox }}px; z-index: 3"></video></div>'), $templateCache.put("slideshow-mp4.template.html", '<!-- page content --><div class="mp4-slideshow-container"><!-- mp4 --><video id="mp4-slideshow-video-top" class="mp4-slideshow-video" loop autoplay ng-src="{{ imageURLTop }}" type="video/mp4" preload="auto" style="height: {{ videoHeight }}px; left: {{ letterbox }}px; opacity: {{ opacity }}; z-index: 5"></video><video id="mp4-slideshow-video-bottom" class="mp4-slideshow-video" loop autoplay ng-src="{{ imageURLBottom }}" type="video/mp4" preload="auto" style="height: {{ videoHeight }}px; left: {{ letterbox }}px; z-index: 3"></video></div>'), $templateCache.put("slideshow-sephora.template.html", '<div class="sephora" style="border: solid 5px #000"><md-grid-list md-cols="16" md-row-height="9:9" md-gutter="5px" ...><md-grid-tile md-colspan="4" md-rowspan="4"><!-- user photo --> <img style="max-height: 100%; min-height: 100%; position: absolute; left: 0; top: 0" ng-src="{{ users[0] }}"></md-grid-tile><md-grid-tile md-colspan="2" md-rowspan="2"><!-- product shot --> <img id="product-0" style="max-height: 100%; min-height: 100%; position: absolute; left: 0; top: 0" ng-src="{{ productLocations[0] }}"></md-grid-tile><md-grid-tile md-colspan="4" md-rowspan="4"><!-- user photo --> <img style="max-height: 100%; min-height: 100%; position: absolute; left: 0; top: 0" ng-src="{{ users[1] }}"></md-grid-tile><md-grid-tile md-colspan="2" md-rowspan="3"><!-- product shot --> <img id="product-1" style="max-height: 100%; position: absolute; left: -25%; top: 0" ng-src="{{ productLocations[1] }}"></md-grid-tile><md-grid-tile md-colspan="4" md-rowspan="4"><!-- user photo --> <img style="max-height: 100%; min-height: 100%; position: absolute; left: 0; top: 0" ng-src="{{ users[2] }}"></md-grid-tile><md-grid-tile md-colspan="2" md-rowspan="2"><!-- product shot --> <img id="product-2" style="max-height: 100%; min-height: 100%; position: absolute; left: 0; top: 0" ng-src="{{ productLocations[2] }}"></md-grid-tile><md-grid-tile md-colspan="2" md-rowspan="2"><!-- product shot --> <img id="product-3" style="max-height: 100%; min-height: 100%; position: absolute; left: 0; top: 0" ng-src="{{ productLocations[3] }}"></md-grid-tile><md-grid-tile md-colspan="4" md-rowspan="2"><!-- product shot --> <img id="product-4" style="max-width: 100%; position: absolute; left: 0; top: -25%" ng-src="{{ productLocations[4] }}"></md-grid-tile><md-grid-tile md-colspan="4" md-rowspan="4"><!-- user photo --> <img style="max-height: 100%; min-height: 100%; position: absolute; left: 0; top: 0" ng-src="{{ users[3] }}"></md-grid-tile><md-grid-tile md-colspan="2" md-rowspan="2"><!-- product shot --> <img id="product-5" style="max-height: 100%; min-height: 100%; position: absolute; left: 0; top: 0" ng-src="{{ productLocations[5] }}"></md-grid-tile><md-grid-tile md-colspan="1" md-rowspan="1"><!-- product shot --> <img id="product-6" style="max-height: 100%; min-height: 100%; position: absolute; left: 0; top: 0" ng-src="{{ productLocations[6] }}"></md-grid-tile><md-grid-tile md-colspan="1" md-rowspan="1"><!-- product shot --> <img id="product-7" style="max-height: 100%; min-height: 100%; position: absolute; left: 0; top: 0" ng-src="{{ productLocations[7] }}"></md-grid-tile><md-grid-tile md-colspan="2" md-rowspan="3"><!-- product shot --> <img id="product-8" style="max-height: 100%; position: absolute; left: -25%; top: 0" ng-src="{{ productLocations[8] }}"></md-grid-tile><md-grid-tile md-colspan="4" md-rowspan="4"><!-- user photo --> <img style="max-height: 100%; min-height: 100%; position: absolute; left: 0; top: 0" ng-src="{{ users[4] }}"></md-grid-tile><md-grid-tile md-colspan="2" md-rowspan="2"><!-- product shot --> <img id="product-9" style="max-height: 100%; min-height: 100%; position: absolute; left: 0; top: 0" ng-src="{{ productLocations[9] }}"></md-grid-tile><md-grid-tile md-colspan="2" md-rowspan="3"><!-- product shot --> <img id="product-10" style="max-height: 100%; position: absolute; left: -25%; top: 0" ng-src="{{ productLocations[10] }}"></md-grid-tile><md-grid-tile md-colspan="2" md-rowspan="3"><!-- product shot --> <img id="product-11" style="max-height: 100%; position: absolute; left: -25%; top: 0" ng-src="{{ productLocations[11] }}"></md-grid-tile><md-grid-tile md-colspan="2" md-rowspan="2"><!-- product shot --> <img id="product-12" style="max-height: 100%; min-height: 100%; position: absolute; left: 0; top: 0" ng-src="{{ productLocations[12] }}"></md-grid-tile><md-grid-tile md-colspan="2" md-rowspan="1"><img style="max-height: 100%; min-width: 100%; position: absolute; left: 0; top: 0" src="https://s3.amazonaws.com/thebosco/angular-assets/images/slideshows/sephora/urban-decay-logo-2.png"></md-grid-tile><md-grid-tile md-colspan="1" md-rowspan="1"><!-- product shot --> <img id="product-13" style="max-height: 100%; min-height: 100%; position: absolute; left: 0; top: 0" ng-src="{{ productLocations[13] }}"></md-grid-tile><md-grid-tile md-colspan="1" md-rowspan="1"><!-- product shot --> <img id="product-14" style="max-height: 100%; min-height: 100%; position: absolute; left: 0; top: 0" ng-src="{{ productLocations[14] }}"></md-grid-tile><md-grid-tile md-colspan="1" md-rowspan="1"><!-- product shot --> <img id="product-15" style="max-height: 100%; min-height: 100%; position: absolute; left: 0; top: 0" ng-src="{{ productLocations[15] }}"></md-grid-tile><md-grid-tile md-colspan="1" md-rowspan="1"><!-- product shot --> <img id="product-16" style="max-height: 100%; min-height: 100%; position: absolute; left: 0; top: 0" ng-src="{{ productLocations[16] }}"></md-grid-tile></md-grid-list></div>'), $templateCache.put("slideshow-slimeshow.template.html", '<!-- logo overlay --> <img src="/assets/images/slimeshow/zach_logo.svg" style="position: absolute; top: 5%; width: 19%; left: 0; right: 0; margin: auto; z-index: 10"><!-- drips overlay --><div style="position: absolute; top: 0; left: 0; width: 100%; z-index: 4"><svg version="1.2" baseProfile="tiny" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 612 340.5" xml:space="preserve"><path style="fill: {{ slimeColorA }}; transition: all 3s; -webkit-transition: all 3s" fill="#9966CC" d="M0,26.1C2.2,23.5,4.4,21,4.7,21c5-0.3,8,3,9.3,6s4,30.7,4,36s-0.3,31,0,35s3,22.3,2,32.7s-2,57.7-2,60.3\n    s-0.2,8.3,2.2,8.7c2.4,0.3,5.4-0.7,5.4-12c0-11.3,0-38,0-49.3c0-11.3-4-89-4.3-96.3c-0.3-7.3-2-22-0.3-25s4-3,4,0s-0.8,4.6-0.1,7\n    s1.4,5.4,3.6,4s1.5-3.5,1.5-5.2s-0.3-5.5,0.1-6.1c0.4-0.6,3.1-2.2,3,1.1s0.4,15.9,1,17.8s0.5,5.1,1.4,5.4s3.5,1,2.5-5.5s-1-8-1-9.5\n    s0.9-4,1.2-3.9s0.7-2.5,1.3,3s2.1,10,2.1,13.8s2.4,26.1,2.5,30s1.1,15,1.2,20.9s0.5,11.4,1.1,15.6s1.1,13.8,1,19.5s-2.6,39.9-2.6,46\n    s0.1,28.1,0.9,30.6s2.4,7.8,4.8,7.8s3.8-7.9,3.8-12.9s-1.1-38.8-0.9-44.6s3.1-39,2.6-45s-2.5-22.5-2.2-26.1s3.1-4.6,3.2-8.5\n    s0.2-4.6,0-7.2s1.6-9.1,1.6-11.6s1.5-3.1,1.5-4.8S60.5,40,61,37.6s4.2-7.4,4.2-13.1s0.9-9.1,2.4-14.6s8.2-8.6,11.7-8.7\n    s20.2-1.1,21.8,3.2s3.7,11.5,3.7,13s0.5,2,1.4,4.4s2,5.2,2,9s0.1,8.5,3,11s5.9,4.5,6.9,2.2s1-5.1,1-11.5s1.1-9.1,1.8-11.9\n    s0-7,0.8-11.8s-0.7-5.6,2.2-7.4s5.8-0.6,6.8,2.6S132,13,132,15.9S131.6,39,132,42s1.1,4.4,2.2,6.8s0.9,3.6,1.6,3.8s3,2.5,4.5,0.5\n    s2.5-5.4,1.5-11.8s-2.1-25.6-1.8-28.9s1.8-7.2,3.2-9.7s12.8-4.8,15,3s2.2,8,3.4,13.2s1.9,3.6,1.9,6.2s1.2,15.1,1.6,18.5\n    s0.5,6.8,1.6,6.9s4.4-4.5,4.8-12.6s-1.2-13.4-1.2-15.6s1.3-8.2,1.3-8.2s1.1-1.1,1.1,1.6s-0.9,5.6,0,6.8s1.2,4.5,2.1,2s1.1-2.1,1-4.9\n    s2-9,3.4-5.6s10.5,23.4,11.1,29.8s0.2,7,1.1,12.6s0.8,24,1.4,31.1s1.4,10.7,1.5,13.7c0.1,2.9,1,17.6,1.1,21.3s1.8,8.1,3.8,7.6\n    s3.5-2.2,3.5-10.4s0.9-11.9,1.8-13.4s0,0.2,0.9-1.5s3.4-3.9,4.1-2.1s1.5,2.8,1.5,6.9s0.1,19.1,0,20.1s0.4,3.6,1.1,4.5s2.9,0.2,3-2.5\n    s-0.9-4.5,0-6.5s1.8-9.4,1.9-11.1s0.6-5.4,1.2-5.5s2.6,2.6,2.6,5.2s-2,7.5-2,10.2s-0.4,18.5,0.4,22.9s-0.6,6.5-0.9,10.1\n    s0.5,13.9,0.6,16.1s1.1,2.9,1.1,2.9s0.8,11.2,1.5,3.1s1.9-8.8,2-9.4s0.4-4.9,0-9.8s-2-14.5-1.2-19s2.1-16.6,2-20.4s1.4-8.5,1.9-11.5\n    s0.5-14.2,2.5-14.2s4-1.9,3.6,17.1s-1.9,32.9-1.2,35.5s1.5,3.2,1.3,6.4s-0.7,9.4,0,11.9c0.7,2.5,1.3,6.6,1.4,11.1s-0.4,16.1,0,21.5\n    s2,31.8,2,39s-0.6,38.8-0.9,44.6s-0.9,24.8-0.9,28.8s-0.2,12.6,0.2,15.9s0.8,6.9,4.9,6.9s4.2-3.2,4.6-10.8s2.4-8.9,2.5-15.6\n    s3.8-33.8,4.6-40.3s-4-32-4-39.3s-2.2-64.8-0.2-68.7c2-3.8,2.3,33.2,2.2,40.7s1.2,43.8,3.2,45.8s3.7,4.2,3.7-3.5\n    c0-7.7-3-18.3-2.8-24c0.2-5.7,0.8-28.5,0.3-36.5s-1.3-33.7-0.7-39c0.7-5.3-0.8-28.2,0.4-32.3c1.2-4.2,2.9-9.5,5.3-9.5\n    c2.3,0,4.8,29,4,42c-0.8,13-1,20.8-1,30s0.8,18.5,1.2,23c0.3,4.5,0.3,10,1.2,10.8c0.8,0.8,5.2,5.7,5.5-4.8c0.3-10.5-2.2-17,0-23.5\n    c2.2-6.5,4.5-10.5,3.5-20.8c-1-10.3-2.5-18.7,1.2-24.5c3.7-5.8,5-8.5,5-8.5s-3,49.2-3,55c0,5.8-1.2,17.2,1.8,16.2s3.7-9,3.7-19.5\n    s1-58.2,4.2-60c3.2-1.8,6.3-6.8,7.8,3.7s0.7,29.3,0,37c-0.7,7.7-1.5,12-1,13.7c0.5,1.7,3.3,1.8,2.8,6.3s-1.7,9.8,0.1,10.8\n    c1.8,1,3.8,1.5,3.8-2.8s2-3,2-5.5s1.7-58.2,1-62s-0.2-10.5,1.3-11.3c1.5-0.8,4.5-1.2,4.5,12.2s-1,19.3,0,22.5c1,3.2,1.5,4.7,1.5,7.2\n    s3.3,5.3,2.5-8.8c-0.8-14.2-4-33.2-3.5-36.5c0.5-3.3,1.8-7,4.8-7s6.2,3,5.7,17.8s-2.7,48.2-2.3,53s-0.7,8.7,1,8.7s1.7-13.2,2.3-17.5\n    c0.7-4.3,1-45.3,2.5-48.8s3.2-8.3,7-8.7c3.8-0.3,4.3-0.8,5.5,0.8c1.2,1.7,2.5,2.7,2.5,5.7s-0.3,3.3,0,7.8c0.3,4.5,0.8,25,0,29.8\n    c-0.8,4.8-1.8,18.2-1.8,22.5c0,4.3-0.2,10.5-0.2,12.8c0,2.3,0.2,4.3,1.5,4.3c1.3,0,2.3-10.5,2.7-19.7c0.3-9.2,4.5-34.7,4.5-40\n    s-1.2-17,1.7-17c2.8,0,4.3,12.3,4.3,17.3c0,5-1,18.2,1.7,18.7c2.7,0.5,2-13.7,2-18.7c0-5,4-25.8,5.7-26.2c1.7-0.3,9.2-19.6,9.2,1.4\n    s-0.4,41.6-0.9,46.5c-0.5,4.8-2.5,28.7-2.5,30.9s0.8,19.8,1.2,24.6c0.3,4.8,1,34.2,1,39c0,4.8-1.3,33-0.8,37.3\n    c0.5,4.3,2.5,10.2,2.2,13.2c-0.3,3,1.5,10.5,2.8,10.5s2.2-2.3,2.2-5.3s-1-6.2,0-13.2s-0.8-21.7-1.3-29.7c-0.5-8-1-52.7-1.7-64.2\n    c-0.7-11.5,0.5-57,1-63.3c0.5-6.3,1.1-50.7,2.3-50.7s3.7,7.3,3.9,14c0.2,6.7-1.7,49-1.3,53.7c0.3,4.7,1.5,22.7,1.3,25.5\n    c-0.2,2.8,0.5,6.5,2,6.5s3.8-16.3,3-24.5c-0.8-8.2-2-55.5-0.8-58.3c1.2-2.8,2.7-9,4.3-12.5c1.7-3.5,3.7-4.7,6.8-0.8\n    c3.2,3.8,7-7,8.3-1.3c1.3,5.7,1.5,12.2,1.8,15c0.3,2.8,2.3,5.2,2.5,7.2c0.2,2,0.5,6.7,1.8,6.7c1.3,0,1-4.7,1.3-8.2s1.5-5.8,1.5-5.8\n    s-0.8,23.7,0,24.3c0.8,0.7,1,1.7,2.5,1.7s1.5-18,1.5-21.8c0-3.8,2.5-2.8,3,0.2s1,6.5,1.8,6.5c0.8,0,2.2,0.7,1.8-7\n    c-0.3-7.7,0.1-9.3,0.1-9.3s2.9,4,2.9,8s0.2,15.8,1.8,15.8s1.7-11.3,1.7-13.8s-0.8-5.7,0-6.5c0.8-0.8,1.5,17.7,1,28.5\n    s-0.5,64.7,0.2,69.8c0.7,5.2,2.5,47.3,2.5,48.8s0,16.5,0,16.5s0,2.5,1,2.5s1.8,0.2,1.8-6.8c0-7-2.2-48.2-2.2-51.3s0-28.2,0.8-32.3\n    c0.8-4.2,1-37.3-0.5-56.2s2.7-17,2.7-21.3c0-4.3-3-44.7,0-49s7.5-6.2,7.7-8.5c0.2-2.3,2.5-5.8,3.2-4.5c0.7,1.3,1.8-0.7,0.7,13.7\n    s-0.2,19.3,0.5,21.5c0.7,2.2,1.2,2.5,1.8-3.7c0.7-6.2,3-19.7,2.7-23.8s0.5-8,1-9.5s2.3-2,2.3,1.3s-0.8,32,0,34\n    c0.8,2,1.8,7.7,2.5,4.2c0.7-3.5-0.5-19.8,0-25.5S456.2,22,456.7,19s0.8-5.5,3.5-5.5c2.7,0,4.7,4.2,5,11.7c0.3,7.5,1.3,13.3,1.3,22.5\n    s-0.2,14.8,1.2,14.8c1.3,0,2.2-11.2,1.5-17.8c-0.7-6.7-0.9-18.3,0.2-24.8s1.1-13.3,4.3-13.7c3.2-0.3,7.3,5.8,7,21.2\n    C480.3,42.7,480,55,480,63.5s0.7,12.5,2,12.5s1.2-3.2,1.2-9.2s-0.2-27.5,0-31s0.5-4.5,2.3-5s2.8-0.8,2.8,5s0.8,23.7,1.2,24.2\n    s4.6,6.1,4.6-1.9s-1.6-21.6-1.6-25.8s-2.2-19.2,7.1-19.2s9,2.6,9.9,5.6s2.1,2.8,2.1,6.2s1.2,20.6,1.5,22s1.6,4.1,2.9,4\n    s1.9-0.8,1.4-6.1s-0.8-12.2-0.6-14.9s2.8-6.1,3.6-6.9s3.6-1.8,4.4,0.2s1.5,7.5,0.9,13.1s1.1,13.4,1.9,14.8s4-0.4,4.4-2.8\n    s1.9-9.9,2-15.5s0.8-11.1,1.8-12.1s2.6-1.5,2.6,2.1s-1.8,12.2,0,12.8s2.9-2.9,3.9-8.9s4-7.4,4.4-5.5s-0.4,21.9,0,23.1s-1,8-1,8.9\n    s-0.2,5,1.8,4.1s1.8-14.1,1.4-17.4s2.1-5,2.2-8.1s0.5-14.2,2-17.1s3.9-3.9,4.1,0s0,15.1,0,15.1s-0.2,1,1,1.5s2,0.6,2-2.1\n    s-0.9-12.2-0.9-14.4s1.1-3.8,1.9-3.9s4.8,1.8,4.8,5.6s0.8,8.2,1.2,10.5s2.2,14.4,2.2,18.8s2.2,58.5,2,64.5s1.9,105.8,1.9,112.5\n    s-0.3,36.5,0.8,39.8c1.2,3.3,2.2,6.2,4.3,6c2.2-0.2,3.3-5.2,2.8-16s-3.3-91.2-3-97.7c0.3-6.5,0.2-58.3,0-63.2\n    c-0.2-4.8-2.2-41.3,1-48.2c3.2-6.8,5.8-11.8,7.8-13c2-1.2,7-5,7.2-8.8c0.2-3.8,0.5-12.7,1.8-14.5s2.5-4,4-2.2s1.8,8.8,3.2,11.3\n    c1.3,2.5,3.8,5.2,4,10.8c0.2,5.7,2,13.5,2.8,15.2c0.8,1.7,0.5,6.5,2,7S612,0,612,0H0v22.7L0,26.1z"/></svg></div><!-- page content --><div class="slimeshow-container"><!-- maximum row 1 --><div class="slimeshow-square"><div class="slimeshow-content"><img src="{{ slideshowImages[0].url }}" class="slimeshow-image"></div></div><div class="slimeshow-square"><div class="slimeshow-content"><img src="{{ slideshowImages[1].url }}" class="slimeshow-image"></div></div><div class="slimeshow-square"><div class="slimeshow-content"><img src="{{ slideshowImages[2].url }}" class="slimeshow-image"></div></div><div class="slimeshow-square"><div class="slimeshow-content"><img src="{{ slideshowImages[3].url }}" class="slimeshow-image"></div></div><div class="slimeshow-square"><div class="slimeshow-content"><img src="{{ slideshowImages[4].url }}" class="slimeshow-image"></div></div><div class="slimeshow-square-2"><div class="slimeshow-content"><div style="position: absolute; z-index: 3; top: 0; left: 0; width: 100%"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1347.1 542.8" enable-background="new 0 0 1347.1 542.8" xml:space="preserve"><path style="fill: {{ slimeColorB }}; transition: all 3s;  -webkit-transition: all 3s" fill="#234674" d="M-662.7-3L-662.7-3l-0.1,269.6v262.8v59.4c1.4,2,3.1,3,4.8,3.2c4.2,0.5,8.3-4,8.5-11.8\n                c0.6-20.5-0.6-83.1-0.6-92.9c0-9.8-4.6-147.1-5.4-152.5c-0.8-5.3-6-88.3-4.4-97.4c3-17,21.3-12.7,28.3-11.5c6.9,1.2,11,2.9,14,10.3\n                c3,7.4,4.5,27.8,6.2,37.1c1.7,9.2,2.9,19.6,4.6,30c1.7,10.4-1.7,46.7-0.2,51.8c1.5,5-1.5,41.1-2.1,45.8c-0.6,4.6-1.5,61.1-1.5,65\n                c0,2.5-0.3,21.8,2.7,34.7c1.7,7.3,4.4,12.5,8.9,11.5c2.5-0.6,4.1-4,5.2-8.6c2.1-9.4,1.7-23.3,0.9-26.1c-1.1-4.2-1.2-59.9-1.8-66.2\n                c-0.6-6.3,2.3-74.4,4.4-81.5c2.2-7-2.7-67.4-2.9-73.5c-0.2-6.1,3.1-15.2,6-17.5c2.9-2.3,4,15,4,21.3c0,6.3,0.6,97.5,0.6,106.2\n                c0,8.7,1.7,129.8,1.7,135.6s-1.7,68.1-2.1,96.9c-0.2,15.4,0.4,61.9,1,104.9c0.5,37.3,0.9,72,0.6,81.4c-0.3,11.6,0.1,45.8,1,75.9\n                h20.6c-1.5-40.8-2.8-93.5-3.7-106.5c-0.6-9.5,0.2-42,1.2-73.2c1-29.7,2.3-58.1,3-63.9c1.4-11.9,5-68.3,5.6-80.4\n                c0.6-12.1-6.9-120-6.3-133.3c0.6-13.3-4.6-139.1-4.6-151.2c0-12.1,6.3-22.5,8.1-25.4c1.7-2.9,8.7-13.8,13.3-28.8\n                c4.6-15,18.5-18.5,23.7-24.8c5.2-6.3,15.6-21.3,17.9-26.5c2.3-5.2,9.8-13.3,12.7-17.9c2.9-4.6,6.3,8.6,5.6,23.1\n                c-0.7,14.4,2.5,33.5,2.5,48.5c0,15,1.1,39.2,0,51.9c-1.2,12.7-6.9,61.2-6.9,67.5c0,6.3,4,17.9,5.2,29.4c0.4,3.8,0.5,31.1,0.6,66.1\n                c0.1,70.5-0.2,172.5-0.1,177.2c0.2,7-0.7,20.1,0.4,25.3c1.2,5.2,2.3,16.7,2.3,21.9c0,5.2-2.9,38.1-2.9,45.2c0,7.1-0.5,22.9-1.2,28.2\n                c-0.7,5.4-0.4,28.7-2.2,33.3c-1.7,4.6-0.6,19.1,0.5,22.6c1.1,3.5-2.7,25.6,5.9,28.3c5.9,1.8,8.6-4,9.8-9.8\n                c1.1-5.8,1.1-39.9,2.5-45.4c1.5-5.6,1.4-38.3,0.8-46.9c-0.6-8.7,0.6-58.3,1.1-64c0.3-2.9,0.1-70.6-0.2-138.2\n                c-0.3-66.5-0.7-132.8-0.7-136.8c0-8.2-2.9-55.9-3.5-63.4c-0.6-7.5,3.5-62.3,4.7-69.6c1.2-7.2-0.1-49.9,1.1-56.8\n                c1.1-6.9-0.6-16.7,1.7-24.2s2.9-16.2,2.9-23.1c0-6.9-0.6-23.1,2.9-27.1c3.5-4,11-10.4,15.7-8.1c4.8,2.3,3.3,27.8,2.2,36.4\n                c-1.2,8.7,1.1,39.2,0.6,48.5c-0.6,9.2,0,61.7-0.2,67c-0.2,5.2,0.2,52.5,2.5,65.7c0.5,2.9,0.7,17.7,0.7,39.1c0,37-0.5,93.6-1.1,142.5\n                c-0.6,51-1.4,93.6-1.6,96.8c-0.3,3.8-0.9,15.7-1.6,28.1c-0.8,14.2-1.6,29.1-1.9,33.1c-0.6,7.5,1.7,25.9,2.3,33.5\n                c0.6,7.5,1.2,41.5,0.6,46.2c-0.4,2.9,0,5.8,1.4,7.4c0.8,0.9,2.1,1.5,3.8,1.2c1.5-0.2,3.3-5.1,4.8-11.9c3.1-13.7,5.3-35,3.5-41.1\n                c-2.7-9.1,1.5-50.9,1.9-60c0.2-6,1.1-116.2,1.7-194.5c0.3-41.7,0.5-74.4,0.5-77.6c0-9.2-1.2-43.3-1.7-55.4s1.2-56,2.7-65.5\n                c1.5-9.5,0.2-47.6-0.9-51c-1.2-3.5-1.2-60.6,0-68.7c1.2-8.1,4-16.7,8.1-21.3c4-4.6,11.5,6.3,15.5,13.1c4,6.8,9.5,10.6,15.4,24.8\n                c5.4,13.1-3.1,27.8,3.7,48.7c3.7,11.3,1.2,65.8,1.2,82.5v95.8c0,14.4,4.2,167,5.4,190.1c1.2,23.1,0,152.3-0.1,161.9\n                c-0.1,9.6,4.1,94.3,1.2,112.8c-1.7,11.2-4.1,33-2.8,49.1h3.2h18.8c0.1-9.3-1-20.2-1-28.9V710c0-23.4-6.9-90-4.3-117.7\n                c0.8-9,0.6-31.2,0-58.6c-1.3-56.6-4.2-135.2-2.5-164.4c2.6-43.3,3.5-96.1,2.6-113.4c-0.9-17.3-8.7-55.4-5.2-72.7\n                c3.5-17.3,2.1-15.7,2.2-24.5c0.1-11.8-4.8-21.3-0.5-35.2c0.7-2.2,1.3-4.2,1.9-6.1c-0.1,6.7-0.6,12.7,0.3,17.4\n                c0.9,4.9-0.9,8.8,2.3,10.1c3.3,1.3,3.9-6.6,3.3-11.8c-0.7-5.2,1.3-7.9,5.2-9.8c3.9-2,7.8,13.1,9.8,19c2,5.9,9.2,25.5,15.9,43.2\n                c6.7,17.6,13,57,16.9,78.6c3.9,21.6,0.7,60.3,0,74c-0.7,13.8,1.3,78,0.3,89.6c-0.6,7.6,0.3,23.7,0,37.2c-0.1,4.3-0.3,8.2-0.7,11.6\n                c-0.3,2.2-0.6,4.1-1,5.7c-1.5,5.4-1.6,11.3-0.2,16.5c1,3.6,2.7,6.8,5.2,9.4c-0.3,5.6-0.6,9.6-1,11.5c-3,14.5,0.4,89.6-0.4,117.4\n                c-0.8,27.8-5.1,99.7-6,123.9c0,0,0.6,20.8,0.6,25.3c0,4.5,1.7,23.6,3.3,26.2c1.7,2.6,8,5.2,8.7-0.2c0.7-5.4,0.2-11.4,0.3-15.6\n                c0.2-11.7,3.9-100,6.5-128.5c1.1-12.4,1.8-41.6,2-73.2c0.1-13.5,0.1-27.5,0.1-40.7c0-16-0.1-30.9-0.3-42.8\n                c5.5-4.6,6.3-18.1,6.8-24.5c0.6-8.5,0.6-91.7,1.3-101.6c0.1-1.6,0.1-5.4,0.1-10.5c-0.1-26.4-1.4-90.3-1.4-96.3\n                c0-7.2,1.3-33.4,3.9-40c2.6-6.6,5.9-3.2,7.9-9.8c2-6.6-3.3-9.8,2-14.4c0.8-0.7,1.6-1.1,2.5-1.3c0.7,8.9,1.7,24.1,0.8,28.8\n                c-1.3,6.8-3.1,11.7-3.1,21.6s1.8,23.8,1.4,33.7c-0.5,9.9-1.4,19.3-1.8,27c-0.4,7.6,0.5,13,0.5,22s-2.2,26.1-2.7,31\n                c-0.4,4.9,2.2,18,2.2,23.8c0,5.8,2.6,16.6,1.7,27.8c-0.9,11.2,3.4,8.8,4,3.1c0.7-5.6,0.6-38.6,0.1-44.9c-0.5-6.3-1.4-19.3-1.4-19.3\n                s1.4-27.4,1.8-33.7c0.4-6.3,4-9,4-15.7s-1.4-13.5-1.4-17.5c0-4-0.4-5.8-0.4-12.6s-0.5-9.9-0.5-16.2s1.8-6.7,1.3-13.5\n                c-0.5-6.7,1.3-35.1,1.3-35.1c0.2-2.5,0.5-5,0.8-7.4c1.3,1,2.6,2.4,3.8,3.9c0.6,3.4,1.2,6,1.2,9.4c0,4.9-0.9,18.9-1.8,24.3\n                s3.2,12.6,1.8,18c-1.3,5.4-0.5,13.9,1.8,13.9c2.2,0,1.8-6.7,2.7-9.9c0.9-3.1,1.4-8.1,0-14.4c-1.3-6.3-1.8-18.4-1.3-21.6\n                c0.2-1.7,1-5.4,1.5-9.1c5,12.5,9.1,30.8,7.8,38.9c-1.3,8.5,2,62.9,2.1,77.4c0.2,14.5,3.8,43.1,4.4,65.4c0.7,22.3-3.9,56.4-3.3,77.3\n                c0.7,21-2,146.8-2.6,162.5c-0.7,15.7-6.6,75.3,13.5,74.8c20.1-0.6,13.3-52.5,13.3-57.1c0-4.6-3.9-61.6-3.9-79.9\n                c0-18.3,3.3-61.6,4.6-82.6c1.3-21,3.9-32.1,7.2-50.5c3.3-18.3-6.5-49.2-7.2-59c-0.7-9.8-2.6-119.3-2.6-129.1c0-9.7,0-24.5,3.2-33.7\n                c0.1,3.7,0.3,6.7,0.5,8.8c2,20.2,0.9,70.1,1.4,80.6c0.5,10.6,3.7,64.8,4.8,72.4c1,7.7-0.9,7.7,3.5,16.3c4.4,8.6,8.1-2.9,4.7-20.2\n                c-3.5-17.2-2.1-29.3-2.2-46.1c-0.1-16.8-0.5-77.3-2.6-107.5c-0.3-4.3-0.5-10.1-0.6-17c2.1-0.9,4.8-1.9,8.5-3.1\n                c14.4-4.6,13.6,13.3,14.9,23.8c1.3,10.5,3.9,31.4,4,40.2c0.1,8.8,7.1,34.5,7.8,45.1c0.5,8.5-5.2,29.4,0.9,34.8\n                c1.5,1.3,3.8,1.7,7,0.6c3-0.9,4.8-3.5,5.9-7c2.3-7.4,1.1-19.4-0.8-31c-0.3-1.6-0.5-3.1-0.8-4.6c-2.2-11.5-4.8-22-5-26.3\n                c-0.7-11.1-1.1-43.7-5.7-55.5c-4.6-11.8-4.9-43.6-5.2-53.4c-0.3-9.8-0.2-25.4,6.3-39.9c6.5-14.4,1.3-36-0.5-49.2\n                c-1.8-13.1,7-32.5,8.4-34.7c2.1-3.4,4.1-6.4,6.1-9.1c-0.4,9.1-1.1,19.6-2.1,27c-1.8,13.9-3,87.5-3.4,104.7\n                c-0.4,17.3-0.3,28.3-0.2,44.1c0.1,15.8,1.7,42.2,2.7,56.6c1,14.4,0.6,23,1.6,33.6c1,10.6-3.3,13.5,1.1,16.3\n                c4.3,2.8,6.7-10.6,7.1-21.2c0.4-10.6-1.6-34.1-0.8-49.9c0.9-15.8-2.3-67.6-1.9-75.8c0.4-8.2,7.2-99.5,6.2-110\n                c-0.7-7.6,1.2-28,2.3-41.5c3.4-2.7,7.3-4.3,10.4-4.3c0.5,0,1.1,0,1.9,0.1c1.1,6.5,3.1,9.2,3.5,14.4c0.5,7.7-4.2,21.1-3.2,32.7\n                c1,11.5,5.4,24.9,5.5,34c0.1,9.1-4.9,84.6-4.4,95.6c0.6,11,1.7,41.3,1.7,41.3c0.8,50.9,1.6,101.7,2.4,152.6c0,0-0.9,14.9,5.4,14.8\n                c6.2,0,4.7-16.3,4.7-16.3c-0.7-41.1-1.5-82.2-2.2-123.3c0,0,2.4-8.2,4.2-13.5c1.9-5.3,1.7-29.3,2.1-43.7c0.4-14.4,1.5-98,2.9-106.7\n                c1.4-8.6-4.4-18.2,1.8-20.6c6.2-2.4,5.9,19.2,6.9,25.4s-2.6,76.4-2.5,79.8c0,3.4-2.3,12,3,13.4c5.3,1.4,6.2-11.6,6.2-11.6\n                s3.9-86.5,3.4-93.7c-0.5-7.2,5.1-19.7,8.5-19.2c3.4,0.4,0.6,18.7,2.1,28.3c1.5,9.6-2.9,94.7-1.9,111.4c1.1,16.8-1.1,60-1.5,72\n                c-0.4,12-0.4,20.2,4.4,20.6c4.8,0.4,3.2-26.4,3.1-35.5c0-9.1-1.2-37.9-1.7-48.5c-0.5-10.6,1.7-38.4,4-47.1\n                c2.3-8.7,13.2-70.7,17-77.5s12.3-32.2,16.1-33.2c3.8-1,3.5,24.9,3.5,28.8c0,3.8-7.9,63.5-7.4,66.8c0.5,3.4,0.1,15.4,0.1,20.6\n                c0,5.3-3.7,29.8-1.7,35c2,5.3-0.5,6.7,5.8,8.1s3.2-18.7,3.7-28.3c0.4-9.6,7.8-76,8.8-84.1c0.9-8.2,0.2-39.8,1.1-49.9\n                c0.4-20.2,4.4-21.8,7.7-21.5c3.3,0.4,3.6,5.7,4.1,14.2c0.9,17.4,1,45.7,0.1,54.7c-1.4,13.4,0,110,2,121.5c2,11.5,2.1,25.9,2.6,34.5\n                c0.5,8.6-1.8,14.4,4.4,18.2c6.3,3.8,5.2-9.6,4.7-15.9c-0.5-6.2-3-14.9-4-25.9c-1-11-1.7-41.7-3.2-56.1C0.1,185.6,4.4,76,4.3,61.6\n                c-0.1-14.4-2.1-23.5,7-28.4c9.1-4.8,18.3,9.5,19.3,22.4c1,13,1.7,46.1,0.9,67.7c-0.8,21.6-2.3,120.1-4.6,135\n                c-2.3,14.9,0.7,37.9,0.8,56.1c0.1,18.2,2.9,90.7,2.1,106.5c-0.9,15.8,1.3,64.7,1.3,72.9s-0.9,18.2,4,27.3c4.9,9.1,8.6-3.9,5.7-13.5\n                c-2.9-9.6,2.3-24.9,0.8-39.8c-1.5-14.9-1.7-49.9-3.2-62.4c-1.5-12.5,1.5-73-0.5-90.7c-2-17.8-2.1-37.9-0.8-50.9\n                c1.4-13,1.5-63.8,1-78.7c-0.4-11,2.1-76.8,3.4-113.6c2.8,8.3,5.8,15.8,7.2,22.1c3.1,13.6-2.3,89.4-0.8,102.4c1.6,13-0.8,47.1,0,56\n                c0.8,8.9,2.3,17.7,7,17.7c4.7,0,3.9-34.8,4.7-45c0.8-10.2,12.5-13.6,21.8-7.5c9.4,6.1,7.8,58,7.8,67.6c0,9.6,3.1,34.8,10.1,34.8\n                c7,0,5.5-25.9,7.8-34.1c2.3-8.2,7,1.4,7.8,3.4c0.8,2-1.6,22.5-2.3,27.3c-0.8,4.8,0.8,14.3,0,22.5c-0.1,0.8-0.1,1.5-0.2,2.2\n                c-0.4,6.1,0.4,11.2,3.7,12.9c0.6,0.3,1.2,0.5,1.9,0.6c5.5,0.7,2.3-15.7,5.5-17.7c3.1-2,3.1,13.6,7,13.6c3.9,0,2.3-18.4,2.3-18.4\n                s-3.9-68.9-3.1-105.1c0.7-32.6,5.2-82.8,7.8-104.5c0.6,0.5,1.1,1.3,1.5,2.3c1.1,2.7,1.6,10,2.2,13.3c0.6,3.3,1,7.1,1.7,10.8\n                c0.6,3.7-0.6,16.8-0.1,18.6c0.5,1.8-0.5,14.8-0.7,16.5c-0.2,1.7-0.6,22-0.5,23.4c0,1.4-0.3,17.7,4.2,16.7c2.8-0.6,2.6-11,2.2-12.5\n                c-0.4-1.5-0.4-21.6-0.6-23.8c-0.2-2.3,0.8-26.8,1.6-29.3c0.8-2.5-1-24.3-1-26.5c-0.1-2.2,1.1-5.5,2.1-6.3c1-0.8,1.5,5.4,1.5,7.7\n                s0.2,35.1,0.2,38.2c0,3.1,0.6,46.7,0.6,48.8c0,2.1-0.6,24.5-0.8,34.9c-0.1,10.4,0.8,59.8,0.6,67.1c-0.2,7.3,0.4,39.1,1.2,45.1\n                c0.8,6,3.9,57.5,4.2,67.9c0.1,5.2,0.2,9.9,0.2,13.8c0.8-0.3,1.7-0.6,2.5-0.9c0.9-0.3,1.7-0.6,2.6-0.9c-0.2-2.1-0.3-3.5-0.3-3.9\n                c-0.3-2.4-1-48.6-1.6-69.9c-0.1-4-0.2-7.2-0.4-8.9c-0.7-11.1-1.6-46.7-2-53.3c-0.4-6.6,1-45.1,1.5-49.4c0.5-4.3,1.8-24.6,2-29\n                c0.2-4.4-2.5-43.2-2.3-48c0.2-4.8-1.7-50.1-1.7-54.4c0-4.4,2.3-8.1,2.9-9.1c0.6-1,3.1-5,4.8-10.4c1.7-5.4,6.6-6.6,8.5-8.9\n                c1.9-2.3,5.6-7.7,6.4-9.6c0.8-1.9,3.5-4.8,4.6-6.4c1-1.7,2.3,3.1,2,8.3c-0.3,5.2,0.9,12,0.9,17.4c0,5.4,0.4,14.1,0,18.7\n                c-0.4,4.6-2.5,22-2.5,24.3c0,2.3,1.5,6.4,1.9,10.6c0.4,4.2,0.1,85.1,0.2,87.6c0.1,2.5-0.3,7.2,0.2,9.1c0.4,1.9,0.8,6,0.8,7.9\n                c0,1.9-1,13.7-1.1,16.3c0,2.6-0.2,8.2-0.4,10.2c-0.3,1.9-0.2,10.3-0.8,12c-0.6,1.7-0.2,6.9,0.2,8.1c0.4,1.3-1,9.2,2.1,10.2\n                c2.1,0.6,3.1-1.5,3.5-3.5c0.4-2.1,0.4-14.4,0.9-16.4c0.5-2,0.5-13.8,0.3-16.9c-0.2-3.1,0.2-21,0.4-23.1c0.2-2.1-0.3-96.1-0.3-99\n                c0-2.9-1-20.1-1.2-22.8c-0.2-2.7,1.2-22.4,1.7-25c0.4-2.6,0-18,0.4-20.5c0.4-2.5-0.2-6,0.6-8.7c0.8-2.7,1-5.8,1-8.3\n                c0-0.6,0-1.3,0-2.1c2-0.3,4.1-0.4,6.2-0.4c0.5,0,1.1,0,1.6,0c-0.1,1.2-0.2,2.2-0.3,2.9c-0.4,3.1,0.4,14.1,0.2,17.4\n                c-0.2,3.3,0,22.2-0.1,24.1c-0.1,1.9,0.1,18.9,0.9,23.7c0.8,4.8-0.5,97.3-0.7,100.2c-0.2,2.9-1,19.3-1.2,22c-0.2,2.7,0.6,9.3,0.8,12\n                c0.2,2.7,0.4,15,0.2,16.6s0.2,3.3,1.9,3.1c1.7-0.2,3.9-15.8,3-19.1c-1-3.3,0.5-18.3,0.7-21.6c0.1-3.3,0.8-94.6,0.8-98\n                c0-3.3-0.4-15.6-0.6-19.9c-0.2-4.4,0.4-20.1,1-23.6c0.5-3.4,0.1-17.1-0.3-18.4c-0.3-1-0.4-14-0.2-20.8c5,1,9.8,2.7,14.8,4\n                c0.7,4.2-1.3,9.1,0.8,15.6c1.3,4.1,0.4,23.7,0.4,29.7v34.5c0,5.2,1.5,60.1,1.9,68.4c0.4,8.3,0,54.8,0,58.3c0,3.4,1.5,33.9,0.4,40.6\n                c-1,6.6-2.7,23.7,2,24.8c6.8,1.6,4.5-10.1,4.5-17.6v-43.9c0-8.4-2.5-32.4-1.6-42.4c0.9-10-1.8-64.7-0.9-80.3\n                c0.9-15.6,1.2-34.6,0.9-40.8c-0.3-6.2-3.1-19.9-1.9-26.2c1.2-6.2,0.8-5.7,0.8-8.8c0-3.6-1.2-6.6-0.7-10.5c3.3,0.5,6.7,0.5,10-0.4\n                c2.1-0.5,3.9-1.5,5.9-2.3c2.8-1.2,2.6-2,3.3,0.7c0.7,2.8,1.7,5.5,3.2,7.8c0,1.6-0.1,2.8-0.1,3.3c0,2.5,0.8,23,0.7,34.7\n                c-0.1,11.7-1.7,28.8-1,34.7c0.6,5.9,0.5,56.8-0.5,62c-1.1,5.2,0.1,32.2-0.1,42.2c-0.3,10-1.9,35.9-2.2,44.6c0,0,0.2,7.5,0.2,9.1\n                c0,1.6,0.6,8.5,1.2,9.4c0.6,0.9,2.9,1.9,3.1-0.1c0.3-2,0.1-4.1,0.1-5.6c0.1-4.2,1.4-36,2.3-46.3c0.9-10.3,0.9-52.8,0.5-63.6\n                c-0.5-10.7,0.5-53.2,1.9-63.4c1.4-10.3,0-26.2-0.5-36.5c-0.2-3.8,0.2-10.7,0.7-17.9c1,0.7,2.1,1.3,3.2,1.9c1.7,0.8,3.9,1.5,6.2,2\n                c0.1,7.2,0.3,13.2,0.9,15.8c1.7,7.7,0.8,26.8,1.2,30.8c0.5,4,3.2,24.7,4,27.7c0.9,2.9-0.8,2.9,2.9,6.2c3.7,3.3,6.9-1.1,4-7.7\n                c-2.9-6.6-1.8-11.2-1.9-17.6c-0.1-6.4-0.4-29.5-2.2-41c-0.5-3-0.6-8-0.6-13.9c2.3-0.4,4.4-1.3,6-2.9c2.3-2.3,2-6.3,3.3-9.1\n                c1-2.1,1.8-3.7,3.1-1.3c1.7,3,0.2,7.6-0.3,10.7c-0.6,4.3-0.9,8.6,0.8,12.8c3.3,8.2,12.8,9,17.9,2c6.2-8.3,1.5-18.7,3.5-27.9\n                c0.8-3.5,3-5.8,5.7-6.9c-0.3,6.8-0.6,13-0.7,15.6c-0.3,6.6-0.3,10.8-0.2,16.9c0.1,6,1.4,16.1,2.3,21.6c0.9,5.5,0.5,8.8,1.4,12.8\n                c0.9,4-2.8,5.1,0.9,6.2c3.7,1.1,5.6-4,6-8.1c0.4-4-1.4-13-0.7-19.1c0.7-6-2-25.8-1.6-28.9c0.1-1.3,1.2-7.6,2.3-15.1\n                c1.1,1.1,1.9,2.4,2.4,4.2c1.2,3.8,5.3,5.4,8.8,3.6c4.6-2.4,6.9-7.2,6.8-12.1c0.4,0.3,0.8,0.5,1.2,0.7c-1.2,9.9-3,23.9-2.7,26.7\n                c0.5,4.2,1.4,15.8,1.4,15.8c0.7,19.4,1.3,38.8,2,58.3c0,0-0.7,5.7,4.6,5.7c5.3,0,4-6.2,4-6.2c-0.6-15.7-1.2-31.4-1.8-47.1\n                c0,0,2-3.1,3.6-5.1c1.6-2,1.5-11.2,1.8-16.7c0.2-3.7,0.7-19.7,1.4-30.5c2.4-0.8,4.8-1.8,7.3-2.6c0.4-0.1,0.7-0.2,1.1-0.3\n                c-0.5,8.6-2.2,24-2.2,24.9c0,1.3-2,4.6,2.5,5.1c4.5,0.5,5.2-4.4,5.2-4.4s1.3-13.2,2.2-23.6c1.4,1,2.8,2.2,4.5,3.2\n                c1.7,1,3.3,1.7,5,2.1c-0.7,10.9-1.9,24.7-1.4,28.6c0.9,6.4-0.9,22.9-1.3,27.5c-0.3,4.6-0.3,7.7,3.8,7.9c4.1,0.2,2.7-10.1,2.7-13.6\n                c0-3.5-1-14.5-1.5-18.5c-0.5-4,1.4-14.7,3.4-18c0.3-0.5,0.8-1.4,1.3-2.7c1.2,1.3,2.6,2.3,4.5,2.9c4,1.1,8-0.4,10.7-3.4\n                c1.2-1.3,2-2.8,2.8-4.4c2.3-0.5,4.5-1.5,6.5-3.1c-0.7,2.7-1.1,4.6-1,5c0.4,1.3,0.1,5.9,0.1,7.9c0,2-3.1,11.4-1.4,13.4\n                c1.7,2-0.4,2.6,4.9,3.1c5.3,0.5,2.8-7.2,3.1-10.8c0.2-1.7,1.6-8.1,3.2-14.8c4.8,1.5,10,0.2,13.6-3.8c0.4-0.5,0.8-0.9,1.1-1.5\n                c0.1,12.8,1,30.5,2.2,33.4c1.7,4.4,1.8,9.9,2.2,13.2c0.5,3.3-1.6,5.5,3.8,7c5.3,1.5,4.4-3.7,4-6.1c-0.4-2.4-2.5-5.7-3.4-9.9\n                c-0.9-4.2-1.4-15.9-2.7-21.4c-0.4-1.9-0.3-8,0.1-15.5c0.7,1.5,1.1,3.5,2,4.7c1.1,1.6,2.6,3,4.2,4c3.4,2.1,7.5,2.9,11.3,2.3\n                c0.3,6.1,0.5,11.6,0.3,16c-0.6,17.2-5,14.9-1.6,30.3c3.5,15.4,1.5,53.5,2.4,61.6c0.9,8.1,6.4,49.5,8.1,55.3\n                c1.7,5.9-1.6,5.9,5.9,12.4c7.4,6.6,13.8-2.2,7.9-15.4c-5.9-13.2-3.6-22.3-3.7-35.2c-0.2-12.8-0.8-59-4.3-82.1\n                c-3.6-23.1,3.9-42.5,6.3-48.4c1.3-3.2,4.7-5.2,8.3-6.8c0.3,0.4,0.7,0.8,1.1,1.2c3.2,3.2,7.5,5.1,11.9,5.8c3.6,0.5,6.6-0.4,9.7-1.2\n                c0.2,0.6,0.5,1.2,0.5,1.6c0.3,2.3,0.1,4.6-0.5,6.8c-1.1,4.1-3.4,7.5-3,11.9c0.2,2.2,1.1,4.2,2.3,6.1c0.7,1.1,2.3,2.3,2.6,3.6\n                c0.6,2.7-2.2,7.1-2.9,9.7c-1.1,4.1-1,8.2,0.4,12.2c1.7,4.5,2.6,8.1,2.5,13c-0.2,10.8-0.4,21.6-0.6,32.4c-0.2,9.6,14.8,9.6,15,0\n                l0.5-23.8c0.1-7,1.1-14.7-1.2-21.4c-0.9-2.6-2.5-5-2.3-7.8c0.2-2.7,1.9-5.4,2.6-7.9c1.1-3.9,1.1-7.6,0-11c0.9-0.1,1.9-0.4,2.7-0.9\n                c3.2-1.7,5.3-4.7,6.1-8.2c0.4-1.8,0.4-3.5,0.5-5.3c0.1-0.5,0.1-1,0-1.5c0.1-0.2,0.1-0.4,0.2-0.5c1.8-0.8,3.6-1.1,5.4-1.6\n                c5,3.3,11.3,6.2,16.4,9.2c7.4,4.4,6.6,0,6,13.2c-0.6,13.2-0.5,21.6-0.4,33.7c0.2,12.1,2.9,32.2,4.6,43.2c1.8,11,1.1,17.6,2.8,25.6\n                c1.7,8.1-5.6,10.3,1.8,12.5c7.4,2.2,11.3-8.1,12-16.2c0.7-8.1-2.8-26-1.3-38.1c1.5-12.1-3.9-51.7-3.2-57.9c0.2-1.5,0.3-3.3,0.5-5.3\n                c0.6,0.3,1.1,0.6,1.7,0.9c8.6,3.9,24.9,5.5,27.7-6.7c0-0.1,0-0.2,0-0.2c2.1,4.6,4,8.9,4.1,12.4c0.1,7-8.3,64.6-7.4,73\n                c0.9,8.4,2.9,31.5,2.9,31.5c0.6,18.6,1.3,37.1,1.9,55.7c1.8,1,3.8,1.7,6.1,2c5,0.6,8.5-1.1,10.7-4c-0.4-10.8-0.8-21.6-1.3-32.4\n                c0,0,4-6.2,7.2-10.3c3.2-4,3-22.4,3.6-33.4c0.7-11,2.5-74.8,4.8-81.5c2.4-6.6-7.5-13.9,3-15.8c10.6-1.9,10,14.6,11.7,19.4\n                c1.7,4.8-4.3,58.4-4.3,60.9c0,2.6-3.9,9.2,5,10.2c9,1.1,10.5-8.8,10.5-8.8s6.7-66.1,5.8-71.6c-0.9-5.5,8.6-15,14.5-14.7\n                c5.8,0.3,1,14.3,3.5,21.6c2.5,7.3-5,72.3-3.2,85.1c1.8,12.8-1.8,45.8-2.5,55c-0.7,9.2-0.6,15.4,7.5,15.7c8.1,0.3,5.4-20.2,5.3-27.1\n                c-0.1-7-2-28.9-2.9-37c-0.9-8.1,2.9-29.3,6.8-35.9c4-6.6,22.3-54,28.7-59.2c6.4-5.1,20.8-24.6,27.3-25.4c6.5-0.8,6,19,6,22\n                c0,2.9-13.4,48.5-12.6,51.1c0.8,2.6,0.2,11.7,0.2,15.8c0.1,4-6.2,22.7-2.9,26.8c3.3,4-0.7,5.1,9.8,6.2s5.5-14.3,6.2-21.6\n                c0.7-7.3,13.3-58,14.8-64.3c1.5-6.2,0.4-30.4,1.9-38.1c0.6-15.4,7.4-16.7,13-16.4c5.6,0.3,6.2,4.4,6.9,10.8\n                c1.5,13.3,1.7,34.9,0.1,41.8c-2.3,10.3,0.1,84,3.4,92.8c3.4,8.8,3.5,19.8,4.4,26.4c0.9,6.6-3.1,11,7.5,13.9c10.6,2.9,8.9-7.4,8-12.1\n                c-0.9-4.8-5-11.3-6.8-19.8c-1.7-8.4-2.9-31.9-5.5-42.9c-2.6-11,4.7-94.6,4.5-105.6c-0.1-11-3.5-17.9,11.9-21.7\n                c15.4-3.7,31,7.2,32.8,17.1c1.8,9.9,2.9,35.2,1.5,51.7c-1.4,16.5,1.1,51.7-2.8,63c-3.9,11.4,1.2,28.9,1.4,42.9\n                c0.1,5,0.7,15.4,1.5,27.3c3.6,3,7.8,4.4,11.8,2.5c2.6-1.2,4.1-3.7,5-6.8c0.2-9.6,0-18.1-1.2-22.7c-3.4-13.6-3.6-28.9-1.3-38.8\n                c2.3-9.9-2.4-8.7-3.4-20.1c-1-11.4,7.1-98.7,7-105.3c-0.1-6.6,6.9-32,6.8-38.6c0-1.9,0.6-4.1,1.7-6.4c1.3,0.2,2.7,0,3.8-0.7\n                c1-0.6,1.8-1.3,2.5-2.1c0.1,9.2-0.1,16.9-0.1,20c0,9.6,2.7,34.8,8.9,34.8c6.1,0,4.8-25.9,6.8-34.1c2-8.2,6.1,1.4,6.8,3.4\n                c0.7,2-1.4,22.5-2,27.3c-0.7,4.8,0.7,14.3,0,22.5c-0.7,8.2,0,15,4.8,15.7c4.8,0.7,2-15.7,4.8-17.7c2.7-2,2.7,13.6,6.1,13.6\n                c3.4,0,2-18.4,2-18.4s-1.2-23.3-2-49.9c1.6,0.1,3.2-0.5,4.7-1.6c4.6-3.6,6.2-9.1,7-14.7c0.4-3,0.6-12.1,5-12.1\n                c0.3,1.6,0.5,3.3,0.9,4.8c0.6,2.8,1.7,5.5,3.2,7.9c0.5,7.4,0.9,14.3,0.7,18.2c-0.5,10.3-1.9,26.2-0.5,36.5\n                c1.4,10.3,2.4,52.7,1.9,63.4c-0.5,10.7-0.5,53.3,0.5,63.6c0.9,10.3,2.3,42.1,2.3,46.3c0,1.5-0.1,3.7,0.1,5.6c0.3,2,2.6,1,3.1,0.1\n                c0.6-0.9,1.2-7.8,1.2-9.4c0-1.6,0.2-9.1,0.2-9.1c-0.3-8.7-1.9-34.6-2.2-44.6c-0.3-10,0.9-37-0.1-42.2c-1.1-5.2-1.2-56-0.5-62\n                c0.6-5.9-0.9-23.1-1-34.7c-0.1-7.2,0.2-17.7,0.5-25.3c6,3.5,13.9,2.6,17.6-4.3c2-3.8,2-8.3,1.5-12.4c-0.1-1-0.6-3.4-0.5-5.4\n                c0,0,0,0,0.1-0.1c0.9-0.1,1.8-0.3,2.7-0.5c0.2,0.7,0.4,1.4,0.7,2.2c1.6,5-0.2,8.4-0.2,12.7c0,3.2-0.5,2.6,0.8,8.8\n                c1.2,6.2-1.6,19.9-1.9,26.2c-0.3,6.2,0,25.2,0.9,40.8c0.9,15.6-1.8,70.3-0.9,80.3c0.9,10-1.6,34-1.6,42.4v43.9\n                c0,7.5-2.2,19.2,4.5,17.6c4.7-1.1,3-18.2,2-24.8c-1-6.6,0.5-37.1,0.4-40.6c0-3.4-0.4-50,0-58.3c0.4-8.3,1.9-63.2,1.9-68.4V58.9\n                c0-6-0.9-25.6,0.4-29.7c1.9-5.8,0.5-10.2,0.7-14.1c0.8,1.2,2.1,2.2,3.4,2.6c3,0.8,6.1,0.2,8.3-2.1c0.5-0.6,1.7-2.1,2.6-3.7\n                c0.3,0.9,0.5,1.9,0.8,2.9c0.1,6.8,0,14.9-0.3,15.7c-0.4,1.2-0.9,14.9-0.3,18.4c0.5,3.4,1.2,19.2,1,23.6c-0.2,4.4-0.6,16.6-0.6,19.9\n                c0,3.3,0.7,94.7,0.8,98c0.1,3.3,1.6,18.3,0.7,21.6c-1,3.3,1.3,18.9,3,19.1c1.7,0.2,2.1-1.5,1.9-3.1c-0.2-1.7,0-13.9,0.2-16.6\n                c0.2-2.7,1-9.3,0.8-12c-0.2-2.7-1-19.1-1.2-22c-0.2-2.9-1.5-95.4-0.7-100.2c0.8-4.8,1-21.8,0.9-23.7c-0.1-1.3,0-10.9,0-17.7\n                c2.6,2.8,7.4,1.6,9.4-1.8c0,5.5-0.1,13.2,0.2,15c0.4,2.6,1.9,22.3,1.7,25c-0.2,2.7-1.2,19.9-1.2,22.8c0,2.9-0.5,96.9-0.3,99\n                c0.2,2.1,0.6,19.9,0.4,23.1c-0.2,3.1-0.2,14.9,0.3,16.9c0.5,2,0.5,14.3,0.9,16.4c0.4,2.1,1.4,4.2,3.5,3.5c3.1-1,1.7-8.9,2.1-10.2\n                c0.4-1.3,0.8-6.5,0.2-8.1c-0.6-1.7-0.5-10.1-0.8-12c-0.3-1.9-0.4-7.6-0.4-10.2c0-2.6-1.1-14.4-1.1-16.3c0-1.9,0.4-6,0.8-7.9\n                c0.4-1.9,0.1-6.6,0.2-9.1c0.1-2.5-0.2-83.4,0.2-87.6c0.4-4.2,1.9-8.3,1.9-10.6c0-2.3-2.1-19.7-2.5-24.3c-0.4-4.6,0-13.3,0-18.7\n                c0-5.4,1.1-12.3,0.9-17.4c-0.3-5.2,1-10,2-8.3c1,1.7,3.7,4.6,4.6,6.4c0.8,1.9,4.6,7.3,6.4,9.6c1.9,2.3,6.9,3.5,8.5,8.9\n                c1.7,5.4,4.2,9.3,4.8,10.4c0.6,1,2.9,4.8,2.9,9.1c0,4.4-1.9,49.6-1.7,54.4c0.2,4.8-2.5,43.6-2.3,48c0.2,4.4,1.5,24.7,2,29\n                c0.5,4.3,1.9,42.7,1.5,49.4c-0.4,6.6-1.3,42.2-2,53.3c-0.7,11.1-1.6,75.9-2,78.8c-0.1,0.4-0.2,1.8-0.3,3.9c1.7,0.6,3.4,1.2,5.1,1.8\n                c0-4,0.1-8.6,0.2-13.8c0.2-10.4,3.3-61.9,4.2-67.9c0.8-6,1.5-37.8,1.2-45.1c-0.2-7.3,0.7-56.7,0.6-67.1c-0.1-10.4-0.8-32.8-0.8-34.9\n                c0-2.1,0.6-45.7,0.6-48.8c0-3.1,0.2-35.9,0.2-38.2s0.4-8.5,1.5-7.7c1,0.8,2.2,4.1,2.1,6.3c-0.1,2.2-1.8,23.9-1,26.5\n                c0.8,2.5,1.8,27,1.6,29.3c-0.2,2.3-0.2,22.3-0.6,23.8c-0.4,1.5-0.6,11.9,2.2,12.5c4.5,1,4.1-15.3,4.2-16.7c0-1.4-0.3-21.7-0.5-23.4\n                c-0.2-1.7-1.3-14.7-0.7-16.5c0.5-1.8-0.7-14.9-0.1-18.6c0.6-3.7,1-7.5,1.7-10.8c0.6-3.3,1.2-10.7,2.2-13.3c1.1-2.7,2.5-3.3,5-3.7\n                c1.2-0.2,3.4-0.7,5.5-0.4c-0.3,1-0.7,2.1-1.1,3.4c-3.9,12.5,0.6,48,0.1,65.2c-0.6,17.2-3,95,0.4,110.4c3.5,15.4,1.5,53.5,2.4,61.6\n                c0.9,8.1,6.4,49.5,8.1,55.3c1.7,5.9-1.6,5.9,5.9,12.4c7.4,6.6,13.8-2.2,7.9-15.4c-5.9-13.2-3.6-22.3-3.7-35.2\n                c-0.2-12.8-0.8-59-4.3-82.1c-3.6-23.1,2.1-104.2,2.7-117.7c0.6-13.6-0.8-60.5,1.6-66.3c2.4-5.9,12.1-7.7,16.9-10.7\n                c4.8-2.9,2.4-6.2,10.5-4.4c8.2,1.8,9,6.9,14.8,8.8c5.7,1.8,9,2.5,13.9,8c5,5.5,14.8,9.5,22.2,13.9c7.4,4.4,5,7.3,5,12.4\n                c0.1,5.1-1.3,23.8-4.4,34.5c-3.1,10.6-5,66.8-5.7,80c-0.6,13.2-0.5,21.6-0.4,33.7c0.2,12.1,2.9,32.2,4.6,43.2\n                c1.8,11,1.1,17.6,2.8,25.6c1.7,8.1-5.6,10.3,1.8,12.5c7.4,2.2,11.3-8.1,12-16.2c0.7-8.1-2.8-26-1.3-38.1c1.5-12.1-3.9-51.7-3.2-57.9\n                c0.7-6.2,12.2-76,10.5-84c-1.7-8.1,5.2-34.8,5.2-40.3c-0.1-5.5,3.9-14.7,4.6-20.9c0.7-6.2,6.4-7.7,12.9-8.5\n                c6.5-0.8,2.6,11.7,1.1,24.9c-1.5,13.2,5.9,15,6.8,20.9c0.9,5.9-7.1,16.1-5.4,24.9c1.7,8.8,9.2,19,9.3,26c0.1,7-8.3,64.6-7.4,73\n                c0.9,8.4,2.9,31.5,2.9,31.5c1.3,38.8,2.7,77.7,4,116.5c0,0-1.5,11.4,9.1,11.3c10.6,0,8-12.5,8-12.5c-1.2-31.4-2.5-62.8-3.7-94.2\n                c0,0,4-6.2,7.2-10.3c3.2-4,3-22.4,3.6-33.4c0.7-11,2.5-74.8,4.8-81.5c2.4-6.6-7.5-13.9,3-15.8c10.6-1.9,10,14.6,11.7,19.4\n                c1.7,4.8-4.3,58.4-4.3,60.9c0,2.6-3.9,9.2,5,10.2c9,1.1,10.5-8.8,10.5-8.8s6.7-66.1,5.8-71.6c-0.9-5.5,8.6-15,14.5-14.7\n                c5.8,0.3,1,14.3,3.5,21.6c2.5,7.3-5,72.3-3.2,85.1c1.8,12.8-1.8,45.8-2.5,55c-0.7,9.2-0.6,15.4,7.5,15.7c8.1,0.3,5.4-20.2,5.3-27.1\n                c-0.1-7-2-28.9-2.9-37c-0.9-8.1,2.9-29.3,6.8-35.9c4-6.6,22.3-54,28.7-59.2c1.9-1.5,4.6-4.3,7.5-7.6c1.6,12.6,4.3,21.9,8.1,21.9\n                c4.9,0,7-16.3,7.8-37.8c1.5-1.1,2.9-1.8,4-1.9c6.5-0.8,6,19,6,22c0,2.9-13.4,48.5-12.6,51.1c0.8,2.6,0.2,11.7,0.2,15.8\n                c0.1,4-6.2,22.7-2.9,26.8c3.3,4-0.7,5.1,9.8,6.2c10.6,1.1,5.5-14.3,6.2-21.6c0.7-7.3,13.3-58,14.8-64.3c1.5-6.2,0.4-30.4,1.9-38.1\n                c0.6-15.4,7.4-16.7,13-16.4c0.5,0,1,0.1,1.4,0.2c-0.6,44-0.8,93.2,1.4,111.1c4.1,32.9,13.7,149.6,15.1,222.4\n                c1.1,57.2-2.9,155-4.7,194.3c-0.5,10.7-0.8,17.1-0.8,17.1s-2,26.5,1.6,34.7c0.6,1.5,1.5,2.4,2.5,2.4c6.2,0,6.8-25.9,10.9-27.7\n                c0.4-0.2,0.9-0.1,1.4,0.3c5.5,4.1,0,37.1,9.6,35.7c9.6-1.4,11-15.1,9.6-31.6c-1.4-16.5,1.4-35.7,0-45.3c-1.4-9.6-5.5-50.8-4.1-54.9\n                c1-3,5.6-13.9,9.6-13.4c1.5,0.2,3,2,4.1,6.5c3.1,12.5,2.3,45.4,7.1,60.7c1.5,4.9,3.6,8,6.6,8c12.4,0,17.8-50.8,17.8-70\n                c0-16.5-2-95.7,7.8-125.6c1.5-4.6,3.3-8,5.5-9.9c0.1-0.1,0.3-0.3,0.4-0.4c5.5-4.2,11.6-6.1,17.2-6.1c11,0,20.4,7.6,21.3,21.2\n                c1.4,20.6,0,90.6,8.2,90.6c4.8,0,7.8-6.2,9.7-14.9c0.5-2.2,0.9-4.5,1.2-6.9c0.6-4.4,1.1-9.2,1.5-13.9c1.4-17.8-2.7-86.5,0-112.6\n                c2.7-26.1-6.9-178.5-1.4-205.9c2-9.9,5.6-21.2,9.4-33.5c1.7,21.7,5.9,57.8,5.8,69c0,5.9,2.6,129.1,5.5,271.4\n                c3.2,153.4,6.8,329,7.9,404.3h13.9c-0.7-32-1.3-67.2-2-103.9c-3.6-193.4-7.2-427.3-8-448.1c-1.4-35.2-0.2-89.3,1.4-110.4\n                c1.7-21.1,16.7-44.5,31.5-36.6c14.8,7.9,11.6,22.8,11.5,46.3c-0.1,9.4,2.2,122.4,4.7,255.8c2.7,142.9,5.7,309.2,6.7,396.8h5.3h3.2\n                c-0.3-195.3-3.2-535.7-4.8-551.6c-1.5-14.8-1.3-60.8,0.1-89.3c0.7-13.8,1.3-22.5,6.6-23.1c5.3-0.6,11.9,2.1,12.5,35\n                c1.5,16.5,0.4,68.1,1.9,81.4c0.5,4.5,3,74.6,6.1,166.4c4.2,123.6,9.5,286.4,12.6,381.2h15.1c-1.5-56.2-7.1-223.7-11.7-363.9\n                c-3.8-114.5-7-210.8-7-213.3c0-6.3-0.5-48.5,5.8-46.9c6.3,1.6,20.1,43.2,26.3,54.2c5.2,9.3,23.6,430.6,31.5,570h15.8\n                c-3.1-186.4-10.9-550.8-9-562.7c2.4-15.6-2.2-45.5,3.4-46.2c5.6-0.7,14.8,19.7,13.9,31.4c-0.7,9.4,7.9,417.8,11.3,577.5h15\n                c-3.1-153.6-11.3-549.6-10-557.8c1.6-10.2,1.1-45.4,11.2-41.4c10.2,4,0.7,19.6,2.9,33.7c1.7,10.9,7.4,384.3,10.2,565.5h30.2\n                c-3.5-168.4-13-555.1-12.9-566.9c0.1-14.9,7.3-36.8,8.9-55.5c1.7-18.8-6-40.8-5.2-53.3c0.9-12.5,7.9-16.4,6.5-44.6\n                c-1.4-28.2-5.2-54.8,1.1-53.2c6.3,1.6,11.7,4.8,12.4,18.1c0.7,13.3,4.5,32.9,4.4,44.7c-0.1,11.7,6.6,68.9,5,86.2\n                c-0.7,7.6,2.4,135,6.1,276.5c2.2,81.9,4.6,168.5,6.6,239.3c1,35.9,1.9,67.7,2.7,92.8c0.2,5.7,0.3,11.1,0.5,16.1h15.6v-53.2\n                c-0.8-53-2-123.9-3.2-197.7c-2.8-171.7-6.2-358.8-7.9-371.3c-3-22.7-4.3-62.7-4.3-73.6c0.1-11-2.2-17.2,4.9-26.6\n                c3.2-4.2,6.9-8.3,10.5-12.6V-3H-662.7z M941.9,21.7c-0.1-0.5-0.2-0.9-0.4-1.4c0.2-0.5,0.5-1,0.7-1.6C942.1,19.7,942,20.7,941.9,21.7\n                z"/></svg></div><img src="{{ slideshowImages[5].url }}" class="slimeshow-image"></div></div><div class="slimeshow-square" style="clear: right"><div class="slimeshow-content"><img src="{{ slideshowImages[6].url }}" class="slimeshow-image"></div></div><!-- maximum row 2 --><div class="slimeshow-square"><div class="slimeshow-content"><img src="{{ slideshowImages[7].url }}" class="slimeshow-image"></div></div><div class="slimeshow-square"><div class="slimeshow-content"><img src="{{ slideshowImages[8].url }}" class="slimeshow-image"></div></div><div class="slimeshow-square"><div class="slimeshow-content"><img src="{{ slideshowImages[9].url }}" class="slimeshow-image"></div></div><div class="slimeshow-square"><div class="slimeshow-content"><div style="position: absolute; z-index: 3; top: 0; left: 0; width: 100%"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1347.1 542.8" enable-background="new 0 0 1347.1 542.8" xml:space="preserve"><path style="fill: {{ slimeColorC }}; transition: all 3s; -webkit-transition: all 3s" fill="#FFCC00" d="M-662.7-3L-662.7-3l-0.1,269.6v262.8v59.4c1.4,2,3.1,3,4.8,3.2c4.2,0.5,8.3-4,8.5-11.8\n                    c0.6-20.5-0.6-83.1-0.6-92.9c0-9.8-4.6-147.1-5.4-152.5c-0.8-5.3-6-88.3-4.4-97.4c3-17,21.3-12.7,28.3-11.5c6.9,1.2,11,2.9,14,10.3\n                    c3,7.4,4.5,27.8,6.2,37.1c1.7,9.2,2.9,19.6,4.6,30c1.7,10.4-1.7,46.7-0.2,51.8c1.5,5-1.5,41.1-2.1,45.8c-0.6,4.6-1.5,61.1-1.5,65\n                    c0,2.5-0.3,21.8,2.7,34.7c1.7,7.3,4.4,12.5,8.9,11.5c2.5-0.6,4.1-4,5.2-8.6c2.1-9.4,1.7-23.3,0.9-26.1c-1.1-4.2-1.2-59.9-1.8-66.2\n                    c-0.6-6.3,2.3-74.4,4.4-81.5c2.2-7-2.7-67.4-2.9-73.5c-0.2-6.1,3.1-15.2,6-17.5c2.9-2.3,4,15,4,21.3c0,6.3,0.6,97.5,0.6,106.2\n                    c0,8.7,1.7,129.8,1.7,135.6s-1.7,68.1-2.1,96.9c-0.2,15.4,0.4,61.9,1,104.9c0.5,37.3,0.9,72,0.6,81.4c-0.3,11.6,0.1,45.8,1,75.9\n                    h20.6c-1.5-40.8-2.8-93.5-3.7-106.5c-0.6-9.5,0.2-42,1.2-73.2c1-29.7,2.3-58.1,3-63.9c1.4-11.9,5-68.3,5.6-80.4\n                    c0.6-12.1-6.9-120-6.3-133.3c0.6-13.3-4.6-139.1-4.6-151.2c0-12.1,6.3-22.5,8.1-25.4c1.7-2.9,8.7-13.8,13.3-28.8\n                    c4.6-15,18.5-18.5,23.7-24.8c5.2-6.3,15.6-21.3,17.9-26.5c2.3-5.2,9.8-13.3,12.7-17.9c2.9-4.6,6.3,8.6,5.6,23.1\n                    c-0.7,14.4,2.5,33.5,2.5,48.5c0,15,1.1,39.2,0,51.9c-1.2,12.7-6.9,61.2-6.9,67.5c0,6.3,4,17.9,5.2,29.4c0.4,3.8,0.5,31.1,0.6,66.1\n                    c0.1,70.5-0.2,172.5-0.1,177.2c0.2,7-0.7,20.1,0.4,25.3c1.2,5.2,2.3,16.7,2.3,21.9c0,5.2-2.9,38.1-2.9,45.2c0,7.1-0.5,22.9-1.2,28.2\n                    c-0.7,5.4-0.4,28.7-2.2,33.3c-1.7,4.6-0.6,19.1,0.5,22.6c1.1,3.5-2.7,25.6,5.9,28.3c5.9,1.8,8.6-4,9.8-9.8\n                    c1.1-5.8,1.1-39.9,2.5-45.4c1.5-5.6,1.4-38.3,0.8-46.9c-0.6-8.7,0.6-58.3,1.1-64c0.3-2.9,0.1-70.6-0.2-138.2\n                    c-0.3-66.5-0.7-132.8-0.7-136.8c0-8.2-2.9-55.9-3.5-63.4c-0.6-7.5,3.5-62.3,4.7-69.6c1.2-7.2-0.1-49.9,1.1-56.8\n                    c1.1-6.9-0.6-16.7,1.7-24.2s2.9-16.2,2.9-23.1c0-6.9-0.6-23.1,2.9-27.1c3.5-4,11-10.4,15.7-8.1c4.8,2.3,3.3,27.8,2.2,36.4\n                    c-1.2,8.7,1.1,39.2,0.6,48.5c-0.6,9.2,0,61.7-0.2,67c-0.2,5.2,0.2,52.5,2.5,65.7c0.5,2.9,0.7,17.7,0.7,39.1c0,37-0.5,93.6-1.1,142.5\n                    c-0.6,51-1.4,93.6-1.6,96.8c-0.3,3.8-0.9,15.7-1.6,28.1c-0.8,14.2-1.6,29.1-1.9,33.1c-0.6,7.5,1.7,25.9,2.3,33.5\n                    c0.6,7.5,1.2,41.5,0.6,46.2c-0.4,2.9,0,5.8,1.4,7.4c0.8,0.9,2.1,1.5,3.8,1.2c1.5-0.2,3.3-5.1,4.8-11.9c3.1-13.7,5.3-35,3.5-41.1\n                    c-2.7-9.1,1.5-50.9,1.9-60c0.2-6,1.1-116.2,1.7-194.5c0.3-41.7,0.5-74.4,0.5-77.6c0-9.2-1.2-43.3-1.7-55.4s1.2-56,2.7-65.5\n                    c1.5-9.5,0.2-47.6-0.9-51c-1.2-3.5-1.2-60.6,0-68.7c1.2-8.1,4-16.7,8.1-21.3c4-4.6,11.5,6.3,15.5,13.1c4,6.8,9.5,10.6,15.4,24.8\n                    c5.4,13.1-3.1,27.8,3.7,48.7c3.7,11.3,1.2,65.8,1.2,82.5v95.8c0,14.4,4.2,167,5.4,190.1c1.2,23.1,0,152.3-0.1,161.9\n                    c-0.1,9.6,4.1,94.3,1.2,112.8c-1.7,11.2-4.1,33-2.8,49.1h3.2h18.8c0.1-9.3-1-20.2-1-28.9V710c0-23.4-6.9-90-4.3-117.7\n                    c0.8-9,0.6-31.2,0-58.6c-1.3-56.6-4.2-135.2-2.5-164.4c2.6-43.3,3.5-96.1,2.6-113.4c-0.9-17.3-8.7-55.4-5.2-72.7\n                    c3.5-17.3,2.1-15.7,2.2-24.5c0.1-11.8-4.8-21.3-0.5-35.2c0.7-2.2,1.3-4.2,1.9-6.1c-0.1,6.7-0.6,12.7,0.3,17.4\n                    c0.9,4.9-0.9,8.8,2.3,10.1c3.3,1.3,3.9-6.6,3.3-11.8c-0.7-5.2,1.3-7.9,5.2-9.8c3.9-2,7.8,13.1,9.8,19c2,5.9,9.2,25.5,15.9,43.2\n                    c6.7,17.6,13,57,16.9,78.6c3.9,21.6,0.7,60.3,0,74c-0.7,13.8,1.3,78,0.3,89.6c-0.6,7.6,0.3,23.7,0,37.2c-0.1,4.3-0.3,8.2-0.7,11.6\n                    c-0.3,2.2-0.6,4.1-1,5.7c-1.5,5.4-1.6,11.3-0.2,16.5c1,3.6,2.7,6.8,5.2,9.4c-0.3,5.6-0.6,9.6-1,11.5c-3,14.5,0.4,89.6-0.4,117.4\n                    c-0.8,27.8-5.1,99.7-6,123.9c0,0,0.6,20.8,0.6,25.3c0,4.5,1.7,23.6,3.3,26.2c1.7,2.6,8,5.2,8.7-0.2c0.7-5.4,0.2-11.4,0.3-15.6\n                    c0.2-11.7,3.9-100,6.5-128.5c1.1-12.4,1.8-41.6,2-73.2c0.1-13.5,0.1-27.5,0.1-40.7c0-16-0.1-30.9-0.3-42.8\n                    c5.5-4.6,6.3-18.1,6.8-24.5c0.6-8.5,0.6-91.7,1.3-101.6c0.1-1.6,0.1-5.4,0.1-10.5c-0.1-26.4-1.4-90.3-1.4-96.3\n                    c0-7.2,1.3-33.4,3.9-40c2.6-6.6,5.9-3.2,7.9-9.8c2-6.6-3.3-9.8,2-14.4c0.8-0.7,1.6-1.1,2.5-1.3c0.7,8.9,1.7,24.1,0.8,28.8\n                    c-1.3,6.8-3.1,11.7-3.1,21.6s1.8,23.8,1.4,33.7c-0.5,9.9-1.4,19.3-1.8,27c-0.4,7.6,0.5,13,0.5,22s-2.2,26.1-2.7,31\n                    c-0.4,4.9,2.2,18,2.2,23.8c0,5.8,2.6,16.6,1.7,27.8c-0.9,11.2,3.4,8.8,4,3.1c0.7-5.6,0.6-38.6,0.1-44.9c-0.5-6.3-1.4-19.3-1.4-19.3\n                    s1.4-27.4,1.8-33.7c0.4-6.3,4-9,4-15.7s-1.4-13.5-1.4-17.5c0-4-0.4-5.8-0.4-12.6s-0.5-9.9-0.5-16.2s1.8-6.7,1.3-13.5\n                    c-0.5-6.7,1.3-35.1,1.3-35.1c0.2-2.5,0.5-5,0.8-7.4c1.3,1,2.6,2.4,3.8,3.9c0.6,3.4,1.2,6,1.2,9.4c0,4.9-0.9,18.9-1.8,24.3\n                    s3.2,12.6,1.8,18c-1.3,5.4-0.5,13.9,1.8,13.9c2.2,0,1.8-6.7,2.7-9.9c0.9-3.1,1.4-8.1,0-14.4c-1.3-6.3-1.8-18.4-1.3-21.6\n                    c0.2-1.7,1-5.4,1.5-9.1c5,12.5,9.1,30.8,7.8,38.9c-1.3,8.5,2,62.9,2.1,77.4c0.2,14.5,3.8,43.1,4.4,65.4c0.7,22.3-3.9,56.4-3.3,77.3\n                    c0.7,21-2,146.8-2.6,162.5c-0.7,15.7-6.6,75.3,13.5,74.8c20.1-0.6,13.3-52.5,13.3-57.1c0-4.6-3.9-61.6-3.9-79.9\n                    c0-18.3,3.3-61.6,4.6-82.6c1.3-21,3.9-32.1,7.2-50.5c3.3-18.3-6.5-49.2-7.2-59c-0.7-9.8-2.6-119.3-2.6-129.1c0-9.7,0-24.5,3.2-33.7\n                    c0.1,3.7,0.3,6.7,0.5,8.8c2,20.2,0.9,70.1,1.4,80.6c0.5,10.6,3.7,64.8,4.8,72.4c1,7.7-0.9,7.7,3.5,16.3c4.4,8.6,8.1-2.9,4.7-20.2\n                    c-3.5-17.2-2.1-29.3-2.2-46.1c-0.1-16.8-0.5-77.3-2.6-107.5c-0.3-4.3-0.5-10.1-0.6-17c2.1-0.9,4.8-1.9,8.5-3.1\n                    c14.4-4.6,13.6,13.3,14.9,23.8c1.3,10.5,3.9,31.4,4,40.2c0.1,8.8,7.1,34.5,7.8,45.1c0.5,8.5-5.2,29.4,0.9,34.8\n                    c1.5,1.3,3.8,1.7,7,0.6c3-0.9,4.8-3.5,5.9-7c2.3-7.4,1.1-19.4-0.8-31c-0.3-1.6-0.5-3.1-0.8-4.6c-2.2-11.5-4.8-22-5-26.3\n                    c-0.7-11.1-1.1-43.7-5.7-55.5c-4.6-11.8-4.9-43.6-5.2-53.4c-0.3-9.8-0.2-25.4,6.3-39.9c6.5-14.4,1.3-36-0.5-49.2\n                    c-1.8-13.1,7-32.5,8.4-34.7c2.1-3.4,4.1-6.4,6.1-9.1c-0.4,9.1-1.1,19.6-2.1,27c-1.8,13.9-3,87.5-3.4,104.7\n                    c-0.4,17.3-0.3,28.3-0.2,44.1c0.1,15.8,1.7,42.2,2.7,56.6c1,14.4,0.6,23,1.6,33.6c1,10.6-3.3,13.5,1.1,16.3\n                    c4.3,2.8,6.7-10.6,7.1-21.2c0.4-10.6-1.6-34.1-0.8-49.9c0.9-15.8-2.3-67.6-1.9-75.8c0.4-8.2,7.2-99.5,6.2-110\n                    c-0.7-7.6,1.2-28,2.3-41.5c3.4-2.7,7.3-4.3,10.4-4.3c0.5,0,1.1,0,1.9,0.1c1.1,6.5,3.1,9.2,3.5,14.4c0.5,7.7-4.2,21.1-3.2,32.7\n                    c1,11.5,5.4,24.9,5.5,34c0.1,9.1-4.9,84.6-4.4,95.6c0.6,11,1.7,41.3,1.7,41.3c0.8,50.9,1.6,101.7,2.4,152.6c0,0-0.9,14.9,5.4,14.8\n                    c6.2,0,4.7-16.3,4.7-16.3c-0.7-41.1-1.5-82.2-2.2-123.3c0,0,2.4-8.2,4.2-13.5c1.9-5.3,1.7-29.3,2.1-43.7c0.4-14.4,1.5-98,2.9-106.7\n                    c1.4-8.6-4.4-18.2,1.8-20.6c6.2-2.4,5.9,19.2,6.9,25.4s-2.6,76.4-2.5,79.8c0,3.4-2.3,12,3,13.4c5.3,1.4,6.2-11.6,6.2-11.6\n                    s3.9-86.5,3.4-93.7c-0.5-7.2,5.1-19.7,8.5-19.2c3.4,0.4,0.6,18.7,2.1,28.3c1.5,9.6-2.9,94.7-1.9,111.4c1.1,16.8-1.1,60-1.5,72\n                    c-0.4,12-0.4,20.2,4.4,20.6c4.8,0.4,3.2-26.4,3.1-35.5c0-9.1-1.2-37.9-1.7-48.5c-0.5-10.6,1.7-38.4,4-47.1\n                    c2.3-8.7,13.2-70.7,17-77.5s12.3-32.2,16.1-33.2c3.8-1,3.5,24.9,3.5,28.8c0,3.8-7.9,63.5-7.4,66.8c0.5,3.4,0.1,15.4,0.1,20.6\n                    c0,5.3-3.7,29.8-1.7,35c2,5.3-0.5,6.7,5.8,8.1s3.2-18.7,3.7-28.3c0.4-9.6,7.8-76,8.8-84.1c0.9-8.2,0.2-39.8,1.1-49.9\n                    c0.4-20.2,4.4-21.8,7.7-21.5c3.3,0.4,3.6,5.7,4.1,14.2c0.9,17.4,1,45.7,0.1,54.7c-1.4,13.4,0,110,2,121.5c2,11.5,2.1,25.9,2.6,34.5\n                    c0.5,8.6-1.8,14.4,4.4,18.2c6.3,3.8,5.2-9.6,4.7-15.9c-0.5-6.2-3-14.9-4-25.9c-1-11-1.7-41.7-3.2-56.1C0.1,185.6,4.4,76,4.3,61.6\n                    c-0.1-14.4-2.1-23.5,7-28.4c9.1-4.8,18.3,9.5,19.3,22.4c1,13,1.7,46.1,0.9,67.7c-0.8,21.6-2.3,120.1-4.6,135\n                    c-2.3,14.9,0.7,37.9,0.8,56.1c0.1,18.2,2.9,90.7,2.1,106.5c-0.9,15.8,1.3,64.7,1.3,72.9s-0.9,18.2,4,27.3c4.9,9.1,8.6-3.9,5.7-13.5\n                    c-2.9-9.6,2.3-24.9,0.8-39.8c-1.5-14.9-1.7-49.9-3.2-62.4c-1.5-12.5,1.5-73-0.5-90.7c-2-17.8-2.1-37.9-0.8-50.9\n                    c1.4-13,1.5-63.8,1-78.7c-0.4-11,2.1-76.8,3.4-113.6c2.8,8.3,5.8,15.8,7.2,22.1c3.1,13.6-2.3,89.4-0.8,102.4c1.6,13-0.8,47.1,0,56\n                    c0.8,8.9,2.3,17.7,7,17.7c4.7,0,3.9-34.8,4.7-45c0.8-10.2,12.5-13.6,21.8-7.5c9.4,6.1,7.8,58,7.8,67.6c0,9.6,3.1,34.8,10.1,34.8\n                    c7,0,5.5-25.9,7.8-34.1c2.3-8.2,7,1.4,7.8,3.4c0.8,2-1.6,22.5-2.3,27.3c-0.8,4.8,0.8,14.3,0,22.5c-0.1,0.8-0.1,1.5-0.2,2.2\n                    c-0.4,6.1,0.4,11.2,3.7,12.9c0.6,0.3,1.2,0.5,1.9,0.6c5.5,0.7,2.3-15.7,5.5-17.7c3.1-2,3.1,13.6,7,13.6c3.9,0,2.3-18.4,2.3-18.4\n                    s-3.9-68.9-3.1-105.1c0.7-32.6,5.2-82.8,7.8-104.5c0.6,0.5,1.1,1.3,1.5,2.3c1.1,2.7,1.6,10,2.2,13.3c0.6,3.3,1,7.1,1.7,10.8\n                    c0.6,3.7-0.6,16.8-0.1,18.6c0.5,1.8-0.5,14.8-0.7,16.5c-0.2,1.7-0.6,22-0.5,23.4c0,1.4-0.3,17.7,4.2,16.7c2.8-0.6,2.6-11,2.2-12.5\n                    c-0.4-1.5-0.4-21.6-0.6-23.8c-0.2-2.3,0.8-26.8,1.6-29.3c0.8-2.5-1-24.3-1-26.5c-0.1-2.2,1.1-5.5,2.1-6.3c1-0.8,1.5,5.4,1.5,7.7\n                    s0.2,35.1,0.2,38.2c0,3.1,0.6,46.7,0.6,48.8c0,2.1-0.6,24.5-0.8,34.9c-0.1,10.4,0.8,59.8,0.6,67.1c-0.2,7.3,0.4,39.1,1.2,45.1\n                    c0.8,6,3.9,57.5,4.2,67.9c0.1,5.2,0.2,9.9,0.2,13.8c0.8-0.3,1.7-0.6,2.5-0.9c0.9-0.3,1.7-0.6,2.6-0.9c-0.2-2.1-0.3-3.5-0.3-3.9\n                    c-0.3-2.4-1-48.6-1.6-69.9c-0.1-4-0.2-7.2-0.4-8.9c-0.7-11.1-1.6-46.7-2-53.3c-0.4-6.6,1-45.1,1.5-49.4c0.5-4.3,1.8-24.6,2-29\n                    c0.2-4.4-2.5-43.2-2.3-48c0.2-4.8-1.7-50.1-1.7-54.4c0-4.4,2.3-8.1,2.9-9.1c0.6-1,3.1-5,4.8-10.4c1.7-5.4,6.6-6.6,8.5-8.9\n                    c1.9-2.3,5.6-7.7,6.4-9.6c0.8-1.9,3.5-4.8,4.6-6.4c1-1.7,2.3,3.1,2,8.3c-0.3,5.2,0.9,12,0.9,17.4c0,5.4,0.4,14.1,0,18.7\n                    c-0.4,4.6-2.5,22-2.5,24.3c0,2.3,1.5,6.4,1.9,10.6c0.4,4.2,0.1,85.1,0.2,87.6c0.1,2.5-0.3,7.2,0.2,9.1c0.4,1.9,0.8,6,0.8,7.9\n                    c0,1.9-1,13.7-1.1,16.3c0,2.6-0.2,8.2-0.4,10.2c-0.3,1.9-0.2,10.3-0.8,12c-0.6,1.7-0.2,6.9,0.2,8.1c0.4,1.3-1,9.2,2.1,10.2\n                    c2.1,0.6,3.1-1.5,3.5-3.5c0.4-2.1,0.4-14.4,0.9-16.4c0.5-2,0.5-13.8,0.3-16.9c-0.2-3.1,0.2-21,0.4-23.1c0.2-2.1-0.3-96.1-0.3-99\n                    c0-2.9-1-20.1-1.2-22.8c-0.2-2.7,1.2-22.4,1.7-25c0.4-2.6,0-18,0.4-20.5c0.4-2.5-0.2-6,0.6-8.7c0.8-2.7,1-5.8,1-8.3\n                    c0-0.6,0-1.3,0-2.1c2-0.3,4.1-0.4,6.2-0.4c0.5,0,1.1,0,1.6,0c-0.1,1.2-0.2,2.2-0.3,2.9c-0.4,3.1,0.4,14.1,0.2,17.4\n                    c-0.2,3.3,0,22.2-0.1,24.1c-0.1,1.9,0.1,18.9,0.9,23.7c0.8,4.8-0.5,97.3-0.7,100.2c-0.2,2.9-1,19.3-1.2,22c-0.2,2.7,0.6,9.3,0.8,12\n                    c0.2,2.7,0.4,15,0.2,16.6s0.2,3.3,1.9,3.1c1.7-0.2,3.9-15.8,3-19.1c-1-3.3,0.5-18.3,0.7-21.6c0.1-3.3,0.8-94.6,0.8-98\n                    c0-3.3-0.4-15.6-0.6-19.9c-0.2-4.4,0.4-20.1,1-23.6c0.5-3.4,0.1-17.1-0.3-18.4c-0.3-1-0.4-14-0.2-20.8c5,1,9.8,2.7,14.8,4\n                    c0.7,4.2-1.3,9.1,0.8,15.6c1.3,4.1,0.4,23.7,0.4,29.7v34.5c0,5.2,1.5,60.1,1.9,68.4c0.4,8.3,0,54.8,0,58.3c0,3.4,1.5,33.9,0.4,40.6\n                    c-1,6.6-2.7,23.7,2,24.8c6.8,1.6,4.5-10.1,4.5-17.6v-43.9c0-8.4-2.5-32.4-1.6-42.4c0.9-10-1.8-64.7-0.9-80.3\n                    c0.9-15.6,1.2-34.6,0.9-40.8c-0.3-6.2-3.1-19.9-1.9-26.2c1.2-6.2,0.8-5.7,0.8-8.8c0-3.6-1.2-6.6-0.7-10.5c3.3,0.5,6.7,0.5,10-0.4\n                    c2.1-0.5,3.9-1.5,5.9-2.3c2.8-1.2,2.6-2,3.3,0.7c0.7,2.8,1.7,5.5,3.2,7.8c0,1.6-0.1,2.8-0.1,3.3c0,2.5,0.8,23,0.7,34.7\n                    c-0.1,11.7-1.7,28.8-1,34.7c0.6,5.9,0.5,56.8-0.5,62c-1.1,5.2,0.1,32.2-0.1,42.2c-0.3,10-1.9,35.9-2.2,44.6c0,0,0.2,7.5,0.2,9.1\n                    c0,1.6,0.6,8.5,1.2,9.4c0.6,0.9,2.9,1.9,3.1-0.1c0.3-2,0.1-4.1,0.1-5.6c0.1-4.2,1.4-36,2.3-46.3c0.9-10.3,0.9-52.8,0.5-63.6\n                    c-0.5-10.7,0.5-53.2,1.9-63.4c1.4-10.3,0-26.2-0.5-36.5c-0.2-3.8,0.2-10.7,0.7-17.9c1,0.7,2.1,1.3,3.2,1.9c1.7,0.8,3.9,1.5,6.2,2\n                    c0.1,7.2,0.3,13.2,0.9,15.8c1.7,7.7,0.8,26.8,1.2,30.8c0.5,4,3.2,24.7,4,27.7c0.9,2.9-0.8,2.9,2.9,6.2c3.7,3.3,6.9-1.1,4-7.7\n                    c-2.9-6.6-1.8-11.2-1.9-17.6c-0.1-6.4-0.4-29.5-2.2-41c-0.5-3-0.6-8-0.6-13.9c2.3-0.4,4.4-1.3,6-2.9c2.3-2.3,2-6.3,3.3-9.1\n                    c1-2.1,1.8-3.7,3.1-1.3c1.7,3,0.2,7.6-0.3,10.7c-0.6,4.3-0.9,8.6,0.8,12.8c3.3,8.2,12.8,9,17.9,2c6.2-8.3,1.5-18.7,3.5-27.9\n                    c0.8-3.5,3-5.8,5.7-6.9c-0.3,6.8-0.6,13-0.7,15.6c-0.3,6.6-0.3,10.8-0.2,16.9c0.1,6,1.4,16.1,2.3,21.6c0.9,5.5,0.5,8.8,1.4,12.8\n                    c0.9,4-2.8,5.1,0.9,6.2c3.7,1.1,5.6-4,6-8.1c0.4-4-1.4-13-0.7-19.1c0.7-6-2-25.8-1.6-28.9c0.1-1.3,1.2-7.6,2.3-15.1\n                    c1.1,1.1,1.9,2.4,2.4,4.2c1.2,3.8,5.3,5.4,8.8,3.6c4.6-2.4,6.9-7.2,6.8-12.1c0.4,0.3,0.8,0.5,1.2,0.7c-1.2,9.9-3,23.9-2.7,26.7\n                    c0.5,4.2,1.4,15.8,1.4,15.8c0.7,19.4,1.3,38.8,2,58.3c0,0-0.7,5.7,4.6,5.7c5.3,0,4-6.2,4-6.2c-0.6-15.7-1.2-31.4-1.8-47.1\n                    c0,0,2-3.1,3.6-5.1c1.6-2,1.5-11.2,1.8-16.7c0.2-3.7,0.7-19.7,1.4-30.5c2.4-0.8,4.8-1.8,7.3-2.6c0.4-0.1,0.7-0.2,1.1-0.3\n                    c-0.5,8.6-2.2,24-2.2,24.9c0,1.3-2,4.6,2.5,5.1c4.5,0.5,5.2-4.4,5.2-4.4s1.3-13.2,2.2-23.6c1.4,1,2.8,2.2,4.5,3.2\n                    c1.7,1,3.3,1.7,5,2.1c-0.7,10.9-1.9,24.7-1.4,28.6c0.9,6.4-0.9,22.9-1.3,27.5c-0.3,4.6-0.3,7.7,3.8,7.9c4.1,0.2,2.7-10.1,2.7-13.6\n                    c0-3.5-1-14.5-1.5-18.5c-0.5-4,1.4-14.7,3.4-18c0.3-0.5,0.8-1.4,1.3-2.7c1.2,1.3,2.6,2.3,4.5,2.9c4,1.1,8-0.4,10.7-3.4\n                    c1.2-1.3,2-2.8,2.8-4.4c2.3-0.5,4.5-1.5,6.5-3.1c-0.7,2.7-1.1,4.6-1,5c0.4,1.3,0.1,5.9,0.1,7.9c0,2-3.1,11.4-1.4,13.4\n                    c1.7,2-0.4,2.6,4.9,3.1c5.3,0.5,2.8-7.2,3.1-10.8c0.2-1.7,1.6-8.1,3.2-14.8c4.8,1.5,10,0.2,13.6-3.8c0.4-0.5,0.8-0.9,1.1-1.5\n                    c0.1,12.8,1,30.5,2.2,33.4c1.7,4.4,1.8,9.9,2.2,13.2c0.5,3.3-1.6,5.5,3.8,7c5.3,1.5,4.4-3.7,4-6.1c-0.4-2.4-2.5-5.7-3.4-9.9\n                    c-0.9-4.2-1.4-15.9-2.7-21.4c-0.4-1.9-0.3-8,0.1-15.5c0.7,1.5,1.1,3.5,2,4.7c1.1,1.6,2.6,3,4.2,4c3.4,2.1,7.5,2.9,11.3,2.3\n                    c0.3,6.1,0.5,11.6,0.3,16c-0.6,17.2-5,14.9-1.6,30.3c3.5,15.4,1.5,53.5,2.4,61.6c0.9,8.1,6.4,49.5,8.1,55.3\n                    c1.7,5.9-1.6,5.9,5.9,12.4c7.4,6.6,13.8-2.2,7.9-15.4c-5.9-13.2-3.6-22.3-3.7-35.2c-0.2-12.8-0.8-59-4.3-82.1\n                    c-3.6-23.1,3.9-42.5,6.3-48.4c1.3-3.2,4.7-5.2,8.3-6.8c0.3,0.4,0.7,0.8,1.1,1.2c3.2,3.2,7.5,5.1,11.9,5.8c3.6,0.5,6.6-0.4,9.7-1.2\n                    c0.2,0.6,0.5,1.2,0.5,1.6c0.3,2.3,0.1,4.6-0.5,6.8c-1.1,4.1-3.4,7.5-3,11.9c0.2,2.2,1.1,4.2,2.3,6.1c0.7,1.1,2.3,2.3,2.6,3.6\n                    c0.6,2.7-2.2,7.1-2.9,9.7c-1.1,4.1-1,8.2,0.4,12.2c1.7,4.5,2.6,8.1,2.5,13c-0.2,10.8-0.4,21.6-0.6,32.4c-0.2,9.6,14.8,9.6,15,0\n                    l0.5-23.8c0.1-7,1.1-14.7-1.2-21.4c-0.9-2.6-2.5-5-2.3-7.8c0.2-2.7,1.9-5.4,2.6-7.9c1.1-3.9,1.1-7.6,0-11c0.9-0.1,1.9-0.4,2.7-0.9\n                    c3.2-1.7,5.3-4.7,6.1-8.2c0.4-1.8,0.4-3.5,0.5-5.3c0.1-0.5,0.1-1,0-1.5c0.1-0.2,0.1-0.4,0.2-0.5c1.8-0.8,3.6-1.1,5.4-1.6\n                    c5,3.3,11.3,6.2,16.4,9.2c7.4,4.4,6.6,0,6,13.2c-0.6,13.2-0.5,21.6-0.4,33.7c0.2,12.1,2.9,32.2,4.6,43.2c1.8,11,1.1,17.6,2.8,25.6\n                    c1.7,8.1-5.6,10.3,1.8,12.5c7.4,2.2,11.3-8.1,12-16.2c0.7-8.1-2.8-26-1.3-38.1c1.5-12.1-3.9-51.7-3.2-57.9c0.2-1.5,0.3-3.3,0.5-5.3\n                    c0.6,0.3,1.1,0.6,1.7,0.9c8.6,3.9,24.9,5.5,27.7-6.7c0-0.1,0-0.2,0-0.2c2.1,4.6,4,8.9,4.1,12.4c0.1,7-8.3,64.6-7.4,73\n                    c0.9,8.4,2.9,31.5,2.9,31.5c0.6,18.6,1.3,37.1,1.9,55.7c1.8,1,3.8,1.7,6.1,2c5,0.6,8.5-1.1,10.7-4c-0.4-10.8-0.8-21.6-1.3-32.4\n                    c0,0,4-6.2,7.2-10.3c3.2-4,3-22.4,3.6-33.4c0.7-11,2.5-74.8,4.8-81.5c2.4-6.6-7.5-13.9,3-15.8c10.6-1.9,10,14.6,11.7,19.4\n                    c1.7,4.8-4.3,58.4-4.3,60.9c0,2.6-3.9,9.2,5,10.2c9,1.1,10.5-8.8,10.5-8.8s6.7-66.1,5.8-71.6c-0.9-5.5,8.6-15,14.5-14.7\n                    c5.8,0.3,1,14.3,3.5,21.6c2.5,7.3-5,72.3-3.2,85.1c1.8,12.8-1.8,45.8-2.5,55c-0.7,9.2-0.6,15.4,7.5,15.7c8.1,0.3,5.4-20.2,5.3-27.1\n                    c-0.1-7-2-28.9-2.9-37c-0.9-8.1,2.9-29.3,6.8-35.9c4-6.6,22.3-54,28.7-59.2c6.4-5.1,20.8-24.6,27.3-25.4c6.5-0.8,6,19,6,22\n                    c0,2.9-13.4,48.5-12.6,51.1c0.8,2.6,0.2,11.7,0.2,15.8c0.1,4-6.2,22.7-2.9,26.8c3.3,4-0.7,5.1,9.8,6.2s5.5-14.3,6.2-21.6\n                    c0.7-7.3,13.3-58,14.8-64.3c1.5-6.2,0.4-30.4,1.9-38.1c0.6-15.4,7.4-16.7,13-16.4c5.6,0.3,6.2,4.4,6.9,10.8\n                    c1.5,13.3,1.7,34.9,0.1,41.8c-2.3,10.3,0.1,84,3.4,92.8c3.4,8.8,3.5,19.8,4.4,26.4c0.9,6.6-3.1,11,7.5,13.9c10.6,2.9,8.9-7.4,8-12.1\n                    c-0.9-4.8-5-11.3-6.8-19.8c-1.7-8.4-2.9-31.9-5.5-42.9c-2.6-11,4.7-94.6,4.5-105.6c-0.1-11-3.5-17.9,11.9-21.7\n                    c15.4-3.7,31,7.2,32.8,17.1c1.8,9.9,2.9,35.2,1.5,51.7c-1.4,16.5,1.1,51.7-2.8,63c-3.9,11.4,1.2,28.9,1.4,42.9\n                    c0.1,5,0.7,15.4,1.5,27.3c3.6,3,7.8,4.4,11.8,2.5c2.6-1.2,4.1-3.7,5-6.8c0.2-9.6,0-18.1-1.2-22.7c-3.4-13.6-3.6-28.9-1.3-38.8\n                    c2.3-9.9-2.4-8.7-3.4-20.1c-1-11.4,7.1-98.7,7-105.3c-0.1-6.6,6.9-32,6.8-38.6c0-1.9,0.6-4.1,1.7-6.4c1.3,0.2,2.7,0,3.8-0.7\n                    c1-0.6,1.8-1.3,2.5-2.1c0.1,9.2-0.1,16.9-0.1,20c0,9.6,2.7,34.8,8.9,34.8c6.1,0,4.8-25.9,6.8-34.1c2-8.2,6.1,1.4,6.8,3.4\n                    c0.7,2-1.4,22.5-2,27.3c-0.7,4.8,0.7,14.3,0,22.5c-0.7,8.2,0,15,4.8,15.7c4.8,0.7,2-15.7,4.8-17.7c2.7-2,2.7,13.6,6.1,13.6\n                    c3.4,0,2-18.4,2-18.4s-1.2-23.3-2-49.9c1.6,0.1,3.2-0.5,4.7-1.6c4.6-3.6,6.2-9.1,7-14.7c0.4-3,0.6-12.1,5-12.1\n                    c0.3,1.6,0.5,3.3,0.9,4.8c0.6,2.8,1.7,5.5,3.2,7.9c0.5,7.4,0.9,14.3,0.7,18.2c-0.5,10.3-1.9,26.2-0.5,36.5\n                    c1.4,10.3,2.4,52.7,1.9,63.4c-0.5,10.7-0.5,53.3,0.5,63.6c0.9,10.3,2.3,42.1,2.3,46.3c0,1.5-0.1,3.7,0.1,5.6c0.3,2,2.6,1,3.1,0.1\n                    c0.6-0.9,1.2-7.8,1.2-9.4c0-1.6,0.2-9.1,0.2-9.1c-0.3-8.7-1.9-34.6-2.2-44.6c-0.3-10,0.9-37-0.1-42.2c-1.1-5.2-1.2-56-0.5-62\n                    c0.6-5.9-0.9-23.1-1-34.7c-0.1-7.2,0.2-17.7,0.5-25.3c6,3.5,13.9,2.6,17.6-4.3c2-3.8,2-8.3,1.5-12.4c-0.1-1-0.6-3.4-0.5-5.4\n                    c0,0,0,0,0.1-0.1c0.9-0.1,1.8-0.3,2.7-0.5c0.2,0.7,0.4,1.4,0.7,2.2c1.6,5-0.2,8.4-0.2,12.7c0,3.2-0.5,2.6,0.8,8.8\n                    c1.2,6.2-1.6,19.9-1.9,26.2c-0.3,6.2,0,25.2,0.9,40.8c0.9,15.6-1.8,70.3-0.9,80.3c0.9,10-1.6,34-1.6,42.4v43.9\n                    c0,7.5-2.2,19.2,4.5,17.6c4.7-1.1,3-18.2,2-24.8c-1-6.6,0.5-37.1,0.4-40.6c0-3.4-0.4-50,0-58.3c0.4-8.3,1.9-63.2,1.9-68.4V58.9\n                    c0-6-0.9-25.6,0.4-29.7c1.9-5.8,0.5-10.2,0.7-14.1c0.8,1.2,2.1,2.2,3.4,2.6c3,0.8,6.1,0.2,8.3-2.1c0.5-0.6,1.7-2.1,2.6-3.7\n                    c0.3,0.9,0.5,1.9,0.8,2.9c0.1,6.8,0,14.9-0.3,15.7c-0.4,1.2-0.9,14.9-0.3,18.4c0.5,3.4,1.2,19.2,1,23.6c-0.2,4.4-0.6,16.6-0.6,19.9\n                    c0,3.3,0.7,94.7,0.8,98c0.1,3.3,1.6,18.3,0.7,21.6c-1,3.3,1.3,18.9,3,19.1c1.7,0.2,2.1-1.5,1.9-3.1c-0.2-1.7,0-13.9,0.2-16.6\n                    c0.2-2.7,1-9.3,0.8-12c-0.2-2.7-1-19.1-1.2-22c-0.2-2.9-1.5-95.4-0.7-100.2c0.8-4.8,1-21.8,0.9-23.7c-0.1-1.3,0-10.9,0-17.7\n                    c2.6,2.8,7.4,1.6,9.4-1.8c0,5.5-0.1,13.2,0.2,15c0.4,2.6,1.9,22.3,1.7,25c-0.2,2.7-1.2,19.9-1.2,22.8c0,2.9-0.5,96.9-0.3,99\n                    c0.2,2.1,0.6,19.9,0.4,23.1c-0.2,3.1-0.2,14.9,0.3,16.9c0.5,2,0.5,14.3,0.9,16.4c0.4,2.1,1.4,4.2,3.5,3.5c3.1-1,1.7-8.9,2.1-10.2\n                    c0.4-1.3,0.8-6.5,0.2-8.1c-0.6-1.7-0.5-10.1-0.8-12c-0.3-1.9-0.4-7.6-0.4-10.2c0-2.6-1.1-14.4-1.1-16.3c0-1.9,0.4-6,0.8-7.9\n                    c0.4-1.9,0.1-6.6,0.2-9.1c0.1-2.5-0.2-83.4,0.2-87.6c0.4-4.2,1.9-8.3,1.9-10.6c0-2.3-2.1-19.7-2.5-24.3c-0.4-4.6,0-13.3,0-18.7\n                    c0-5.4,1.1-12.3,0.9-17.4c-0.3-5.2,1-10,2-8.3c1,1.7,3.7,4.6,4.6,6.4c0.8,1.9,4.6,7.3,6.4,9.6c1.9,2.3,6.9,3.5,8.5,8.9\n                    c1.7,5.4,4.2,9.3,4.8,10.4c0.6,1,2.9,4.8,2.9,9.1c0,4.4-1.9,49.6-1.7,54.4c0.2,4.8-2.5,43.6-2.3,48c0.2,4.4,1.5,24.7,2,29\n                    c0.5,4.3,1.9,42.7,1.5,49.4c-0.4,6.6-1.3,42.2-2,53.3c-0.7,11.1-1.6,75.9-2,78.8c-0.1,0.4-0.2,1.8-0.3,3.9c1.7,0.6,3.4,1.2,5.1,1.8\n                    c0-4,0.1-8.6,0.2-13.8c0.2-10.4,3.3-61.9,4.2-67.9c0.8-6,1.5-37.8,1.2-45.1c-0.2-7.3,0.7-56.7,0.6-67.1c-0.1-10.4-0.8-32.8-0.8-34.9\n                    c0-2.1,0.6-45.7,0.6-48.8c0-3.1,0.2-35.9,0.2-38.2s0.4-8.5,1.5-7.7c1,0.8,2.2,4.1,2.1,6.3c-0.1,2.2-1.8,23.9-1,26.5\n                    c0.8,2.5,1.8,27,1.6,29.3c-0.2,2.3-0.2,22.3-0.6,23.8c-0.4,1.5-0.6,11.9,2.2,12.5c4.5,1,4.1-15.3,4.2-16.7c0-1.4-0.3-21.7-0.5-23.4\n                    c-0.2-1.7-1.3-14.7-0.7-16.5c0.5-1.8-0.7-14.9-0.1-18.6c0.6-3.7,1-7.5,1.7-10.8c0.6-3.3,1.2-10.7,2.2-13.3c1.1-2.7,2.5-3.3,5-3.7\n                    c1.2-0.2,3.4-0.7,5.5-0.4c-0.3,1-0.7,2.1-1.1,3.4c-3.9,12.5,0.6,48,0.1,65.2c-0.6,17.2-3,95,0.4,110.4c3.5,15.4,1.5,53.5,2.4,61.6\n                    c0.9,8.1,6.4,49.5,8.1,55.3c1.7,5.9-1.6,5.9,5.9,12.4c7.4,6.6,13.8-2.2,7.9-15.4c-5.9-13.2-3.6-22.3-3.7-35.2\n                    c-0.2-12.8-0.8-59-4.3-82.1c-3.6-23.1,2.1-104.2,2.7-117.7c0.6-13.6-0.8-60.5,1.6-66.3c2.4-5.9,12.1-7.7,16.9-10.7\n                    c4.8-2.9,2.4-6.2,10.5-4.4c8.2,1.8,9,6.9,14.8,8.8c5.7,1.8,9,2.5,13.9,8c5,5.5,14.8,9.5,22.2,13.9c7.4,4.4,5,7.3,5,12.4\n                    c0.1,5.1-1.3,23.8-4.4,34.5c-3.1,10.6-5,66.8-5.7,80c-0.6,13.2-0.5,21.6-0.4,33.7c0.2,12.1,2.9,32.2,4.6,43.2\n                    c1.8,11,1.1,17.6,2.8,25.6c1.7,8.1-5.6,10.3,1.8,12.5c7.4,2.2,11.3-8.1,12-16.2c0.7-8.1-2.8-26-1.3-38.1c1.5-12.1-3.9-51.7-3.2-57.9\n                    c0.7-6.2,12.2-76,10.5-84c-1.7-8.1,5.2-34.8,5.2-40.3c-0.1-5.5,3.9-14.7,4.6-20.9c0.7-6.2,6.4-7.7,12.9-8.5\n                    c6.5-0.8,2.6,11.7,1.1,24.9c-1.5,13.2,5.9,15,6.8,20.9c0.9,5.9-7.1,16.1-5.4,24.9c1.7,8.8,9.2,19,9.3,26c0.1,7-8.3,64.6-7.4,73\n                    c0.9,8.4,2.9,31.5,2.9,31.5c1.3,38.8,2.7,77.7,4,116.5c0,0-1.5,11.4,9.1,11.3c10.6,0,8-12.5,8-12.5c-1.2-31.4-2.5-62.8-3.7-94.2\n                    c0,0,4-6.2,7.2-10.3c3.2-4,3-22.4,3.6-33.4c0.7-11,2.5-74.8,4.8-81.5c2.4-6.6-7.5-13.9,3-15.8c10.6-1.9,10,14.6,11.7,19.4\n                    c1.7,4.8-4.3,58.4-4.3,60.9c0,2.6-3.9,9.2,5,10.2c9,1.1,10.5-8.8,10.5-8.8s6.7-66.1,5.8-71.6c-0.9-5.5,8.6-15,14.5-14.7\n                    c5.8,0.3,1,14.3,3.5,21.6c2.5,7.3-5,72.3-3.2,85.1c1.8,12.8-1.8,45.8-2.5,55c-0.7,9.2-0.6,15.4,7.5,15.7c8.1,0.3,5.4-20.2,5.3-27.1\n                    c-0.1-7-2-28.9-2.9-37c-0.9-8.1,2.9-29.3,6.8-35.9c4-6.6,22.3-54,28.7-59.2c1.9-1.5,4.6-4.3,7.5-7.6c1.6,12.6,4.3,21.9,8.1,21.9\n                    c4.9,0,7-16.3,7.8-37.8c1.5-1.1,2.9-1.8,4-1.9c6.5-0.8,6,19,6,22c0,2.9-13.4,48.5-12.6,51.1c0.8,2.6,0.2,11.7,0.2,15.8\n                    c0.1,4-6.2,22.7-2.9,26.8c3.3,4-0.7,5.1,9.8,6.2c10.6,1.1,5.5-14.3,6.2-21.6c0.7-7.3,13.3-58,14.8-64.3c1.5-6.2,0.4-30.4,1.9-38.1\n                    c0.6-15.4,7.4-16.7,13-16.4c0.5,0,1,0.1,1.4,0.2c-0.6,44-0.8,93.2,1.4,111.1c4.1,32.9,13.7,149.6,15.1,222.4\n                    c1.1,57.2-2.9,155-4.7,194.3c-0.5,10.7-0.8,17.1-0.8,17.1s-2,26.5,1.6,34.7c0.6,1.5,1.5,2.4,2.5,2.4c6.2,0,6.8-25.9,10.9-27.7\n                    c0.4-0.2,0.9-0.1,1.4,0.3c5.5,4.1,0,37.1,9.6,35.7c9.6-1.4,11-15.1,9.6-31.6c-1.4-16.5,1.4-35.7,0-45.3c-1.4-9.6-5.5-50.8-4.1-54.9\n                    c1-3,5.6-13.9,9.6-13.4c1.5,0.2,3,2,4.1,6.5c3.1,12.5,2.3,45.4,7.1,60.7c1.5,4.9,3.6,8,6.6,8c12.4,0,17.8-50.8,17.8-70\n                    c0-16.5-2-95.7,7.8-125.6c1.5-4.6,3.3-8,5.5-9.9c0.1-0.1,0.3-0.3,0.4-0.4c5.5-4.2,11.6-6.1,17.2-6.1c11,0,20.4,7.6,21.3,21.2\n                    c1.4,20.6,0,90.6,8.2,90.6c4.8,0,7.8-6.2,9.7-14.9c0.5-2.2,0.9-4.5,1.2-6.9c0.6-4.4,1.1-9.2,1.5-13.9c1.4-17.8-2.7-86.5,0-112.6\n                    c2.7-26.1-6.9-178.5-1.4-205.9c2-9.9,5.6-21.2,9.4-33.5c1.7,21.7,5.9,57.8,5.8,69c0,5.9,2.6,129.1,5.5,271.4\n                    c3.2,153.4,6.8,329,7.9,404.3h13.9c-0.7-32-1.3-67.2-2-103.9c-3.6-193.4-7.2-427.3-8-448.1c-1.4-35.2-0.2-89.3,1.4-110.4\n                    c1.7-21.1,16.7-44.5,31.5-36.6c14.8,7.9,11.6,22.8,11.5,46.3c-0.1,9.4,2.2,122.4,4.7,255.8c2.7,142.9,5.7,309.2,6.7,396.8h5.3h3.2\n                    c-0.3-195.3-3.2-535.7-4.8-551.6c-1.5-14.8-1.3-60.8,0.1-89.3c0.7-13.8,1.3-22.5,6.6-23.1c5.3-0.6,11.9,2.1,12.5,35\n                    c1.5,16.5,0.4,68.1,1.9,81.4c0.5,4.5,3,74.6,6.1,166.4c4.2,123.6,9.5,286.4,12.6,381.2h15.1c-1.5-56.2-7.1-223.7-11.7-363.9\n                    c-3.8-114.5-7-210.8-7-213.3c0-6.3-0.5-48.5,5.8-46.9c6.3,1.6,20.1,43.2,26.3,54.2c5.2,9.3,23.6,430.6,31.5,570h15.8\n                    c-3.1-186.4-10.9-550.8-9-562.7c2.4-15.6-2.2-45.5,3.4-46.2c5.6-0.7,14.8,19.7,13.9,31.4c-0.7,9.4,7.9,417.8,11.3,577.5h15\n                    c-3.1-153.6-11.3-549.6-10-557.8c1.6-10.2,1.1-45.4,11.2-41.4c10.2,4,0.7,19.6,2.9,33.7c1.7,10.9,7.4,384.3,10.2,565.5h30.2\n                    c-3.5-168.4-13-555.1-12.9-566.9c0.1-14.9,7.3-36.8,8.9-55.5c1.7-18.8-6-40.8-5.2-53.3c0.9-12.5,7.9-16.4,6.5-44.6\n                    c-1.4-28.2-5.2-54.8,1.1-53.2c6.3,1.6,11.7,4.8,12.4,18.1c0.7,13.3,4.5,32.9,4.4,44.7c-0.1,11.7,6.6,68.9,5,86.2\n                    c-0.7,7.6,2.4,135,6.1,276.5c2.2,81.9,4.6,168.5,6.6,239.3c1,35.9,1.9,67.7,2.7,92.8c0.2,5.7,0.3,11.1,0.5,16.1h15.6v-53.2\n                    c-0.8-53-2-123.9-3.2-197.7c-2.8-171.7-6.2-358.8-7.9-371.3c-3-22.7-4.3-62.7-4.3-73.6c0.1-11-2.2-17.2,4.9-26.6\n                    c3.2-4.2,6.9-8.3,10.5-12.6V-3H-662.7z M941.9,21.7c-0.1-0.5-0.2-0.9-0.4-1.4c0.2-0.5,0.5-1,0.7-1.6C942.1,19.7,942,20.7,941.9,21.7\n                    z"/></svg></div><img src="{{ slideshowImages[10].url }}" class="slimeshow-image"></div></div><div class="slimeshow-square"><div class="slimeshow-content"><div style="position: absolute; z-index: 3; top: 0; left: 0; width: 100%"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1347.1 542.8" enable-background="new 0 0 1347.1 542.8" xml:space="preserve"><path style="fill: {{ slimeColorC }}; transition: all 3s; -webkit-transition: all 3s" fill="#FFCC00" d="M-662.7-3L-662.7-3l-0.1,269.6v262.8v59.4c1.4,2,3.1,3,4.8,3.2c4.2,0.5,8.3-4,8.5-11.8\n                c0.6-20.5-0.6-83.1-0.6-92.9c0-9.8-4.6-147.1-5.4-152.5c-0.8-5.3-6-88.3-4.4-97.4c3-17,21.3-12.7,28.3-11.5c6.9,1.2,11,2.9,14,10.3\n                c3,7.4,4.5,27.8,6.2,37.1c1.7,9.2,2.9,19.6,4.6,30c1.7,10.4-1.7,46.7-0.2,51.8c1.5,5-1.5,41.1-2.1,45.8c-0.6,4.6-1.5,61.1-1.5,65\n                c0,2.5-0.3,21.8,2.7,34.7c1.7,7.3,4.4,12.5,8.9,11.5c2.5-0.6,4.1-4,5.2-8.6c2.1-9.4,1.7-23.3,0.9-26.1c-1.1-4.2-1.2-59.9-1.8-66.2\n                c-0.6-6.3,2.3-74.4,4.4-81.5c2.2-7-2.7-67.4-2.9-73.5c-0.2-6.1,3.1-15.2,6-17.5c2.9-2.3,4,15,4,21.3c0,6.3,0.6,97.5,0.6,106.2\n                c0,8.7,1.7,129.8,1.7,135.6s-1.7,68.1-2.1,96.9c-0.2,15.4,0.4,61.9,1,104.9c0.5,37.3,0.9,72,0.6,81.4c-0.3,11.6,0.1,45.8,1,75.9\n                h20.6c-1.5-40.8-2.8-93.5-3.7-106.5c-0.6-9.5,0.2-42,1.2-73.2c1-29.7,2.3-58.1,3-63.9c1.4-11.9,5-68.3,5.6-80.4\n                c0.6-12.1-6.9-120-6.3-133.3c0.6-13.3-4.6-139.1-4.6-151.2c0-12.1,6.3-22.5,8.1-25.4c1.7-2.9,8.7-13.8,13.3-28.8\n                c4.6-15,18.5-18.5,23.7-24.8c5.2-6.3,15.6-21.3,17.9-26.5c2.3-5.2,9.8-13.3,12.7-17.9c2.9-4.6,6.3,8.6,5.6,23.1\n                c-0.7,14.4,2.5,33.5,2.5,48.5c0,15,1.1,39.2,0,51.9c-1.2,12.7-6.9,61.2-6.9,67.5c0,6.3,4,17.9,5.2,29.4c0.4,3.8,0.5,31.1,0.6,66.1\n                c0.1,70.5-0.2,172.5-0.1,177.2c0.2,7-0.7,20.1,0.4,25.3c1.2,5.2,2.3,16.7,2.3,21.9c0,5.2-2.9,38.1-2.9,45.2c0,7.1-0.5,22.9-1.2,28.2\n                c-0.7,5.4-0.4,28.7-2.2,33.3c-1.7,4.6-0.6,19.1,0.5,22.6c1.1,3.5-2.7,25.6,5.9,28.3c5.9,1.8,8.6-4,9.8-9.8\n                c1.1-5.8,1.1-39.9,2.5-45.4c1.5-5.6,1.4-38.3,0.8-46.9c-0.6-8.7,0.6-58.3,1.1-64c0.3-2.9,0.1-70.6-0.2-138.2\n                c-0.3-66.5-0.7-132.8-0.7-136.8c0-8.2-2.9-55.9-3.5-63.4c-0.6-7.5,3.5-62.3,4.7-69.6c1.2-7.2-0.1-49.9,1.1-56.8\n                c1.1-6.9-0.6-16.7,1.7-24.2s2.9-16.2,2.9-23.1c0-6.9-0.6-23.1,2.9-27.1c3.5-4,11-10.4,15.7-8.1c4.8,2.3,3.3,27.8,2.2,36.4\n                c-1.2,8.7,1.1,39.2,0.6,48.5c-0.6,9.2,0,61.7-0.2,67c-0.2,5.2,0.2,52.5,2.5,65.7c0.5,2.9,0.7,17.7,0.7,39.1c0,37-0.5,93.6-1.1,142.5\n                c-0.6,51-1.4,93.6-1.6,96.8c-0.3,3.8-0.9,15.7-1.6,28.1c-0.8,14.2-1.6,29.1-1.9,33.1c-0.6,7.5,1.7,25.9,2.3,33.5\n                c0.6,7.5,1.2,41.5,0.6,46.2c-0.4,2.9,0,5.8,1.4,7.4c0.8,0.9,2.1,1.5,3.8,1.2c1.5-0.2,3.3-5.1,4.8-11.9c3.1-13.7,5.3-35,3.5-41.1\n                c-2.7-9.1,1.5-50.9,1.9-60c0.2-6,1.1-116.2,1.7-194.5c0.3-41.7,0.5-74.4,0.5-77.6c0-9.2-1.2-43.3-1.7-55.4s1.2-56,2.7-65.5\n                c1.5-9.5,0.2-47.6-0.9-51c-1.2-3.5-1.2-60.6,0-68.7c1.2-8.1,4-16.7,8.1-21.3c4-4.6,11.5,6.3,15.5,13.1c4,6.8,9.5,10.6,15.4,24.8\n                c5.4,13.1-3.1,27.8,3.7,48.7c3.7,11.3,1.2,65.8,1.2,82.5v95.8c0,14.4,4.2,167,5.4,190.1c1.2,23.1,0,152.3-0.1,161.9\n                c-0.1,9.6,4.1,94.3,1.2,112.8c-1.7,11.2-4.1,33-2.8,49.1h3.2h18.8c0.1-9.3-1-20.2-1-28.9V710c0-23.4-6.9-90-4.3-117.7\n                c0.8-9,0.6-31.2,0-58.6c-1.3-56.6-4.2-135.2-2.5-164.4c2.6-43.3,3.5-96.1,2.6-113.4c-0.9-17.3-8.7-55.4-5.2-72.7\n                c3.5-17.3,2.1-15.7,2.2-24.5c0.1-11.8-4.8-21.3-0.5-35.2c0.7-2.2,1.3-4.2,1.9-6.1c-0.1,6.7-0.6,12.7,0.3,17.4\n                c0.9,4.9-0.9,8.8,2.3,10.1c3.3,1.3,3.9-6.6,3.3-11.8c-0.7-5.2,1.3-7.9,5.2-9.8c3.9-2,7.8,13.1,9.8,19c2,5.9,9.2,25.5,15.9,43.2\n                c6.7,17.6,13,57,16.9,78.6c3.9,21.6,0.7,60.3,0,74c-0.7,13.8,1.3,78,0.3,89.6c-0.6,7.6,0.3,23.7,0,37.2c-0.1,4.3-0.3,8.2-0.7,11.6\n                c-0.3,2.2-0.6,4.1-1,5.7c-1.5,5.4-1.6,11.3-0.2,16.5c1,3.6,2.7,6.8,5.2,9.4c-0.3,5.6-0.6,9.6-1,11.5c-3,14.5,0.4,89.6-0.4,117.4\n                c-0.8,27.8-5.1,99.7-6,123.9c0,0,0.6,20.8,0.6,25.3c0,4.5,1.7,23.6,3.3,26.2c1.7,2.6,8,5.2,8.7-0.2c0.7-5.4,0.2-11.4,0.3-15.6\n                c0.2-11.7,3.9-100,6.5-128.5c1.1-12.4,1.8-41.6,2-73.2c0.1-13.5,0.1-27.5,0.1-40.7c0-16-0.1-30.9-0.3-42.8\n                c5.5-4.6,6.3-18.1,6.8-24.5c0.6-8.5,0.6-91.7,1.3-101.6c0.1-1.6,0.1-5.4,0.1-10.5c-0.1-26.4-1.4-90.3-1.4-96.3\n                c0-7.2,1.3-33.4,3.9-40c2.6-6.6,5.9-3.2,7.9-9.8c2-6.6-3.3-9.8,2-14.4c0.8-0.7,1.6-1.1,2.5-1.3c0.7,8.9,1.7,24.1,0.8,28.8\n                c-1.3,6.8-3.1,11.7-3.1,21.6s1.8,23.8,1.4,33.7c-0.5,9.9-1.4,19.3-1.8,27c-0.4,7.6,0.5,13,0.5,22s-2.2,26.1-2.7,31\n                c-0.4,4.9,2.2,18,2.2,23.8c0,5.8,2.6,16.6,1.7,27.8c-0.9,11.2,3.4,8.8,4,3.1c0.7-5.6,0.6-38.6,0.1-44.9c-0.5-6.3-1.4-19.3-1.4-19.3\n                s1.4-27.4,1.8-33.7c0.4-6.3,4-9,4-15.7s-1.4-13.5-1.4-17.5c0-4-0.4-5.8-0.4-12.6s-0.5-9.9-0.5-16.2s1.8-6.7,1.3-13.5\n                c-0.5-6.7,1.3-35.1,1.3-35.1c0.2-2.5,0.5-5,0.8-7.4c1.3,1,2.6,2.4,3.8,3.9c0.6,3.4,1.2,6,1.2,9.4c0,4.9-0.9,18.9-1.8,24.3\n                s3.2,12.6,1.8,18c-1.3,5.4-0.5,13.9,1.8,13.9c2.2,0,1.8-6.7,2.7-9.9c0.9-3.1,1.4-8.1,0-14.4c-1.3-6.3-1.8-18.4-1.3-21.6\n                c0.2-1.7,1-5.4,1.5-9.1c5,12.5,9.1,30.8,7.8,38.9c-1.3,8.5,2,62.9,2.1,77.4c0.2,14.5,3.8,43.1,4.4,65.4c0.7,22.3-3.9,56.4-3.3,77.3\n                c0.7,21-2,146.8-2.6,162.5c-0.7,15.7-6.6,75.3,13.5,74.8c20.1-0.6,13.3-52.5,13.3-57.1c0-4.6-3.9-61.6-3.9-79.9\n                c0-18.3,3.3-61.6,4.6-82.6c1.3-21,3.9-32.1,7.2-50.5c3.3-18.3-6.5-49.2-7.2-59c-0.7-9.8-2.6-119.3-2.6-129.1c0-9.7,0-24.5,3.2-33.7\n                c0.1,3.7,0.3,6.7,0.5,8.8c2,20.2,0.9,70.1,1.4,80.6c0.5,10.6,3.7,64.8,4.8,72.4c1,7.7-0.9,7.7,3.5,16.3c4.4,8.6,8.1-2.9,4.7-20.2\n                c-3.5-17.2-2.1-29.3-2.2-46.1c-0.1-16.8-0.5-77.3-2.6-107.5c-0.3-4.3-0.5-10.1-0.6-17c2.1-0.9,4.8-1.9,8.5-3.1\n                c14.4-4.6,13.6,13.3,14.9,23.8c1.3,10.5,3.9,31.4,4,40.2c0.1,8.8,7.1,34.5,7.8,45.1c0.5,8.5-5.2,29.4,0.9,34.8\n                c1.5,1.3,3.8,1.7,7,0.6c3-0.9,4.8-3.5,5.9-7c2.3-7.4,1.1-19.4-0.8-31c-0.3-1.6-0.5-3.1-0.8-4.6c-2.2-11.5-4.8-22-5-26.3\n                c-0.7-11.1-1.1-43.7-5.7-55.5c-4.6-11.8-4.9-43.6-5.2-53.4c-0.3-9.8-0.2-25.4,6.3-39.9c6.5-14.4,1.3-36-0.5-49.2\n                c-1.8-13.1,7-32.5,8.4-34.7c2.1-3.4,4.1-6.4,6.1-9.1c-0.4,9.1-1.1,19.6-2.1,27c-1.8,13.9-3,87.5-3.4,104.7\n                c-0.4,17.3-0.3,28.3-0.2,44.1c0.1,15.8,1.7,42.2,2.7,56.6c1,14.4,0.6,23,1.6,33.6c1,10.6-3.3,13.5,1.1,16.3\n                c4.3,2.8,6.7-10.6,7.1-21.2c0.4-10.6-1.6-34.1-0.8-49.9c0.9-15.8-2.3-67.6-1.9-75.8c0.4-8.2,7.2-99.5,6.2-110\n                c-0.7-7.6,1.2-28,2.3-41.5c3.4-2.7,7.3-4.3,10.4-4.3c0.5,0,1.1,0,1.9,0.1c1.1,6.5,3.1,9.2,3.5,14.4c0.5,7.7-4.2,21.1-3.2,32.7\n                c1,11.5,5.4,24.9,5.5,34c0.1,9.1-4.9,84.6-4.4,95.6c0.6,11,1.7,41.3,1.7,41.3c0.8,50.9,1.6,101.7,2.4,152.6c0,0-0.9,14.9,5.4,14.8\n                c6.2,0,4.7-16.3,4.7-16.3c-0.7-41.1-1.5-82.2-2.2-123.3c0,0,2.4-8.2,4.2-13.5c1.9-5.3,1.7-29.3,2.1-43.7c0.4-14.4,1.5-98,2.9-106.7\n                c1.4-8.6-4.4-18.2,1.8-20.6c6.2-2.4,5.9,19.2,6.9,25.4s-2.6,76.4-2.5,79.8c0,3.4-2.3,12,3,13.4c5.3,1.4,6.2-11.6,6.2-11.6\n                s3.9-86.5,3.4-93.7c-0.5-7.2,5.1-19.7,8.5-19.2c3.4,0.4,0.6,18.7,2.1,28.3c1.5,9.6-2.9,94.7-1.9,111.4c1.1,16.8-1.1,60-1.5,72\n                c-0.4,12-0.4,20.2,4.4,20.6c4.8,0.4,3.2-26.4,3.1-35.5c0-9.1-1.2-37.9-1.7-48.5c-0.5-10.6,1.7-38.4,4-47.1\n                c2.3-8.7,13.2-70.7,17-77.5s12.3-32.2,16.1-33.2c3.8-1,3.5,24.9,3.5,28.8c0,3.8-7.9,63.5-7.4,66.8c0.5,3.4,0.1,15.4,0.1,20.6\n                c0,5.3-3.7,29.8-1.7,35c2,5.3-0.5,6.7,5.8,8.1s3.2-18.7,3.7-28.3c0.4-9.6,7.8-76,8.8-84.1c0.9-8.2,0.2-39.8,1.1-49.9\n                c0.4-20.2,4.4-21.8,7.7-21.5c3.3,0.4,3.6,5.7,4.1,14.2c0.9,17.4,1,45.7,0.1,54.7c-1.4,13.4,0,110,2,121.5c2,11.5,2.1,25.9,2.6,34.5\n                c0.5,8.6-1.8,14.4,4.4,18.2c6.3,3.8,5.2-9.6,4.7-15.9c-0.5-6.2-3-14.9-4-25.9c-1-11-1.7-41.7-3.2-56.1C0.1,185.6,4.4,76,4.3,61.6\n                c-0.1-14.4-2.1-23.5,7-28.4c9.1-4.8,18.3,9.5,19.3,22.4c1,13,1.7,46.1,0.9,67.7c-0.8,21.6-2.3,120.1-4.6,135\n                c-2.3,14.9,0.7,37.9,0.8,56.1c0.1,18.2,2.9,90.7,2.1,106.5c-0.9,15.8,1.3,64.7,1.3,72.9s-0.9,18.2,4,27.3c4.9,9.1,8.6-3.9,5.7-13.5\n                c-2.9-9.6,2.3-24.9,0.8-39.8c-1.5-14.9-1.7-49.9-3.2-62.4c-1.5-12.5,1.5-73-0.5-90.7c-2-17.8-2.1-37.9-0.8-50.9\n                c1.4-13,1.5-63.8,1-78.7c-0.4-11,2.1-76.8,3.4-113.6c2.8,8.3,5.8,15.8,7.2,22.1c3.1,13.6-2.3,89.4-0.8,102.4c1.6,13-0.8,47.1,0,56\n                c0.8,8.9,2.3,17.7,7,17.7c4.7,0,3.9-34.8,4.7-45c0.8-10.2,12.5-13.6,21.8-7.5c9.4,6.1,7.8,58,7.8,67.6c0,9.6,3.1,34.8,10.1,34.8\n                c7,0,5.5-25.9,7.8-34.1c2.3-8.2,7,1.4,7.8,3.4c0.8,2-1.6,22.5-2.3,27.3c-0.8,4.8,0.8,14.3,0,22.5c-0.1,0.8-0.1,1.5-0.2,2.2\n                c-0.4,6.1,0.4,11.2,3.7,12.9c0.6,0.3,1.2,0.5,1.9,0.6c5.5,0.7,2.3-15.7,5.5-17.7c3.1-2,3.1,13.6,7,13.6c3.9,0,2.3-18.4,2.3-18.4\n                s-3.9-68.9-3.1-105.1c0.7-32.6,5.2-82.8,7.8-104.5c0.6,0.5,1.1,1.3,1.5,2.3c1.1,2.7,1.6,10,2.2,13.3c0.6,3.3,1,7.1,1.7,10.8\n                c0.6,3.7-0.6,16.8-0.1,18.6c0.5,1.8-0.5,14.8-0.7,16.5c-0.2,1.7-0.6,22-0.5,23.4c0,1.4-0.3,17.7,4.2,16.7c2.8-0.6,2.6-11,2.2-12.5\n                c-0.4-1.5-0.4-21.6-0.6-23.8c-0.2-2.3,0.8-26.8,1.6-29.3c0.8-2.5-1-24.3-1-26.5c-0.1-2.2,1.1-5.5,2.1-6.3c1-0.8,1.5,5.4,1.5,7.7\n                s0.2,35.1,0.2,38.2c0,3.1,0.6,46.7,0.6,48.8c0,2.1-0.6,24.5-0.8,34.9c-0.1,10.4,0.8,59.8,0.6,67.1c-0.2,7.3,0.4,39.1,1.2,45.1\n                c0.8,6,3.9,57.5,4.2,67.9c0.1,5.2,0.2,9.9,0.2,13.8c0.8-0.3,1.7-0.6,2.5-0.9c0.9-0.3,1.7-0.6,2.6-0.9c-0.2-2.1-0.3-3.5-0.3-3.9\n                c-0.3-2.4-1-48.6-1.6-69.9c-0.1-4-0.2-7.2-0.4-8.9c-0.7-11.1-1.6-46.7-2-53.3c-0.4-6.6,1-45.1,1.5-49.4c0.5-4.3,1.8-24.6,2-29\n                c0.2-4.4-2.5-43.2-2.3-48c0.2-4.8-1.7-50.1-1.7-54.4c0-4.4,2.3-8.1,2.9-9.1c0.6-1,3.1-5,4.8-10.4c1.7-5.4,6.6-6.6,8.5-8.9\n                c1.9-2.3,5.6-7.7,6.4-9.6c0.8-1.9,3.5-4.8,4.6-6.4c1-1.7,2.3,3.1,2,8.3c-0.3,5.2,0.9,12,0.9,17.4c0,5.4,0.4,14.1,0,18.7\n                c-0.4,4.6-2.5,22-2.5,24.3c0,2.3,1.5,6.4,1.9,10.6c0.4,4.2,0.1,85.1,0.2,87.6c0.1,2.5-0.3,7.2,0.2,9.1c0.4,1.9,0.8,6,0.8,7.9\n                c0,1.9-1,13.7-1.1,16.3c0,2.6-0.2,8.2-0.4,10.2c-0.3,1.9-0.2,10.3-0.8,12c-0.6,1.7-0.2,6.9,0.2,8.1c0.4,1.3-1,9.2,2.1,10.2\n                c2.1,0.6,3.1-1.5,3.5-3.5c0.4-2.1,0.4-14.4,0.9-16.4c0.5-2,0.5-13.8,0.3-16.9c-0.2-3.1,0.2-21,0.4-23.1c0.2-2.1-0.3-96.1-0.3-99\n                c0-2.9-1-20.1-1.2-22.8c-0.2-2.7,1.2-22.4,1.7-25c0.4-2.6,0-18,0.4-20.5c0.4-2.5-0.2-6,0.6-8.7c0.8-2.7,1-5.8,1-8.3\n                c0-0.6,0-1.3,0-2.1c2-0.3,4.1-0.4,6.2-0.4c0.5,0,1.1,0,1.6,0c-0.1,1.2-0.2,2.2-0.3,2.9c-0.4,3.1,0.4,14.1,0.2,17.4\n                c-0.2,3.3,0,22.2-0.1,24.1c-0.1,1.9,0.1,18.9,0.9,23.7c0.8,4.8-0.5,97.3-0.7,100.2c-0.2,2.9-1,19.3-1.2,22c-0.2,2.7,0.6,9.3,0.8,12\n                c0.2,2.7,0.4,15,0.2,16.6s0.2,3.3,1.9,3.1c1.7-0.2,3.9-15.8,3-19.1c-1-3.3,0.5-18.3,0.7-21.6c0.1-3.3,0.8-94.6,0.8-98\n                c0-3.3-0.4-15.6-0.6-19.9c-0.2-4.4,0.4-20.1,1-23.6c0.5-3.4,0.1-17.1-0.3-18.4c-0.3-1-0.4-14-0.2-20.8c5,1,9.8,2.7,14.8,4\n                c0.7,4.2-1.3,9.1,0.8,15.6c1.3,4.1,0.4,23.7,0.4,29.7v34.5c0,5.2,1.5,60.1,1.9,68.4c0.4,8.3,0,54.8,0,58.3c0,3.4,1.5,33.9,0.4,40.6\n                c-1,6.6-2.7,23.7,2,24.8c6.8,1.6,4.5-10.1,4.5-17.6v-43.9c0-8.4-2.5-32.4-1.6-42.4c0.9-10-1.8-64.7-0.9-80.3\n                c0.9-15.6,1.2-34.6,0.9-40.8c-0.3-6.2-3.1-19.9-1.9-26.2c1.2-6.2,0.8-5.7,0.8-8.8c0-3.6-1.2-6.6-0.7-10.5c3.3,0.5,6.7,0.5,10-0.4\n                c2.1-0.5,3.9-1.5,5.9-2.3c2.8-1.2,2.6-2,3.3,0.7c0.7,2.8,1.7,5.5,3.2,7.8c0,1.6-0.1,2.8-0.1,3.3c0,2.5,0.8,23,0.7,34.7\n                c-0.1,11.7-1.7,28.8-1,34.7c0.6,5.9,0.5,56.8-0.5,62c-1.1,5.2,0.1,32.2-0.1,42.2c-0.3,10-1.9,35.9-2.2,44.6c0,0,0.2,7.5,0.2,9.1\n                c0,1.6,0.6,8.5,1.2,9.4c0.6,0.9,2.9,1.9,3.1-0.1c0.3-2,0.1-4.1,0.1-5.6c0.1-4.2,1.4-36,2.3-46.3c0.9-10.3,0.9-52.8,0.5-63.6\n                c-0.5-10.7,0.5-53.2,1.9-63.4c1.4-10.3,0-26.2-0.5-36.5c-0.2-3.8,0.2-10.7,0.7-17.9c1,0.7,2.1,1.3,3.2,1.9c1.7,0.8,3.9,1.5,6.2,2\n                c0.1,7.2,0.3,13.2,0.9,15.8c1.7,7.7,0.8,26.8,1.2,30.8c0.5,4,3.2,24.7,4,27.7c0.9,2.9-0.8,2.9,2.9,6.2c3.7,3.3,6.9-1.1,4-7.7\n                c-2.9-6.6-1.8-11.2-1.9-17.6c-0.1-6.4-0.4-29.5-2.2-41c-0.5-3-0.6-8-0.6-13.9c2.3-0.4,4.4-1.3,6-2.9c2.3-2.3,2-6.3,3.3-9.1\n                c1-2.1,1.8-3.7,3.1-1.3c1.7,3,0.2,7.6-0.3,10.7c-0.6,4.3-0.9,8.6,0.8,12.8c3.3,8.2,12.8,9,17.9,2c6.2-8.3,1.5-18.7,3.5-27.9\n                c0.8-3.5,3-5.8,5.7-6.9c-0.3,6.8-0.6,13-0.7,15.6c-0.3,6.6-0.3,10.8-0.2,16.9c0.1,6,1.4,16.1,2.3,21.6c0.9,5.5,0.5,8.8,1.4,12.8\n                c0.9,4-2.8,5.1,0.9,6.2c3.7,1.1,5.6-4,6-8.1c0.4-4-1.4-13-0.7-19.1c0.7-6-2-25.8-1.6-28.9c0.1-1.3,1.2-7.6,2.3-15.1\n                c1.1,1.1,1.9,2.4,2.4,4.2c1.2,3.8,5.3,5.4,8.8,3.6c4.6-2.4,6.9-7.2,6.8-12.1c0.4,0.3,0.8,0.5,1.2,0.7c-1.2,9.9-3,23.9-2.7,26.7\n                c0.5,4.2,1.4,15.8,1.4,15.8c0.7,19.4,1.3,38.8,2,58.3c0,0-0.7,5.7,4.6,5.7c5.3,0,4-6.2,4-6.2c-0.6-15.7-1.2-31.4-1.8-47.1\n                c0,0,2-3.1,3.6-5.1c1.6-2,1.5-11.2,1.8-16.7c0.2-3.7,0.7-19.7,1.4-30.5c2.4-0.8,4.8-1.8,7.3-2.6c0.4-0.1,0.7-0.2,1.1-0.3\n                c-0.5,8.6-2.2,24-2.2,24.9c0,1.3-2,4.6,2.5,5.1c4.5,0.5,5.2-4.4,5.2-4.4s1.3-13.2,2.2-23.6c1.4,1,2.8,2.2,4.5,3.2\n                c1.7,1,3.3,1.7,5,2.1c-0.7,10.9-1.9,24.7-1.4,28.6c0.9,6.4-0.9,22.9-1.3,27.5c-0.3,4.6-0.3,7.7,3.8,7.9c4.1,0.2,2.7-10.1,2.7-13.6\n                c0-3.5-1-14.5-1.5-18.5c-0.5-4,1.4-14.7,3.4-18c0.3-0.5,0.8-1.4,1.3-2.7c1.2,1.3,2.6,2.3,4.5,2.9c4,1.1,8-0.4,10.7-3.4\n                c1.2-1.3,2-2.8,2.8-4.4c2.3-0.5,4.5-1.5,6.5-3.1c-0.7,2.7-1.1,4.6-1,5c0.4,1.3,0.1,5.9,0.1,7.9c0,2-3.1,11.4-1.4,13.4\n                c1.7,2-0.4,2.6,4.9,3.1c5.3,0.5,2.8-7.2,3.1-10.8c0.2-1.7,1.6-8.1,3.2-14.8c4.8,1.5,10,0.2,13.6-3.8c0.4-0.5,0.8-0.9,1.1-1.5\n                c0.1,12.8,1,30.5,2.2,33.4c1.7,4.4,1.8,9.9,2.2,13.2c0.5,3.3-1.6,5.5,3.8,7c5.3,1.5,4.4-3.7,4-6.1c-0.4-2.4-2.5-5.7-3.4-9.9\n                c-0.9-4.2-1.4-15.9-2.7-21.4c-0.4-1.9-0.3-8,0.1-15.5c0.7,1.5,1.1,3.5,2,4.7c1.1,1.6,2.6,3,4.2,4c3.4,2.1,7.5,2.9,11.3,2.3\n                c0.3,6.1,0.5,11.6,0.3,16c-0.6,17.2-5,14.9-1.6,30.3c3.5,15.4,1.5,53.5,2.4,61.6c0.9,8.1,6.4,49.5,8.1,55.3\n                c1.7,5.9-1.6,5.9,5.9,12.4c7.4,6.6,13.8-2.2,7.9-15.4c-5.9-13.2-3.6-22.3-3.7-35.2c-0.2-12.8-0.8-59-4.3-82.1\n                c-3.6-23.1,3.9-42.5,6.3-48.4c1.3-3.2,4.7-5.2,8.3-6.8c0.3,0.4,0.7,0.8,1.1,1.2c3.2,3.2,7.5,5.1,11.9,5.8c3.6,0.5,6.6-0.4,9.7-1.2\n                c0.2,0.6,0.5,1.2,0.5,1.6c0.3,2.3,0.1,4.6-0.5,6.8c-1.1,4.1-3.4,7.5-3,11.9c0.2,2.2,1.1,4.2,2.3,6.1c0.7,1.1,2.3,2.3,2.6,3.6\n                c0.6,2.7-2.2,7.1-2.9,9.7c-1.1,4.1-1,8.2,0.4,12.2c1.7,4.5,2.6,8.1,2.5,13c-0.2,10.8-0.4,21.6-0.6,32.4c-0.2,9.6,14.8,9.6,15,0\n                l0.5-23.8c0.1-7,1.1-14.7-1.2-21.4c-0.9-2.6-2.5-5-2.3-7.8c0.2-2.7,1.9-5.4,2.6-7.9c1.1-3.9,1.1-7.6,0-11c0.9-0.1,1.9-0.4,2.7-0.9\n                c3.2-1.7,5.3-4.7,6.1-8.2c0.4-1.8,0.4-3.5,0.5-5.3c0.1-0.5,0.1-1,0-1.5c0.1-0.2,0.1-0.4,0.2-0.5c1.8-0.8,3.6-1.1,5.4-1.6\n                c5,3.3,11.3,6.2,16.4,9.2c7.4,4.4,6.6,0,6,13.2c-0.6,13.2-0.5,21.6-0.4,33.7c0.2,12.1,2.9,32.2,4.6,43.2c1.8,11,1.1,17.6,2.8,25.6\n                c1.7,8.1-5.6,10.3,1.8,12.5c7.4,2.2,11.3-8.1,12-16.2c0.7-8.1-2.8-26-1.3-38.1c1.5-12.1-3.9-51.7-3.2-57.9c0.2-1.5,0.3-3.3,0.5-5.3\n                c0.6,0.3,1.1,0.6,1.7,0.9c8.6,3.9,24.9,5.5,27.7-6.7c0-0.1,0-0.2,0-0.2c2.1,4.6,4,8.9,4.1,12.4c0.1,7-8.3,64.6-7.4,73\n                c0.9,8.4,2.9,31.5,2.9,31.5c0.6,18.6,1.3,37.1,1.9,55.7c1.8,1,3.8,1.7,6.1,2c5,0.6,8.5-1.1,10.7-4c-0.4-10.8-0.8-21.6-1.3-32.4\n                c0,0,4-6.2,7.2-10.3c3.2-4,3-22.4,3.6-33.4c0.7-11,2.5-74.8,4.8-81.5c2.4-6.6-7.5-13.9,3-15.8c10.6-1.9,10,14.6,11.7,19.4\n                c1.7,4.8-4.3,58.4-4.3,60.9c0,2.6-3.9,9.2,5,10.2c9,1.1,10.5-8.8,10.5-8.8s6.7-66.1,5.8-71.6c-0.9-5.5,8.6-15,14.5-14.7\n                c5.8,0.3,1,14.3,3.5,21.6c2.5,7.3-5,72.3-3.2,85.1c1.8,12.8-1.8,45.8-2.5,55c-0.7,9.2-0.6,15.4,7.5,15.7c8.1,0.3,5.4-20.2,5.3-27.1\n                c-0.1-7-2-28.9-2.9-37c-0.9-8.1,2.9-29.3,6.8-35.9c4-6.6,22.3-54,28.7-59.2c6.4-5.1,20.8-24.6,27.3-25.4c6.5-0.8,6,19,6,22\n                c0,2.9-13.4,48.5-12.6,51.1c0.8,2.6,0.2,11.7,0.2,15.8c0.1,4-6.2,22.7-2.9,26.8c3.3,4-0.7,5.1,9.8,6.2s5.5-14.3,6.2-21.6\n                c0.7-7.3,13.3-58,14.8-64.3c1.5-6.2,0.4-30.4,1.9-38.1c0.6-15.4,7.4-16.7,13-16.4c5.6,0.3,6.2,4.4,6.9,10.8\n                c1.5,13.3,1.7,34.9,0.1,41.8c-2.3,10.3,0.1,84,3.4,92.8c3.4,8.8,3.5,19.8,4.4,26.4c0.9,6.6-3.1,11,7.5,13.9c10.6,2.9,8.9-7.4,8-12.1\n                c-0.9-4.8-5-11.3-6.8-19.8c-1.7-8.4-2.9-31.9-5.5-42.9c-2.6-11,4.7-94.6,4.5-105.6c-0.1-11-3.5-17.9,11.9-21.7\n                c15.4-3.7,31,7.2,32.8,17.1c1.8,9.9,2.9,35.2,1.5,51.7c-1.4,16.5,1.1,51.7-2.8,63c-3.9,11.4,1.2,28.9,1.4,42.9\n                c0.1,5,0.7,15.4,1.5,27.3c3.6,3,7.8,4.4,11.8,2.5c2.6-1.2,4.1-3.7,5-6.8c0.2-9.6,0-18.1-1.2-22.7c-3.4-13.6-3.6-28.9-1.3-38.8\n                c2.3-9.9-2.4-8.7-3.4-20.1c-1-11.4,7.1-98.7,7-105.3c-0.1-6.6,6.9-32,6.8-38.6c0-1.9,0.6-4.1,1.7-6.4c1.3,0.2,2.7,0,3.8-0.7\n                c1-0.6,1.8-1.3,2.5-2.1c0.1,9.2-0.1,16.9-0.1,20c0,9.6,2.7,34.8,8.9,34.8c6.1,0,4.8-25.9,6.8-34.1c2-8.2,6.1,1.4,6.8,3.4\n                c0.7,2-1.4,22.5-2,27.3c-0.7,4.8,0.7,14.3,0,22.5c-0.7,8.2,0,15,4.8,15.7c4.8,0.7,2-15.7,4.8-17.7c2.7-2,2.7,13.6,6.1,13.6\n                c3.4,0,2-18.4,2-18.4s-1.2-23.3-2-49.9c1.6,0.1,3.2-0.5,4.7-1.6c4.6-3.6,6.2-9.1,7-14.7c0.4-3,0.6-12.1,5-12.1\n                c0.3,1.6,0.5,3.3,0.9,4.8c0.6,2.8,1.7,5.5,3.2,7.9c0.5,7.4,0.9,14.3,0.7,18.2c-0.5,10.3-1.9,26.2-0.5,36.5\n                c1.4,10.3,2.4,52.7,1.9,63.4c-0.5,10.7-0.5,53.3,0.5,63.6c0.9,10.3,2.3,42.1,2.3,46.3c0,1.5-0.1,3.7,0.1,5.6c0.3,2,2.6,1,3.1,0.1\n                c0.6-0.9,1.2-7.8,1.2-9.4c0-1.6,0.2-9.1,0.2-9.1c-0.3-8.7-1.9-34.6-2.2-44.6c-0.3-10,0.9-37-0.1-42.2c-1.1-5.2-1.2-56-0.5-62\n                c0.6-5.9-0.9-23.1-1-34.7c-0.1-7.2,0.2-17.7,0.5-25.3c6,3.5,13.9,2.6,17.6-4.3c2-3.8,2-8.3,1.5-12.4c-0.1-1-0.6-3.4-0.5-5.4\n                c0,0,0,0,0.1-0.1c0.9-0.1,1.8-0.3,2.7-0.5c0.2,0.7,0.4,1.4,0.7,2.2c1.6,5-0.2,8.4-0.2,12.7c0,3.2-0.5,2.6,0.8,8.8\n                c1.2,6.2-1.6,19.9-1.9,26.2c-0.3,6.2,0,25.2,0.9,40.8c0.9,15.6-1.8,70.3-0.9,80.3c0.9,10-1.6,34-1.6,42.4v43.9\n                c0,7.5-2.2,19.2,4.5,17.6c4.7-1.1,3-18.2,2-24.8c-1-6.6,0.5-37.1,0.4-40.6c0-3.4-0.4-50,0-58.3c0.4-8.3,1.9-63.2,1.9-68.4V58.9\n                c0-6-0.9-25.6,0.4-29.7c1.9-5.8,0.5-10.2,0.7-14.1c0.8,1.2,2.1,2.2,3.4,2.6c3,0.8,6.1,0.2,8.3-2.1c0.5-0.6,1.7-2.1,2.6-3.7\n                c0.3,0.9,0.5,1.9,0.8,2.9c0.1,6.8,0,14.9-0.3,15.7c-0.4,1.2-0.9,14.9-0.3,18.4c0.5,3.4,1.2,19.2,1,23.6c-0.2,4.4-0.6,16.6-0.6,19.9\n                c0,3.3,0.7,94.7,0.8,98c0.1,3.3,1.6,18.3,0.7,21.6c-1,3.3,1.3,18.9,3,19.1c1.7,0.2,2.1-1.5,1.9-3.1c-0.2-1.7,0-13.9,0.2-16.6\n                c0.2-2.7,1-9.3,0.8-12c-0.2-2.7-1-19.1-1.2-22c-0.2-2.9-1.5-95.4-0.7-100.2c0.8-4.8,1-21.8,0.9-23.7c-0.1-1.3,0-10.9,0-17.7\n                c2.6,2.8,7.4,1.6,9.4-1.8c0,5.5-0.1,13.2,0.2,15c0.4,2.6,1.9,22.3,1.7,25c-0.2,2.7-1.2,19.9-1.2,22.8c0,2.9-0.5,96.9-0.3,99\n                c0.2,2.1,0.6,19.9,0.4,23.1c-0.2,3.1-0.2,14.9,0.3,16.9c0.5,2,0.5,14.3,0.9,16.4c0.4,2.1,1.4,4.2,3.5,3.5c3.1-1,1.7-8.9,2.1-10.2\n                c0.4-1.3,0.8-6.5,0.2-8.1c-0.6-1.7-0.5-10.1-0.8-12c-0.3-1.9-0.4-7.6-0.4-10.2c0-2.6-1.1-14.4-1.1-16.3c0-1.9,0.4-6,0.8-7.9\n                c0.4-1.9,0.1-6.6,0.2-9.1c0.1-2.5-0.2-83.4,0.2-87.6c0.4-4.2,1.9-8.3,1.9-10.6c0-2.3-2.1-19.7-2.5-24.3c-0.4-4.6,0-13.3,0-18.7\n                c0-5.4,1.1-12.3,0.9-17.4c-0.3-5.2,1-10,2-8.3c1,1.7,3.7,4.6,4.6,6.4c0.8,1.9,4.6,7.3,6.4,9.6c1.9,2.3,6.9,3.5,8.5,8.9\n                c1.7,5.4,4.2,9.3,4.8,10.4c0.6,1,2.9,4.8,2.9,9.1c0,4.4-1.9,49.6-1.7,54.4c0.2,4.8-2.5,43.6-2.3,48c0.2,4.4,1.5,24.7,2,29\n                c0.5,4.3,1.9,42.7,1.5,49.4c-0.4,6.6-1.3,42.2-2,53.3c-0.7,11.1-1.6,75.9-2,78.8c-0.1,0.4-0.2,1.8-0.3,3.9c1.7,0.6,3.4,1.2,5.1,1.8\n                c0-4,0.1-8.6,0.2-13.8c0.2-10.4,3.3-61.9,4.2-67.9c0.8-6,1.5-37.8,1.2-45.1c-0.2-7.3,0.7-56.7,0.6-67.1c-0.1-10.4-0.8-32.8-0.8-34.9\n                c0-2.1,0.6-45.7,0.6-48.8c0-3.1,0.2-35.9,0.2-38.2s0.4-8.5,1.5-7.7c1,0.8,2.2,4.1,2.1,6.3c-0.1,2.2-1.8,23.9-1,26.5\n                c0.8,2.5,1.8,27,1.6,29.3c-0.2,2.3-0.2,22.3-0.6,23.8c-0.4,1.5-0.6,11.9,2.2,12.5c4.5,1,4.1-15.3,4.2-16.7c0-1.4-0.3-21.7-0.5-23.4\n                c-0.2-1.7-1.3-14.7-0.7-16.5c0.5-1.8-0.7-14.9-0.1-18.6c0.6-3.7,1-7.5,1.7-10.8c0.6-3.3,1.2-10.7,2.2-13.3c1.1-2.7,2.5-3.3,5-3.7\n                c1.2-0.2,3.4-0.7,5.5-0.4c-0.3,1-0.7,2.1-1.1,3.4c-3.9,12.5,0.6,48,0.1,65.2c-0.6,17.2-3,95,0.4,110.4c3.5,15.4,1.5,53.5,2.4,61.6\n                c0.9,8.1,6.4,49.5,8.1,55.3c1.7,5.9-1.6,5.9,5.9,12.4c7.4,6.6,13.8-2.2,7.9-15.4c-5.9-13.2-3.6-22.3-3.7-35.2\n                c-0.2-12.8-0.8-59-4.3-82.1c-3.6-23.1,2.1-104.2,2.7-117.7c0.6-13.6-0.8-60.5,1.6-66.3c2.4-5.9,12.1-7.7,16.9-10.7\n                c4.8-2.9,2.4-6.2,10.5-4.4c8.2,1.8,9,6.9,14.8,8.8c5.7,1.8,9,2.5,13.9,8c5,5.5,14.8,9.5,22.2,13.9c7.4,4.4,5,7.3,5,12.4\n                c0.1,5.1-1.3,23.8-4.4,34.5c-3.1,10.6-5,66.8-5.7,80c-0.6,13.2-0.5,21.6-0.4,33.7c0.2,12.1,2.9,32.2,4.6,43.2\n                c1.8,11,1.1,17.6,2.8,25.6c1.7,8.1-5.6,10.3,1.8,12.5c7.4,2.2,11.3-8.1,12-16.2c0.7-8.1-2.8-26-1.3-38.1c1.5-12.1-3.9-51.7-3.2-57.9\n                c0.7-6.2,12.2-76,10.5-84c-1.7-8.1,5.2-34.8,5.2-40.3c-0.1-5.5,3.9-14.7,4.6-20.9c0.7-6.2,6.4-7.7,12.9-8.5\n                c6.5-0.8,2.6,11.7,1.1,24.9c-1.5,13.2,5.9,15,6.8,20.9c0.9,5.9-7.1,16.1-5.4,24.9c1.7,8.8,9.2,19,9.3,26c0.1,7-8.3,64.6-7.4,73\n                c0.9,8.4,2.9,31.5,2.9,31.5c1.3,38.8,2.7,77.7,4,116.5c0,0-1.5,11.4,9.1,11.3c10.6,0,8-12.5,8-12.5c-1.2-31.4-2.5-62.8-3.7-94.2\n                c0,0,4-6.2,7.2-10.3c3.2-4,3-22.4,3.6-33.4c0.7-11,2.5-74.8,4.8-81.5c2.4-6.6-7.5-13.9,3-15.8c10.6-1.9,10,14.6,11.7,19.4\n                c1.7,4.8-4.3,58.4-4.3,60.9c0,2.6-3.9,9.2,5,10.2c9,1.1,10.5-8.8,10.5-8.8s6.7-66.1,5.8-71.6c-0.9-5.5,8.6-15,14.5-14.7\n                c5.8,0.3,1,14.3,3.5,21.6c2.5,7.3-5,72.3-3.2,85.1c1.8,12.8-1.8,45.8-2.5,55c-0.7,9.2-0.6,15.4,7.5,15.7c8.1,0.3,5.4-20.2,5.3-27.1\n                c-0.1-7-2-28.9-2.9-37c-0.9-8.1,2.9-29.3,6.8-35.9c4-6.6,22.3-54,28.7-59.2c1.9-1.5,4.6-4.3,7.5-7.6c1.6,12.6,4.3,21.9,8.1,21.9\n                c4.9,0,7-16.3,7.8-37.8c1.5-1.1,2.9-1.8,4-1.9c6.5-0.8,6,19,6,22c0,2.9-13.4,48.5-12.6,51.1c0.8,2.6,0.2,11.7,0.2,15.8\n                c0.1,4-6.2,22.7-2.9,26.8c3.3,4-0.7,5.1,9.8,6.2c10.6,1.1,5.5-14.3,6.2-21.6c0.7-7.3,13.3-58,14.8-64.3c1.5-6.2,0.4-30.4,1.9-38.1\n                c0.6-15.4,7.4-16.7,13-16.4c0.5,0,1,0.1,1.4,0.2c-0.6,44-0.8,93.2,1.4,111.1c4.1,32.9,13.7,149.6,15.1,222.4\n                c1.1,57.2-2.9,155-4.7,194.3c-0.5,10.7-0.8,17.1-0.8,17.1s-2,26.5,1.6,34.7c0.6,1.5,1.5,2.4,2.5,2.4c6.2,0,6.8-25.9,10.9-27.7\n                c0.4-0.2,0.9-0.1,1.4,0.3c5.5,4.1,0,37.1,9.6,35.7c9.6-1.4,11-15.1,9.6-31.6c-1.4-16.5,1.4-35.7,0-45.3c-1.4-9.6-5.5-50.8-4.1-54.9\n                c1-3,5.6-13.9,9.6-13.4c1.5,0.2,3,2,4.1,6.5c3.1,12.5,2.3,45.4,7.1,60.7c1.5,4.9,3.6,8,6.6,8c12.4,0,17.8-50.8,17.8-70\n                c0-16.5-2-95.7,7.8-125.6c1.5-4.6,3.3-8,5.5-9.9c0.1-0.1,0.3-0.3,0.4-0.4c5.5-4.2,11.6-6.1,17.2-6.1c11,0,20.4,7.6,21.3,21.2\n                c1.4,20.6,0,90.6,8.2,90.6c4.8,0,7.8-6.2,9.7-14.9c0.5-2.2,0.9-4.5,1.2-6.9c0.6-4.4,1.1-9.2,1.5-13.9c1.4-17.8-2.7-86.5,0-112.6\n                c2.7-26.1-6.9-178.5-1.4-205.9c2-9.9,5.6-21.2,9.4-33.5c1.7,21.7,5.9,57.8,5.8,69c0,5.9,2.6,129.1,5.5,271.4\n                c3.2,153.4,6.8,329,7.9,404.3h13.9c-0.7-32-1.3-67.2-2-103.9c-3.6-193.4-7.2-427.3-8-448.1c-1.4-35.2-0.2-89.3,1.4-110.4\n                c1.7-21.1,16.7-44.5,31.5-36.6c14.8,7.9,11.6,22.8,11.5,46.3c-0.1,9.4,2.2,122.4,4.7,255.8c2.7,142.9,5.7,309.2,6.7,396.8h5.3h3.2\n                c-0.3-195.3-3.2-535.7-4.8-551.6c-1.5-14.8-1.3-60.8,0.1-89.3c0.7-13.8,1.3-22.5,6.6-23.1c5.3-0.6,11.9,2.1,12.5,35\n                c1.5,16.5,0.4,68.1,1.9,81.4c0.5,4.5,3,74.6,6.1,166.4c4.2,123.6,9.5,286.4,12.6,381.2h15.1c-1.5-56.2-7.1-223.7-11.7-363.9\n                c-3.8-114.5-7-210.8-7-213.3c0-6.3-0.5-48.5,5.8-46.9c6.3,1.6,20.1,43.2,26.3,54.2c5.2,9.3,23.6,430.6,31.5,570h15.8\n                c-3.1-186.4-10.9-550.8-9-562.7c2.4-15.6-2.2-45.5,3.4-46.2c5.6-0.7,14.8,19.7,13.9,31.4c-0.7,9.4,7.9,417.8,11.3,577.5h15\n                c-3.1-153.6-11.3-549.6-10-557.8c1.6-10.2,1.1-45.4,11.2-41.4c10.2,4,0.7,19.6,2.9,33.7c1.7,10.9,7.4,384.3,10.2,565.5h30.2\n                c-3.5-168.4-13-555.1-12.9-566.9c0.1-14.9,7.3-36.8,8.9-55.5c1.7-18.8-6-40.8-5.2-53.3c0.9-12.5,7.9-16.4,6.5-44.6\n                c-1.4-28.2-5.2-54.8,1.1-53.2c6.3,1.6,11.7,4.8,12.4,18.1c0.7,13.3,4.5,32.9,4.4,44.7c-0.1,11.7,6.6,68.9,5,86.2\n                c-0.7,7.6,2.4,135,6.1,276.5c2.2,81.9,4.6,168.5,6.6,239.3c1,35.9,1.9,67.7,2.7,92.8c0.2,5.7,0.3,11.1,0.5,16.1h15.6v-53.2\n                c-0.8-53-2-123.9-3.2-197.7c-2.8-171.7-6.2-358.8-7.9-371.3c-3-22.7-4.3-62.7-4.3-73.6c0.1-11-2.2-17.2,4.9-26.6\n                c3.2-4.2,6.9-8.3,10.5-12.6V-3H-662.7z M941.9,21.7c-0.1-0.5-0.2-0.9-0.4-1.4c0.2-0.5,0.5-1,0.7-1.6C942.1,19.7,942,20.7,941.9,21.7\n                z"/></svg></div><img src="{{ slideshowImages[11].url }}" class="slimeshow-image"></div></div><!-- maximum row 3 --><div class="slimeshow-square"><div class="slimeshow-content"><img src="{{ slideshowImages[12].url }}" class="slimeshow-image"></div></div><div class="slimeshow-square"><div class="slimeshow-content"><img src="{{ slideshowImages[13].url }}" class="slimeshow-image"></div></div><div class="slimeshow-square"><div class="slimeshow-content"><img src="{{ slideshowImages[14].url }}" class="slimeshow-image"></div></div><div class="slimeshow-square"><div class="slimeshow-content"><img src="{{ slideshowImages[15].url }}" class="slimeshow-image"></div></div><div class="slimeshow-square"><div class="slimeshow-content"><img src="{{ slideshowImages[16].url }}" class="slimeshow-image"></div></div><div class="slimeshow-square"><div class="slimeshow-content"><img src="{{ slideshowImages[17].url }}" class="slimeshow-image"></div></div></div>'),
        $templateCache.put("slideshow-vertically-centered.template.html", '<div class="slideshow-vertically-centered"><div class="img-container"><img id="slideshow-vertically-centered-image-a" ng-src="{{ assetA.url }}"> <img id="slideshow-vertically-centered-image-b" ng-src="{{ assetB.url }}"></div></div>'), $templateCache.put("social-recap-missing.template.html", '<!-- including standard navigation header --><navigation solid="true"></navigation><div class="container trade-gothic-20" style="margin-top: 150px"><h1 class="text-center">We\'re sorry, no social recap has been found for this event.</h1><h2 class="text-center">Please <a href="/photos" style="text-decoration: underline">click here</a> to return to the galleries.</h2></div><!-- including standard footer --><ng-include src="\'footer.template.html\'"></ng-include>'), $templateCache.put("social-recap.template.html", '<div id="social-recap-navigation" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: 1000; pointer-events: none; overflow: hidden"><!-- Fixed Navigation --><ul id="navigation-bars" style="pointer-events: auto" class="fixed-navigation hidden-xs" ng-class="{\'dark-background\' : darkBackground == true, \'light-background\' : darkBackground == false }"><li><a href="#slide-1" ng-class="{\'active\' : slideIndex == 1}"></a></li><li><a href="#slide-2" ng-class="{\'active\' : slideIndex == 2}"></a></li><li><a href="#slide-3" ng-class="{\'active\' : slideIndex == 3}"></a></li><li><a href="#slide-4" ng-class="{\'active\' : slideIndex == 4}"></a></li><li><a href="#slide-5" ng-class="{\'active\' : slideIndex == 5}"></a></li><li><a href="#slide-6" ng-class="{\'active\' : slideIndex == 6}"></a></li></ul><!-- Logo --><div class="logo" style="pointer-events: auto" ng-class="{\'light-background\' : darkBackground == false }"><a ui-sref="main"><img id="social-recap-white-logo" src="https://s3.amazonaws.com/thebosco/angular-assets/images/white-logo.png" style="z-index: 1"></a><a ui-sref="main"><img id="social-recap-black-logo" src="https://s3.amazonaws.com/thebosco/angular-assets/images/black-logo.png"></a></div><!-- Gallery Button --><div class="gallery-button hidden-xs" style="pointer-events: auto"><a ui-sref="event({ eventSlug: analytics.slug })"><button class="btn btn-default bosco-button-transparent" ng-class="{\'light-background\' : darkBackground == false }"><h4>VIEW GALLERY</h4></button></a></div><!-- Corner Navigation --><div class="corner-navigation hidden-xs" style="pointer-events: auto" ng-class="{ \'light-background\' : darkBackground == false }"><a href="mailto:HELLO@THEBOSCO.COM"><p class="corner-navigation-email">HELLO@THEBOS.CO</p></a><p>212 235 8800</p><br><ul class="list-inline center-block text-center social-recap-social-icons" ng-class="{ \'light-background\' : darkBackground == false }"><li><a class="social-recap-social-icon" href="https://www.instagram.com/thebosco/" target="_blank"><i class="fa fa-2x fa-instagram" aria-hidden="true"></i></a></li><li><a class="social-recap-social-icon" href="https://www.facebook.com/theboscobooth" target="_blank"><i class="fa fa-2x fa-facebook" aria-hidden="true"></i></a></li><li><a class="social-recap-social-icon" href="https://twitter.com/thebosco" target="_blank"><i class="fa fa-2x fa-twitter" aria-hidden="true"></i></a></li><li><a class="social-recap-social-icon" href="http://thebosco.tumblr.com/" target="_blank"><i class="fa fa-2x fa-tumblr" aria-hidden="true"></i></a></li></ul></div></div><div id="social-recap" full-page options="fullPageOptions" style="overflow: hidden"><!-- Slides --><div class="slide section" style="background-color: #000000; color: #e7ab12"><!-- Slide Content --><div class="slide-content"><h2 class="plantin-mt">social recap</h2><h3 class="uppercase slide-date" style="color: #fff">{{ analytics.formatted_date }}</h3><h2 class="uppercase jumbo">{{ analytics.title }}</h2><h2 class="uppercase slide-hashtag" style="color: #fff">{{ analytics.hashtag }}</h2><p class="slide-copy" style="color: #fff; margin-top: 10vh">The social recap is here to give you a better idea of how many images were taken, shared, and seen.</p><!-- The Numbers --> <a><ul class="list-unstyled center-block text-center trade-gothic-20" style="cursor: pointer; letter-spacing: 2px; color: white; margin-top: 50px"><li data-menuanchor="slide-2"><h4>THE NUMBERS</h4></li><li><i class="fa fa-3x fa-angle-down"></i></li></ul></a></div></div><div class="slide section" style="color: #000000"><!-- Transparent Background --><div class="slide-2-transparency"></div><div class="background-photos row no-gutter no-vertical-padding" style="margin: 0"><div class="col-xs-3 col-sm-2 col-md-2 event-container" bindonce ng-repeat="asset in assets track by $index"><!-- Square 1:1 Div Container --><div class="event-image-square"><div class="event-image-overlay"><!-- Event Image --> <img class="img-responsive event-image-cover-image" bo-class="event.orientation" bo-src="asset.url_tiny"></div></div></div></div><div class="slide-content"><h2 class="plantin-mt" style="color: #ffffff">social recap</h2><p class="uppercase slide-date">{{ analytics.formatted_date }}</p><h2 class="uppercase">{{ analytics.title }}</h2><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/social-recap/photo-symbol.png" style="text-align: center; margin-top: 20px"><h1 class="jumbo" style="color: #ffffff">{{ analytics.asset_count }}</h1><h2 class="plantin-mt">images</h2><h2 class="plantin-mt">taken</h2></div></div><div class="slide section" id="slide-3-styles" style="background-color: #ffffff; color: #000000"><div class="slide-content"><h2 class="plantin-mt">social recap</h2><p class="uppercase slide-date">{{ analytics.formatted_date }}</p><h1 class="uppercase">{{ analytics.title }}</h1><div class="row plantin-mt" style="text-align:center"><div class="col-xs-4 col-sm-3 col-lg-2 col-centered"><div class="sum-circle"><div><h1 class="trade-gothic-20">{{ analytics.email_sum | number }}</h1><h3>emails</h3></div></div></div><div class="col-xs-4 col-sm-3 col-lg-2 col-centered"><div class="sum-circle"><div><h1 class="trade-gothic-20">{{ analytics.sms_sum | number }}</h1><h3>sms</h3></div></div></div><div class="col-xs-4 col-sm-3 col-lg-2 col-centered"><div class="sum-circle"><div><h1 class="trade-gothic-20">{{ analytics.twitter_sum | number }}</h1><h3>tweets</h3></div></div></div></div><p class="slide-copy">The numbers above represent how many times the images were shared by email, text and tweet directly from the sharing kiosk.</p></div></div><div class="slide section" style="background-color: #000000"><div class="slide-content"><h2 class="plantin-mt">social recap</h2><p class="uppercase slide-date">{{ analytics.formatted_date }}</p><h1 class="uppercase">{{ analytics.title }}</h1><div class="row plantin-mt" style="text-align: center; color: #e7ab12"><div class="col-xs-3 col-md-2 col-centered" style="text-align: center"><img class="img-responsive" src="https://s3.amazonaws.com/thebosco/angular-assets/images/social-recap/facebook-sphere.png" style="margin: 0 auto"><h1 class="trade-gothic-20 reach-numbers">{{ analytics.facebookReach | number }}</h1><p>facebook</p><p>reach</p></div><div class="col-xs-3 col-md-2 col-centered" style="text-align: center"><img class="img-responsive" src="https://s3.amazonaws.com/thebosco/angular-assets/images/social-recap/twitter-sphere.png" style="margin: 0 auto"><h1 class="trade-gothic-20 reach-numbers">{{ analytics.twitterReach | number }}</h1><p>twitter</p><p>reach</p></div><div class="col-xs-3 col-md-2 col-centered" style="text-align: center"><img class="img-responsive" src="https://s3.amazonaws.com/thebosco/angular-assets/images/social-recap/instagram-sphere.png" style="margin: 0 auto"><h1 class="trade-gothic-20 reach-numbers">{{ analytics.instagramReach | number }}</h1><p>instagram</p><p>reach</p></div><div class="col-xs-3 col-md-2 col-centered" style="text-align: center"><img class="img-responsive" src="https://s3.amazonaws.com/thebosco/angular-assets/images/social-recap/tumblr-sphere.png" style="margin: 0 auto"><h1 class="trade-gothic-20 reach-numbers">{{ analytics.tumblrReach | number }}</h1><p>tumblr</p><p>reach</p></div></div><p class="slide-copy">Based on the number of photos taken and shared we can estimate with high accuracy how many people saw the images across social networks, the numbers above represent that.</p></div></div><div class="slide section" style="z-index: 1"><div class="slide-5-transparency"></div><div class="background-photos row no-gutter no-vertical-padding" style="margin: 0"><div class="col-xs-3 col-sm-2 col-md-2 event-container" bindonce ng-repeat="asset in assets track by $index"><!-- Square 1:1 Div Container --><div class="event-image-square"><div class="event-image-overlay"><!-- Event Image --> <img class="img-responsive event-image-cover-image" bo-class="event.orientation" bo-src="asset.url_tiny"></div></div></div></div><div class="slide-content" style="color: #000000"><h2 class="plantin-mt" style="color: #ffffff">social recap</h2><p class="uppercase slide-date">{{ analytics.formatted_date }}</p><h1 class="uppercase">{{ analytics.title }}</h1><h1 class="uppercase jumbo" style="color: #ffffff">{{ analytics.totalReach | number }}</h1><h2>TOTAL REACH</h2><p class="slide-copy">Total reach is the total # of people who saw the images across social networks all added together.</p></div></div><div class="slide section" id="slide-6-styles" style="background-color: #e7ab12; color: white"><div class="slide-content"><h2 class="plantin-mt">social recap</h2><p class="uppercase slide-date">{{ analytics.formatted_date }}</p><h1 class="uppercase">{{ analytics.title }}</h1><h1 class="uppercase jumbo" style="color: #000000">THANK YOU!</h1><h2>Thanks for collaborating with The Bosco. We &#60;3 You!</h2></div></div></div>'), $templateCache.put("team.template.html", '<!-- meta tag updates --><update-meta name="description" content="The Bosco is an eclectic group of artists and engineers, who are passionate about storytelling, technology and experience design."></update-meta><!-- including standard navigation header --><navigation></navigation><!-- Team Statement --><section class="team-header"><div class="jumbotron bosco-jumbotron"><div class="container-fluid event-header-container" style="position: relative"><div class="bosco-jumbotron-text text-center"><h1 class="header">OUR TEAM IS COOL</h1><h3 class="plantin-mt" style="line-height: 1.3em">The Bosco team is made up of artists and engineers with a passion for social media, story telling, and technology.</h3></div></div></div></section><!-- Team Members --><div><div class="bosco-accordion bosco-accordion-team"><div ng-repeat="member in team track by $index" class="bosco-team-member" style="background-image: url(\'{{ ::member.pattern }}\')"><div><img src="{{::member.profileImage}}" class="team-member-image img-responsive"><div class="container-fluid" style="background-color: white; color: black"><div class="team-member-container col-xs-12 col-sm-6 col-sm-offset-3"><h3 class="text-center">{{ ::member.name }}</h3><h4 class="plantin-mt text-center" style="margin-top: 0">{{ ::member.title }}</h4><p class="text-center" style="font-family: \'Trade Gothic W01 Light\'">{{ ::member.bio }}</p><div style="text-align: center; margin-top: 20px; margin-bottom: 20px"><a href="http://www.twitter.com/{{ ::member.twitter }}" ng-if="member.twitter" target="_blank" style="color: black"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/team/twitter-no-outline-black.png" style="max-height: 15px"></a><a href="http://instagram.com/{{ ::member.instagram }}" ng-if="member.instagram" target="_blank" style="color: black"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/team/instagram-no-outline-black.png" style="max-height: 15px; margin-left: 15px"></a></div></div></div></div></div></div></div><!-- including standard footer --><ng-include src="\'footer.template.html\'"></ng-include>'), $templateCache.put("templates.template.html", '<!-- including standard navigation header --><navigation></navigation><div class="jumbotron bosco-jumbotron-no-background"><div class="" style="position: relative"><div class="text-center"><h1>TEMPLATES</h1><div><p class="plantin-mt">Start your designs here.</p></div></div></div></div><!-- templates content --><div class="container-liquid templates" style="font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; line-height: 2em; color: black; background-color: white; padding-top: 60px; padding-bottom: 60px"><div class="container"><div class="row"><div class="col-xs-12 col-md-6"><h2>Print</h2><p>This is a 4x6 glossy photo that prints out instantly from our photo booths, GIF booths, and printing stations</p><table class="table table-bordered table-striped"><tbody><tr><td>1-up and Instagram</td><td><a href="https://s3.amazonaws.com/thebosco/templates/basic4x6_1up.psd">Photoshop</a></td><td><a href="https://s3.amazonaws.com/thebosco/templates/basic4x6_1up.jpg">Example</a></td></tr><tr><td>2-up</td><td><a href="https://s3.amazonaws.com/thebosco/templates/basic4x6_2up.psd">Photoshop</a></td><td><a href="https://s3.amazonaws.com/thebosco/templates/basic4x6_2up.jpg">Example</a></td></tr><tr><td>4-up</td><td><a href="https://s3.amazonaws.com/thebosco/templates/basic4x6_4up.psd">Photoshop</a></td><td><a href="https://s3.amazonaws.com/thebosco/templates/basic4x6_4up.jpg">Example</a></td></tr><tr><td>Instagram Metadata</td><td><a href="https://s3.amazonaws.com/thebosco/templates/basic4x6_1up_print_metadata.psd">Photoshop</a></td><td><a href="https://s3.amazonaws.com/thebosco/templates/basic4x6_1up_print_metadata.jpg">Example</a></td></tr></tbody></table><small><em>To save files, right click and select "Save Link As"</em></small></div><div class="col-xs-12 col-md-6"><h2>Digital Shares</h2><p>The digital share is the primary takeaway from most of our booths. If you\'re uncertain about which template to use, please consult your Producer.</p><table class="table table-bordered table-striped"><tbody><tr><td>GIF Template <small>(4-Frame)</small></td><td><a href="https://s3.amazonaws.com/thebosco/templates/_GifTemplate.psd">Photoshop</a></td></tr><tr><td>MultiCam GIF Template <small>(14-Frame)</small></td><td><a href="https://s3.amazonaws.com/thebosco/templates/MultiCam-8-Frame-GIF.psd">Photoshop</a></td></tr></tbody></table><small><em>To save files, right click and select "Save Link As"</em></small></div></div><div class="row"><div class="col-xs-12 col-md-6"><h2>Video Confessional</h2><p>This is the digital video file that is shareable online and can include your branded watermark.</p><table class="table table-bordered table-striped"><tbody><tr></tr><tr><td>Watermark Template</td><td><a href="https://s3.amazonaws.com/thebosco/templates/_VideoTemplate.psd">Photoshop</a></td><td></td></tr><tr><td>Print Template</td><td><a href="https://s3.amazonaws.com/thebosco/templates/VideoPrintTemplate.psd">Photoshop</a></td><td><a href="https://s3.amazonaws.com/thebosco/templates/VideoPrintTemplate.jpg">Example</a></td></tr></tbody></table><small><em>To save files, right click and select "Save Link As"</em></small></div><div class="col-xs-12 col-md-6"><h2>Video General (Non-Confessional)</h2><p>This is the digital video file that is shareable online and can include your branded watermark.</p><table class="table table-bordered table-striped"><tbody><tr><td>Vertical</td><td><a href="https://s3.amazonaws.com/thebosco/templates/Vertical_Video_Example.mov">Video<br><small>(Example)</small></a></td><td><a href="https://s3.amazonaws.com/thebosco/templates/1-up+Vertical.zip">1-up Print Layout<br><small>(PSD + Example)</small></a></td><td><a href="https://s3.amazonaws.com/thebosco/templates/4-up+Vertical.zip">4-up Print Layout<br><small>(PSD + Example)</small></a></td></tr><tr><td>Horizontal</td><td><a href="https://s3.amazonaws.com/thebosco/templates/Horizonal_Video_Example.mov">Video<br><small>(Example)</small></a></td><td><a href="https://s3.amazonaws.com/thebosco/templates/1-up+Horizontal.zip">1-up Print Template<br><small>(PSD + Example)</small></a></td><td><a href="https://s3.amazonaws.com/thebosco/templates/4-up+Horizontal.zip">4-up Print Template<br><small>(PSD + Example)</small></a></td></tr></tbody></table><small><em>To save files, right click and select "Save Link As"</em></small></div></div><div class="row"><div class="col-xs-12 col-md-6"><h2>Backdrop</h2><p>This is the printed backdrop that sits behind the bench. Must be printed matte</p><table class="table table-bordered table-striped"><tbody><tr><td>Seated</td><td><a href="https://s3.amazonaws.com/thebosco/templates/seated_backdrop_template_48x48.pdf">PDF</a></td><td><a href="https://s3.amazonaws.com/thebosco/templates/seated_backdrop_template_48x48.psb">Photoshop</a></td><td><a href="https://s3.amazonaws.com/thebosco/templates/seated_backdrop_template_48x48.jpg">Example</a></td></tr><tr><td>Standing</td><td><a href="https://s3.amazonaws.com/thebosco/templates/standing_backdrop_template_96x96.pdf">PDF</a></td><td><a href="https://s3.amazonaws.com/thebosco/templates/standing_backdrop_template_96x96.psb">Photoshop</a></td><td><a href="https://s3.amazonaws.com/thebosco/templates/standing_backdrop_template_96x96.jpg">Example</a></td></tr></tbody></table><small><em>To save files, right click and select "Save Link As"</em></small></div><div class="col-xs-12 col-md-6"><h2>Vinyl Wraps</h2><p>Vinyl Wraps are used to apply branding to The Bosco\'s products.</p><table class="table table-bordered table-striped"><tbody><tr><td>Photo Booth</td><td><a href="https://s3.amazonaws.com/thebosco/templates/Afropunk_BoothWrapExample.jpg">Example</a></td><td><a href="https://s3.amazonaws.com/thebosco/templates/bosco_boothTOP_template.ai">Top</a></td><td><a href="https://s3.amazonaws.com/thebosco/templates/bosco_boothBACK_template.ai">Back</a></td><td><a href="https://s3.amazonaws.com/thebosco/templates/bosco_boothSIDE1_template.ai">Side 1</a></td><td><a href="https://s3.amazonaws.com/thebosco/templates/bosco_boothSIDE2_template.ai">Side 2</a></td><td></td></tr><tr><td>Photo Booth ( New )</td><td><a href="https://thebosco.s3.amazonaws.com/templates/2017_newbooth_wrap_template.AI">Illustrator</a></td><td><a href="https://thebosco.s3.amazonaws.com/templates/2017_newbooth_wrap_template_visible.pdf">PDF</a></td><td></td><td></td><td></td><td></td></tr><tr><td>#Print Station</td><td><a href="https://s3.amazonaws.com/thebosco/templates/New_printstation_wrap_template.ai">Illustrator</a></td><td><a href="https://s3.amazonaws.com/thebosco/templates/New_printstation_wrap_template.pdf">PDF</a></td><td></td><td></td><td></td><td></td></tr><tr><td>iOS Booth</td><td><a href="https://thebosco.s3.amazonaws.com/templates/boscoLITE_back_template.pdf">PDF</a></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Multicam</td><td><a href="https://thebosco.s3.amazonaws.com/templates/_Boothwrap_Mulitcam_Example.jpg">Example</a></td><td><a href="https://thebosco.s3.amazonaws.com/templates/_Boothwrap_Mulitcam_Example.psd">Photoshop</a></td><td><a href="https://thebosco.s3.amazonaws.com/templates/_Boothwrap_MultiCam_Top.ai">Top</a></td><td><a href="https://thebosco.s3.amazonaws.com/templates/_Boothwrap_MultiCam_Right.ai">Right</a></td><td><a href="https://thebosco.s3.amazonaws.com/templates/_Boothwrap_MultiCam_Left.ai">Left</a></td><td><a href="https://thebosco.s3.amazonaws.com/templates/_Boothwrap_MultiCam_Back.ai">Back</a></td></tr></tbody></table><small><em>To save files, right click and select "Save Link As"</em></small></div></div><div class="row"><div class="col-xs-12 col-md-6"><h2>Touch Screen</h2><p>This is the design & copy displayed on The Bosco booth throughout the User Experience. Dimensions of touch screens vary by product type.</p><table class="table table-bordered table-striped"><tbody><tr><td>Photobooth</td><td><a href="https://s3.amazonaws.com/thebosco/templates/_PhotoScreens.psd">Photoshop</a></td><td><a href="https://s3.amazonaws.com/thebosco/templates/_PhotoScreens.pdf">Example</a></td><td><a href="https://s3.amazonaws.com/thebosco/templates/PhotoGIFBooth_Explanation.pdf">Explanation</a></td></tr><tr><td>Video Confessional</td><td><a href="https://s3.amazonaws.com/thebosco/templates/_VideoScreens.psd">Photoshop</a></td><td><a href="https://s3.amazonaws.com/thebosco/templates/_VideoScreens.pdf">Example</a></td><td><a href="https://s3.amazonaws.com/thebosco/templates/VideoBooth_Explanation.pdf">Explanation</a></td></tr><tr><td>iOS Booth</td><td><a href="https://s3.amazonaws.com/thebosco/templates/ios-screen-templates.psd">Photoshop</a></td><td><a href="https://s3.amazonaws.com/thebosco/templates/default_IOS_screens.zip">Example</a></td><td></td></tr></tbody></table><small><em>To save files, right click and select "Save Link As"</em></small></div></div></div></div><!-- including standard footer --><ng-include src="\'footer.template.html\'"></ng-include>'), $templateCache.put("404.template.html", '<!-- including standard navigation header --><ng-include src="\'navigation.template.html\'"></ng-include><div class="container trade-gothic-20 text-center" style="background-color: white; color: black; margin-top: 120px; margin-bottom: 30px; padding-left: 0; padding-right: 0; margin-left: 0; margin-right: 0; min-width: 100%"><div class="col-xs-12" style="background-color: white; padding-top: 60px; padding-bottom: 60px"><h1 class="bosco-gold">404</h1><h3>I\'m sorry, the page you are attempting to access does not exist!</h3><h3>You may return to the gallery list <a href="photos" class="bosco-gold" style="text-decoration: none">here</a></h3></div></div><!-- including standard footer --><ng-include src="\'footer.template.html\'"></ng-include>'), $templateCache.put("terms.template.html", '<!-- including standard navigation header --><navigation></navigation><!-- Jumbotron --><div class="jumbotron bosco-jumbotron-no-background"><div class="" style="position: relative"><div class="text-center"><h1>WEB SITE TERMS & CONDITIONS OF USE</h1><div><p class="plantin-mt">All the not so fun but important stuff.</p></div></div></div></div><!-- terms --><div class="container-liquid" style="font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; line-height: 2em; color: black; background-color: white; padding-top: 60px; padding-bottom: 60px"><div class="container"><div class="terms-section"><h4 class="trade-gothic-20" style="text-transform: uppercase">1. Terms</h4><p>By accessing this web site, you are agreeing to be bound by these web site Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this web site are protected by applicable copyright and trade mark law.</p></div><div class="terms-section"><h4 class="trade-gothic-20" style="text-transform: uppercase">2. Use License</h4><ol type="a"><li>Permission is granted to temporarily download one copy of the materials (information or software) on The Bosco\'s web site for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:<ol type="i"><li>modify or copy the materials;</li><li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li><li>attempt to decompile or reverse engineer any software contained on The Bosco\'s web site;</li><li>remove any copyright or other proprietary notations from the materials; or</li><li>transfer the materials to another person or "mirror" the materials on any other server.</li></ol></li><li>This license shall automatically terminate if you violate any of these restrictions and may be terminated by The Bosco at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</li></ol></div><div class="terms-section"><h4 class="trade-gothic-20" style="text-transform: uppercase">3. Disclaimer</h4><ol type="a"><li>The materials on The Bosco\'s web site are provided "as is". The Bosco makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, The Bosco does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet web site or otherwise relating to such materials or on any sites linked to this site.</li></ol></div><div class="terms-section"><h4 class="trade-gothic-20" style="text-transform: uppercase">4. Limitations</h4><p>In no event shall The Bosco or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on The Bosco\'s Internet site, even if The Bosco or a The Bosco authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p></div><div class="terms-section"><h4 class="trade-gothic-20" style="text-transform: uppercase">5. Revisions and Errata</h4><p>The materials appearing on The Bosco\'s web site could include technical, typographical, or photographic errors. The Bosco does not warrant that any of the materials on its web site are accurate, complete, or current. The Bosco may make changes to the materials contained on its web site at any time without notice. The Bosco does not, however, make any commitment to update the materials.</p></div><div class="terms-section"><h4 class="trade-gothic-20" style="text-transform: uppercase">6. Links</h4><p>The Bosco has not reviewed all of the sites linked to its Internet web site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by The Bosco of the site. Use of any such linked web site is at the user\'s own risk.</p></div><div class="terms-section"><h4 class="trade-gothic-20" style="text-transform: uppercase">7. Site Terms of Use Modifications</h4><p>The Bosco may revise these terms of use for its web site at any time without notice. By using this web site you are agreeing to be bound by the then current version of these Terms and Conditions of Use.</p></div><div class="terms-section"><h4 class="trade-gothic-20" style="text-transform: uppercase">8. Governing Law</h4><p>Any claim relating to The Bosco\'s web site shall be governed by the laws of the State of New York without regard to its conflict of law provisions.</p><p>General Terms and Conditions applicable to Use of a Web Site.</p></div><div class="terms-section"><h3 class="trade-gothic-20" style="text-transform: uppercase">Privacy Policy</h3><p>Your privacy is very important to us. Accordingly, we have developed this Policy in order for you to understand how we collect, use, communicate and disclose and make use of personal information. The following outlines our privacy policy.</p><ul><li>Before or at the time of collecting personal information, we will identify the purposes for which information is being collected.</li><li>We will collect and use of personal information solely with the objective of fulfilling those purposes specified by us and for other compatible purposes, unless we obtain the consent of the individual concerned or as required by law.</li><li>We will only retain personal information as long as necessary for the fulfillment of those purposes.</li><li>We will collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned.</li><li>Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date.</li><li>We will protect personal information by reasonable security safeguards against loss or theft, as well as unauthorized access, disclosure, copying, use or modification.</li><li>We will make readily available to customers information about our policies and practices relating to the management of personal information.</li><li>By visiting this site, third parties may place cookies on your browser for targeted advertising purposes by collecting information including but not necessarily limited to IP addresses, cookie identifiers, and previous website activity ("Cookies Data"). Such Cookies Data may be used by third parties to target advertising on other sites based on your online activity. For more information on this and on ways to opt out of receiving targeted advertising, please review <a href="https://www.aboutads.info" target="_blank" class="bosco-gold">www.aboutads.info</a> or <a href="https://networkadvertising.org/choices" target="_blank" class="bosco-gold">networkadvertising.org/choices</a>.</li></ul><p>We are committed to conducting our business in accordance with these principles in order to ensure that the confidentiality of personal information is protected and maintained.</p></div></div></div><!-- including standard footer --><ng-include src="\'footer.template.html\'"></ng-include>'), $templateCache.put("what-is-the-bosco.template.html", '<!-- including standard navigation header --><navigation></navigation><!-- Video player jumbotron --><section class="main"><div video-player video="whatIsTheBoscoVideo" class="jumbotron bosco-jumbotron" style="margin-top: 0"><div class="video"><vimeo video="whatIsTheBoscoVideo"></vimeo><i class="fa fa-2x fa-times close-button"></i></div><div class="jumbotron bosco-jumbotron"><div class="bosco-jumbotron-content-wrapper"><div class="bosco-jumbotron-content-container"><div class="bosco-jumbotron-content text-center"><h1><a href="/team" class="bosco-gold bosco-padding" style="text-decoration: none">WE</a> CREATE <a href="/photos" class="bosco-gold" style="text-decoration: none">STATE OF THE ART</a> PHOTO INSTALLATIONS AND <a href="/case-studies" class="bosco-gold" style="text-decoration: none">UNIQUE</a> BRAND EXPERIENCES</h1><img class="play-button" src="https://s3.amazonaws.com/thebosco/angular-assets/images/play-button.png"><div class="bosco-button-row" style="margin-top: 30px"><a href="/products" style="margin: 0 auto"><button class="btn bosco-button-highlight"><h4>EXPLORE OUR PRODUCTS</h4></button></a></div></div></div></div></div></div></section><!-- Quotes --><div class="container-liquid bosco-carousel-container"><uib-carousel class="bosco-carousel white-carousel" interval="7000" active="0"><uib-slide ng-repeat="slide in quoteSlides track by slide.id" index="slide.id"><div class="col-xs-10 col-xs-offset-1 what-is-the-bosco-quote-slide"><div class="what-is-the-bosco-quote"><a href="{{ slide.link }}"><h1>"{{ slide.quote }}"</h1></a><a href="{{ slide.link }}"><img ng-src="{{slide.imageURL}}" class="what-is-the-bosco-quote-logo"></a></div></div></uib-slide></uib-carousel></div><!-- Business Logos --><div class="hidden-md hidden-lg" style="min-width: 100%"><img class="img-responsive" src="https://s3.amazonaws.com/thebosco/angular-assets/images/what-is-the-bosco/logos-mobilesite.gif" style="min-width: 100%"></div><div class="container-liquid bosco-carousel-padding hidden-xs hidden-sm" style="background-color: white"><uib-carousel class="bosco-carousel" interval="5000" active="0"><uib-slide ng-repeat="slide in logoSlides track by slide.id" index="slide.id"><img ng-src="{{slide.imageURL}}"></uib-slide></uib-carousel></div><!-- including standard footer --><ng-include src="\'footer.template.html\'"></ng-include>'),
        $templateCache.put("bosco-button.template.html", "<div ng-model=\"ngModel\" class=\"bosco-button animated fadeInUp\" ng-bind=\"label\" ng-class=\"{'inactive': ngDisabled, 'active': !ngDisabled, 'primary': primary, 'secondary': !primary}\"></div>"), $templateCache.put("event-cover-with-year.template.html", '<!-- Square 1:1 Div Container --><div class="event-container-square"><a bo-href="event.link" bo-title="event.title"><div class="event-container-overlay"><!-- Event Cover --> <img class="img-responsive event-container-cover-image" bo-class="event.orientation" bo-src="event.cover_url" onload bo-alt="event.title" bo-title="event.title"><!-- Event Information Desktop --><div class="text-center event-container-overlay-info hidden-xs hidden-sm"><div class="event-container-overlay-info-text"><h3 style="text-transform: uppercase" bo-text="event.titleShort"></h3><h4 style="text-transform: uppercase" bo-text="event.formattedDateWithYear"></h4><button type="submit" class="btn btn-default bosco-button-highlight">VIEW GALLERY</button></div></div><!-- Event Information Mobile --><div class="text-center event-container-overlay-info-mobile hidden-md hidden-lg"><div class="event-container-overlay-info-text"><button type="submit" class="btn btn-default bosco-button-highlight">VIEW GALLERY</button></div></div></div></a></div><a bo-href="event.link" bo-title="event.title"><h3 class="text-center trade-gothic-20 hidden-md hidden-lg" bo-html="event.titleShort" style="text-transform: uppercase"></h3></a>'), $templateCache.put("event-cover.template.html", '<!-- Square 1:1 Div Container --><div class="event-container-square"><a bo-href="event.link" bo-title="event.title"><div class="event-container-overlay"><!-- Event Cover --> <img class="img-responsive event-container-cover-image image-loader" bo-class="event.orientation" ng-src="{{::placeholder}}" bo-alt="event.title" bo-title="event.title" hires="{{ ::event.cover_url }}"><!-- Event Information Desktop --><div class="text-center event-container-overlay-info hidden-xs hidden-sm"><div class="event-container-overlay-info-text"><h3 style="text-transform: uppercase" bo-text="event.titleShort"></h3><h4 style="text-transform: uppercase" bo-text="event.formattedDate"></h4><button type="submit" class="btn btn-default bosco-button-highlight">VIEW GALLERY</button></div></div><!-- Event Information Mobile --><div class="text-center event-container-overlay-info-mobile hidden-md hidden-lg"><div class="event-container-overlay-info-text"><button type="submit" class="btn btn-default bosco-button-highlight">VIEW GALLERY</button></div></div></div></a></div><a bo-href="event.link" bo-title="event.title"><h3 class="text-center event-cover-title trade-gothic-20 hidden-md hidden-lg" bo-html="event.titleShort" style="text-transform: uppercase"></h3></a>'), $templateCache.put("event-image.template.html", '<!-- Square 1:1 Div Container --> <a class="anchor" ng-attr-id="{{::asset.code}}"><div class="event-image-square"><div class="event-image-overlay-info-text text-center" style="z-index: 2"><a bo-href="asset.link"><button ng-if="event.etype !== \'video\'" type="submit" class="btn btn-default bosco-button-highlight">VIEW</button> <img ng-if="event.etype == \'video\'" class="event-image-video-play-button" src="https://s3.amazonaws.com/thebosco/angular-assets/images/gallery/video-play-button.png"></a></div><div class="event-image-overlay"><!-- Event Image --> <a bo-href="asset.link"><img class="img-responsive event-image-cover-image image-loaded" bo-class="event.orientation" ng-if="asset.urlThumbBig_is_loaded && asset.is_loaded" ng-src="{{::asset.urlThumbBig}}" bo-alt="asset.code"> <img class="img-responsive event-image-cover-image image-loaded" bo-class="event.orientation" ng-if="asset.urlThumbSmall_is_loaded && !asset.urlThumbBig_is_loaded && asset.is_loaded" ng-src="{{::asset.urlThumbSmall}}" bo-alt="asset.code"> <img class="img-responsive image-loader" bo-class="event.orientation" ng-if="!asset.is_loaded" ng-src="{{::placeholder}}"></a></div></div>'), $templateCache.put("fullscreen-content.template.html", "<div ng-class=\"{ 'on': fullscreenOn }\" ng-transclude></div>"), $templateCache.put("image-box.template.html", '<!-- look-book-image = crop-box  --><div class="look-book-image col-md-6"><!-- SRC --><video ng-if="eventdata.video" volume="0" autoplay loop onloadedmetadata="this.muted = true" muted><source ng-src="{{eventdata.video.url}}"></video><img ng-if="eventdata.image" ng-src="{{eventdata.image.main.url}}"><!-- HOVER --><div class="look-book-image-hover"><div class="hover-content-wrapper"><!-- HOVER CONTENT --><div class="trade-gothic hover-content-header"><!-- HOVER CONTENT HEADER --><p class="orange-look-text text-center">product</p><p class="hover-content text-center">{{eventdata.product.text}}</p></div><div class="trade-gothic hover-content-body"><!-- HOVER CONTENT BODY --><div ng-if="eventdata.addons"><p class="orange-look-text text-center">addons</p><p ng-repeat="addon in eventdata.addons" class="hover-content text-center addon-text">{{addon.addon.value[0].text}}</p></div></div><div class="hover-content-buttons text-center"><!-- HOVER CONTENT BUTTONS --> <a ui-sref="look-book.show({id: eventdata.id})"><button type="button" name="button" id="one" class="btn btn-default bosco-button-transparent">LEARN MORE</button> </a><a href="https://www.thebosco.com/get-the-bosco"><button type="button" name="button" class="btn btn-default bosco-button-highlight">BOOK LOOK</button></a></div></div></div></div>'), $templateCache.put("image-row-mobile.template.html", '<div class="container-fluid"><div class="row row-no-pad flex-row"><div class="col-md-12"><div class="look-image-wrapper look-small-frame"><image-box ng-repeat="event in eventrowmobile" eventdata="event" style="display: inline-block"></image-box></div></div></div></div>'), $templateCache.put("image-row.template.html", '<div class="container-fluid"><div class="row row-no-pad flex-row"><div class="col-md-6"><div class="look-image-wrapper look-big-frame row-no-pad"><image-box eventdata="eventrow[0]"></image-box></div></div><div class="col-md-6"><div class="look-image-wrapper look-small-frame row-no-pad"><image-box ng-repeat="event in eventrow" ng-if="$index > 0" eventdata="event" style="display: inline-block"></image-box></div></div></div></div>'), $templateCache.put("modal.template.html", '<div class="ng-modal fade" ng-show="show"><div class="ng-modal-overlay" ng-click="hideModal()"></div><div class="ng-modal-dialog" ng-style="dialogStyle"><div class="ng-modal-close hidden-xs hidden-sm" ng-click="hideModal()">Close X</div><div class="ng-modal-close visible-xs visible-sm ng-modal-close-mobile" ng-click="hideModal()"><img src="https://s3.amazonaws.com/thebosco/angular-assets/images/small-close-x.png"></div><div class="ng-modal-dialog-content" ng-transclude></div></div></div>'), $templateCache.put("multiday-event-cover.template.html", '<div class="event-container-square"><a href="{{ ::eventDay.link }}"><div class="event-container-overlay"><!-- Event Cover --> <img class="img-responsive event-container-cover-image events-image-orientation-{{ ::event.orientation }}" ng-src="{{ ::eventDay.coverPhotoUrl}}" onload alt="{{ ::event.title }}" title="{{ ::event.title }}"><!-- Event Information  --><div class="text-center event-container-multiday-overlay-info hidden-xs hidden-sm"><div class="event-container-multiday-overlay-info-text"><h2 class="text-uppercase">{{ ::eventDay.date | uppercase }}</h2></div></div></div></a></div><a href="{{ ::eventDay.link }}" title="{{ ::event.title }}"><h3 class="text-center text-uppercase trade-gothic-20 hidden-md hidden-lg">{{ ::eventDay.date | uppercase }}</h3></a>'), $templateCache.put("video-player.template.html", ""), $templateCache.put("vimeo.template.html", '<iframe ng-src="{{video.url}}" frameborder="0"></iframe>')
}]);