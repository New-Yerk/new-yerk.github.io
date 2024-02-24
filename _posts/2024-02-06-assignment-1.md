---
title: "Assignment 1"
excerpt_separator: "<!--more-->"
categories:
  - Blog
tags:
  - Post Formats
  - readability
  - standard
---

## Part 1:

For this part of the assignment, I decided to focus on art pieces on the Harvard Art Museum (HAM) website that have certain descriptions and lack others to produce a comparative analysis between the ways artworks are presented on the website and the “All_objects.csv” file. After analyzing a few such artwords, I concluded that the layout of the website and its limited focus on one specific artwork when it is selected presents a more isolated view of the artwork that removes it from its context.

When one selects an artwork on the HAM website, a window appears that provides a comprehensive view of the description of the artwork, while occupying the entire screen of the user. While this allows for a more focused and detailed understanding of the artwork, it prevents one from understanding the piece in the context of similar artworks (from similar cultures, similar time periods, and/or acquired in the same year). However, one is able to see that in a CSV file by the means of filtering the data according to certain characteristics. For example, one of the descriptors of the artwork is its “accession year” - the year the artwork was acquired by the museum. Interestingly, the accession year is not available for all artworks, which could be for various reasons, such as anonymity, the human factor, etc. However, one is less likely to know about this lack of availability of the accession year due to the structure of the HAM website. If one only opens an artwork such as the “Triobol of the Aenianes of Thessaly” on the HAM website, one is unlikely to realize that the accession year is missing, because there is no writing that says “Accession Year: n. d.” (as there is in the case the date of the artwork is unavailable). However, viewing examining the CSV file will make it clear that there are artworks that have an accession year and some that don’t. This is important, as one is more likely to question the lack of the accession year that way.

The CSV file and the accession year are also helpful in revealing potential details about the context in which the artwork was acquired: information that would probably not be deduced through the website alone. For example, the print “Actor OTANI TOMOJI AS A SAMURAI” was accessed in 1933, noted under “Japanese.” As one isn’t able to view similar artworks on the website, a quick look at the CSV file that filters for the same accession year and culture will locate a variety of other Japanese prints such as “Actor Ichikawa Monnosuke AS A KUMOSUKE” and “​​FIVE CEROMINIES OF THE YEAR CHERRY VIEWING” that were gifted to the university in the same year. These were all gifted by “the friends of Arthur B. Duel,” who most likely gifted his collection of Japanese artwork towards the final years of his life.

In conclusion, the comparative analysis between the presentation of artworks on the Harvard Art Museum (HAM) website and the data provided in the "All_objects.csv" file highlights the differing perspectives offered by each platform. While the website provides a focused and detailed view of individual artworks, it often isolates them from their broader context, such as similar artworks from the same culture or time period. In contrast, the CSV file allows for a more comprehensive understanding by revealing patterns and details, such as the availability of accession years and the context of acquisition, which may not be readily apparent on the website. 

## Part 2: 

For this part of the assignment, I picked Ethiopian objects. It is important to note that these objects were specifically characterized as “Ethiopian” and not “East African,” pointing to a higher degree of certainty regarding the origins of the objects. Unsurprisingly, most of the objects were of religious, particularly Christian, nature, as Ethiopia is known for its rich Orthodox Christian history. While the majority of the objects were religious manuscripts, some such as “Manuscript of Discourses on the Festivals of Saint Michael, with ninety-three paintings” and “Prayer Roll in Amharic” were the most viewed, while others such as “Leather Scroll: Ethiopian Prayers” and “A Manuscript Anthology of Religious Texts and Prayers in Amharic” were the least seen objects, which is puzzling as one would assume that the contents of these objects are equally important.  

<a href = "https://harvardartmuseums.org/collections/object/215805?position=215805"> ![Manuscript of Discourses on the Festivals of Saint Michael, with ninety-three paintings](/assets/images/Ethiopian_1.jpeg) </a>

<a href = "https://harvardartmuseums.org/collections/object/215805?position=215805"> ![Manuscript of Discourses on the Festivals of Saint Michael, with ninety-three paintings](/assets/images/Ethiopian_2.jpeg) </a>

Once I visited the website, I understood that the reason why some were more ‘popular’ than others is due to the presence of images of the most viewed manuscripts and the lack of images of the least viewed ones. This is important because a visitor of the website, such as a professor of the history of Ethiopia or Christinaty, would be interested in seeing not only the descriptions of the objects, but also the contents of the manuscripts. The manuscripts that are the most viewed contain images of writings in Amharic, which could provide a great deal of information regarding the ways Ethiopian writers translated the Bible. This is likely the reason why the “Manuscript of Discourses on the Festivals of Saint Michael, with ninety-three paintings” has been seen more times than another highly viewed artwork “Prayer Roll in Amharic,” as the former is accompanied by higher resolution images, which make its writing more legible in comparison to the latter. Additionally, some of the highly viewed artworks contain images of paintings in the manuscripts, which provides a great deal of information about how Ethiopian artists depicted Christian Saints. This information is simply unaccessible in some of the least viewed artworks due to the lack of images of those objects.
  
## Part 3:

For this part of the assignment, I decided to focus on three cultures that are tied historically: Central Asian, Turkic, and Iranian. There is a great deal of influence that these cultures had on each other, with Central Asian and Turkic identities being virtually indistinguishable from each other in modernity. At first, due to the indicated stop words, the wordclouds of all three cultures had a huge “nan” culture. However, after having removed those in the code, interesting patterns began to emerge. One of the biggest clusters in the Central Asian wordcloud were the words “Buddha” and “Seated Buddha,” along with physical descriptions of the objects themselves such as “Unfired Clay” and “Wooden Stand.” The former clusters are particularly interesting due to the often overlooked history of Buddhism in Central Asia. The preserved art points to the artifacts that showcase that history. A look at the objects themselves on the HAM website reveals that the objects were connected to the Western Xia empire which had trade ties to Central Asia. Interestingly, the name of the city I am from in Kazakhstan (Semey) roughly translates to “Seven Tents,” which refer to the seven Buddhist temples that were found by Russian settlers.

![Central Asian wordcloud](/assets/images/Central_Asian_wordcloud.jpg)

The Turkic wordcloud contained two major, connected worclouds “Arslan” and “Yuluq Arslan.” These are most likely associated with Husam al-Din Yuluq Arslan, who was a ruler of Artuqid dynasty. Interestingly, this dynasty spread over Eastern Turkey, higlighitng the connection between Asia Minor and Turkic identity. 

![Turkic wordcloud](/assets/images/Turkic_wordcloud.jpg)

Finally the Iranian wordcloud contained clusters such as “Animal,” “Head,” and “Body.” The HAM website shows that most of the objects labeled as “Iranian” are ceramic sculptures of animals. 

![Iranian wordcloud](/assets/images/Iranian_wordcloud.jpg)

Most of the Central Asian objects were acquired in the year 1924, which coincides with the First Fogg Expedition to China (1923 - 1924). It is interesting to note that Central Asian objects, which were not originally found in Central Asia, ended up in a museum that is, once again, not in Central Asia. 

![Accession Year](/assets/images/Accession_Year.jpg)

In conclusion, the analysis of Central Asian, Turkic, and Iranian artifacts reveals intricate historical connections. The digital method used in this analysis underscores the significance of interdisciplinary approaches in unraveling the intertwined histories of these cultures and their rich exchanges.

**Ready for Grading**